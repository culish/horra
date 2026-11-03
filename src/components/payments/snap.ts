"use client";

/** Loads Midtrans snap.js once and opens the payment popup. */

export type SnapResult = { order_id?: string; transaction_status?: string; status_message?: string };
export type SnapCallbacks = {
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

export type SnapConfig = { clientKey: string; scriptUrl: string; sandbox: boolean };

let scriptPromise: Promise<void> | null = null;

export function loadSnap({ scriptUrl, clientKey }: SnapConfig) {
  if (window.snap) return Promise.resolve();
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = scriptUrl;
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
