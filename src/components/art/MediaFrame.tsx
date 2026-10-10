import Image from "next/image";
import type { ReactNode } from "react";
import { media, type MediaSlot } from "@/content/media";
import { cn } from "@/lib/cn";

/**
 * Renders the photo configured for a slot (src/content/media.ts), or the supplied artwork
 * as a graceful fallback. In development, a small badge marks slots still using the fallback.
 */
export function MediaFrame({
  slot,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority,
  children,
}: {
  slot: MediaSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children: ReactNode;
}) {
  const item = media[slot];
  if (item.src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image src={item.src} alt={item.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <span className="absolute top-2 right-2 rounded-[2px] bg-black/55 px-1.5 py-0.5 text-[10px] font-medium text-white">
          Photo slot: {slot}
        </span>
      )}
    </div>
  );
}
