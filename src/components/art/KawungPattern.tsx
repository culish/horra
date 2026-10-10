import { useId } from "react";

/**
 * A quiet line drawing of the kawung motif — four ovals meeting at a point, one of the oldest
 * Javanese batik patterns. Used once, behind the closing call to action.
 */
export function KawungPattern({ className, opacity = 0.09 }: { className?: string; opacity?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg aria-hidden focusable="false" className={className} width="100%" height="100%">
      <defs>
        <pattern id={`kawung-${id}`} width="56" height="56" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="var(--color-gold)" strokeWidth="1" strokeOpacity={opacity * 10}>
            <ellipse cx="14" cy="14" rx="7.5" ry="16.5" transform="rotate(-45 14 14)" />
            <ellipse cx="42" cy="14" rx="7.5" ry="16.5" transform="rotate(45 42 14)" />
            <ellipse cx="14" cy="42" rx="7.5" ry="16.5" transform="rotate(45 14 42)" />
            <ellipse cx="42" cy="42" rx="7.5" ry="16.5" transform="rotate(-45 42 42)" />
            <circle cx="28" cy="28" r="1.6" />
            <circle cx="0" cy="0" r="1.6" />
            <circle cx="56" cy="0" r="1.6" />
            <circle cx="0" cy="56" r="1.6" />
            <circle cx="56" cy="56" r="1.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#kawung-${id})`} />
    </svg>
  );
}
