"use client";

import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Clock, LoaderCircle, Lock } from "lucide-react";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/client";
import { loadSnap } from "./snap";

type Status = "idle" | "loading" | "open" | "success" | "pending" | "closed" | "error" | "already_paid" | "expired";

export function PayButton({ token, clientKey, scriptUrl }: { token: string; clientKey: string; scriptUrl: string }) {
  const { t } = useI18n();
  const b = t.pay.button;
  const messages: Partial<Record<Status, { tone: "ok" | "wait" | "bad"; title: string; body: string }>> = {
    success: { tone: "ok", ...b.success },
    pending: { tone: "wait", ...b.pending },
    closed: { tone: "wait", ...b.closed },
    error: { tone: "bad", ...b.error },
    already_paid: { tone: "ok", ...b.alreadyPaid },
    expired: { tone: "bad", ...b.expired },
  };
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
        loadSnap({ scriptUrl, clientKey, sandbox: false }),
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
              {status === "open" ? b.open : b.preparing}
            </>
          ) : (
            <>
              <Lock aria-hidden className="size-4" />
              {status === "pending" || status === "closed" || status === "error" ? b.payAgain : b.payNow}
            </>
          )}
        </button>
      )}
    </div>
  );
}
