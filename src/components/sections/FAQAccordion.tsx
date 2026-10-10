"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Disclosure-pattern accordion. Answers are always in the HTML (hidden when collapsed), so the
 * content is indexable and available without JavaScript once expanded by assistive tech.
 */
export function FAQAccordion({
  items,
  headingLevel = "h3",
  className,
}: {
  items: { q: string; a: string }[];
  headingLevel?: "h3" | "h4";
  className?: string;
}) {
  const base = useId().replace(/:/g, "");
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const Heading = headingLevel;

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className={cn("divide-y divide-navy/12 border-y border-navy/12", className)}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        const buttonId = `${base}-q-${i}`;
        const panelId = `${base}-a-${i}`;
        return (
          <div key={item.q}>
            <Heading className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left font-semibold text-navy hover:text-forest"
              >
                <span>{item.q}</span>
                <Plus
                  aria-hidden
                  className={cn(
                    "mt-0.5 size-5 shrink-0 text-forest transition-transform duration-200",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="max-w-[44rem] pb-6 leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
