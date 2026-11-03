"use client";

import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Clock, LoaderCircle, Lock } from "lucide-react";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

type SnapResult = { order_id?: string; transaction_status?: string; status_message?: string };
type SnapCallbacks = {
  onSuccess?: (r: SnapResult) => void;
  onPending?: (r: SnapResult) => void;
  onError?: (r: SnapResult) => void;
  onClose?: () => void;
};
declare global {
  interface Window {
    snap?: { pay: (token: string, callbacks?: SnapCallbacks) => void };
  }
}

type Status = "idle" | "loading" | "open" | "success" | "pending" | "closed" | "error" | "already_paid" | "expired";

let scriptPromise: Promise<void> | null = null;
function loadSnap(src: string, clientKey: string) {
  if (window.snap) return Promise.resolve();
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.setAttribute("data-client-key", clientKey);
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      s.remove();
      reject(new Error("snap.js failed to load"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

const messages: Partial<Record<Status, { tone: "ok" | "wait" | "bad"; title: string; body: string }>> = {
  success: {
    tone: "ok",
    title: "Payment received",
    body: "Thank you. Your payment was successful and our team has been notified. A receipt from Midtrans is sent to your email if you provided one.",
  },
  pending: {
    tone: "wait",
    title: "Waiting for your payment",
    body: "Follow the instructions shown (e.g. the virtual account number or QR code) to complete the transfer. We are notified automatically once it arrives.",
  },
  closed: {
    tone: "wait",
    title: "Payment not completed",
    body: "The payment window was closed before the payment finished. You can start again whenever you are ready.",
  },
  error: {
    tone: "bad",
    title: "The payment could not be started",
    body: "Nothing was charged. Please try again in a moment, or contact us and we will help.",
  },
  already_paid: {
    tone: "ok",
    title: "This invoice is already paid",
    body: "Our records show this payment link has been paid. No further payment is needed.",
  },
  expired: {
    tone: "bad",
    title: "This payment link has expired",
    body: "Please contact us for a new link.",
  },
};

export function PayButton({ token, clientKey, scriptUrl }: { token: string; clientKey: string; scriptUrl: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const liveRef = useRef<HTMLDivElement>(null);
  const busy = status === "loading" || status === "open";

  async function pay() {
    setStatus("loading");
    try {
      const [res] = await Promise.all([
        fetch("/api/payments/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }),
        loadSnap(scriptUrl, clientKey),
      ]);
      const data = (await res.json()) as { ok: boolean; token?: string; reason?: string };
      if (!data.ok || !data.token || !window.snap) {
        setStatus(data.reason === "already_paid" ? "already_paid" : data.reason === "expired" ? "expired" : "error");
        return;
      }
      setStatus("open");
      window.snap.pay(data.token, {
        onSuccess: () => setStatus("success"),
        onPending: () => setStatus("pending"),
        onError: () => setStatus("error"),
        onClose: () => setStatus((s) => (s === "open" ? "closed" : s)),
      });
    } catch {
      setStatus("error");
    }
  }

  const msg = messages[status];
  const done = status === "success" || status === "already_paid" || status === "expired";

  return (
    <div>
      <div ref={liveRef} aria-live="polite">
        {msg && (
          <div
            className={cn(
              "mb-6 flex gap-3 rounded-[4px] border p-5",
              msg.tone === "ok" && "border-forest/30 bg-forest/[0.06] text-forest",
              msg.tone === "wait" && "border-gold/50 bg-sand text-ink-soft",
              msg.tone === "bad" && "border-[#B42318]/30 bg-[#FEF3F2] text-[#912018]",
            )}
          >
            {msg.tone === "ok" ? (
              <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0" />
            ) : msg.tone === "wait" ? (
              <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-ink" />
            ) : (
              <AlertCircle aria-hidden className="mt-0.5 size-5 shrink-0" />
            )}
            <div>
              <p className="font-semibold">{msg.title}</p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed">{msg.body}</p>
            </div>
          </div>
        )}
      </div>

      {!done && (
        <button
          type="button"
          onClick={pay}
          disabled={busy}
          className={buttonClass("primary", "w-full disabled:opacity-70")}
        >
          {busy ? (
            <>
              <LoaderCircle aria-hidden className="size-5 animate-spin" />
              {status === "open" ? "Payment window open…" : "Preparing secure payment…"}
            </>
          ) : (
            <>
              <Lock aria-hidden className="size-4" />
              {status === "pending" || status === "closed" || status === "error" ? "Pay again" : "Pay now"}
            </>
          )}
        </button>
      )}
    </div>
  );
}
