import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { DotMap as DotMapData } from "./map-data";

/** Project a longitude/latitude into a dot map's coordinate space. */
export function project(map: DotMapData, lon: number, lat: number): [number, number] {
  const { lon0, lat1, step, unit } = map.project;
  return [((lon - lon0) / step) * unit, ((lat1 - lat) / step) * unit];
}

type Props = {
  map: DotMapData;
  /** CSS colour for Indonesian land dots */
  land: string;
  /** CSS colour for neighbouring land dots */
  neighbors?: string;
  dotScale?: number;
  className?: string;
  /** Extra SVG content drawn on top, in the map's coordinate space */
  overlay?: ReactNode;
  landClassName?: string;
  title?: string;
  /** "slice" fills the frame (cropping), "meet" shows the whole map */
  fit?: "meet" | "slice";
};

/**
 * Dot-matrix map rendered as a single path per layer: each dot is a zero-length segment
 * with a round line cap, which keeps the markup small (~1 path instead of ~1,400 circles).
 */
export function DotMap({
  map,
  land,
  neighbors = "transparent",
  dotScale = 0.46,
  className,
  overlay,
  landClassName,
  title,
  fit = "meet",
}: Props) {
  const pad = map.unit;
  const dot = map.unit * dotScale;
  return (
    <svg
      viewBox={`${-pad} ${-pad} ${map.width + pad * 2} ${map.height + pad * 2}`}
      preserveAspectRatio={`xMidYMid ${fit}`}
      className={cn("block", className ?? "h-auto w-full")}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {neighbors !== "transparent" && (
        <path d={map.neighbors} stroke={neighbors} strokeWidth={dot} strokeLinecap="round" fill="none" />
      )}
      <path
        d={map.indonesia}
        stroke={land}
        strokeWidth={dot}
        strokeLinecap="round"
        fill="none"
        className={landClassName}
      />
      {overlay}
    </svg>
  );
}
