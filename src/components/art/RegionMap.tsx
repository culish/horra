import { DotMap, project } from "./DotMap";
import { consultingMap, tradingMap, travelMap } from "./map-data";
import type { DivisionKey } from "@/content/divisions";

/**
 * Division artwork: a close crop of the dot map for each division, so all three
 * cards share one visual system. Java for consulting, the Strait of Malacca for trading,
 * Bali and Nusa Tenggara for travel. Unlabelled and decorative.
 */

const regions = {
  consulting: { map: consultingMap, marker: [106.83, -6.2] as [number, number] },
  trading: { map: tradingMap, marker: [100.9, 2.15] as [number, number] },
  travel: { map: travelMap, marker: [115.2, -8.65] as [number, number] },
};

export const regionTones: Record<DivisionKey, { bg: string; land: string; neighbors: string }> = {
  consulting: { bg: "bg-navy", land: "rgb(195 208 240 / 0.7)", neighbors: "rgb(246 248 252 / 0.14)" },
  trading: { bg: "bg-forest", land: "rgb(246 248 252 / 0.55)", neighbors: "rgb(246 248 252 / 0.16)" },
  travel: { bg: "bg-sand", land: "rgb(21 43 129 / 0.5)", neighbors: "rgb(21 43 129 / 0.14)" },
};

export function RegionMap({
  division,
  className,
  land,
  neighbors,
  fit,
}: {
  division: DivisionKey;
  className?: string;
  land?: string;
  neighbors?: string;
  fit?: "meet" | "slice";
}) {
  const { map, marker } = regions[division];
  const tone = regionTones[division];
  const [x, y] = project(map, ...marker);
  return (
    <DotMap
      map={map}
      land={land ?? tone.land}
      neighbors={neighbors ?? tone.neighbors}
      dotScale={0.52}
      fit={fit}
      className={className}
      overlay={
        <g>
          <circle cx={x} cy={y} r={8} fill="var(--color-gold)" />
          <circle cx={x} cy={y} r={20} fill="none" stroke="var(--color-gold)" strokeWidth={1.5} strokeOpacity={0.6} />
        </g>
      }
    />
  );
}
