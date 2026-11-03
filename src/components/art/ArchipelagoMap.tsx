import { DotMap, project } from "./DotMap";
import { archipelagoMap } from "./map-data";

/**
 * Hero composition: the Indonesian archipelago as a dot matrix, with three hairline routes
 * leaving the frame toward the wider world. The routes are deliberately abstract — they do
 * not depict specific trade lanes or office locations.
 *
 * Motion: the one orchestrated moment on the site. The map reveals west → east, then the
 * routes draw. Both are disabled under prefers-reduced-motion (see globals.css).
 */

const routes: { from: [number, number]; via: [number, number]; to: [number, number] }[] = [
  { from: [106.8, -6.2], via: [99, 3], to: [88, 9.5] },
  { from: [112.7, -7.25], via: [117, 2], to: [121.5, 11] },
  { from: [119.45, -5.15], via: [133, -4], to: [146, -13.5] },
];

export function ArchipelagoMap({ className }: { className?: string }) {
  const m = archipelagoMap;
  const points = routes.map((r) => ({
    from: project(m, ...r.from),
    via: project(m, ...r.via),
    to: project(m, ...r.to),
  }));
  const overlay = (
    <g fill="none">
      {points.map(({ from, via, to }, i) => (
        <path
          key={`route-${i}`}
          d={`M${from[0]} ${from[1]} Q${via[0]} ${via[1]} ${to[0]} ${to[1]}`}
          stroke="var(--color-gold)"
          strokeWidth={1.5}
          strokeOpacity={0.9}
          pathLength={1}
          strokeDasharray="1"
          className="animate-route-draw"
          style={{ animationDelay: `${1.2 + i * 0.2}s` }}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <g className="animate-node-in">
        {points.map(({ from }, i) => (
          <g key={`node-${i}`}>
            <circle cx={from[0]} cy={from[1]} r={9} fill="var(--color-gold)" />
            <circle
              cx={from[0]}
              cy={from[1]}
              r={20}
              stroke="var(--color-gold)"
              strokeOpacity={0.5}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        ))}
      </g>
    </g>
  );

  return (
    <div className={className}>
      <DotMap
        map={m}
        land="rgb(195 208 240 / 0.78)"
        neighbors="rgb(246 248 252 / 0.13)"
        dotScale={0.56}
        overlay={overlay}
        className="h-auto w-full animate-map-reveal"
      />
    </div>
  );
}
