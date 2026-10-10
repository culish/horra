// Generates src/components/art/map-data.ts. Needs dev-only packages:
//   npm install --no-save world-atlas topojson-client d3-geo
import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const topo = require("world-atlas/countries-10m.json");
const { feature } = require("topojson-client");
const { geoContains, geoArea, geoCentroid } = require("d3-geo");

const all = feature(topo, topo.objects.countries).features;
const ID = "360";
const NEIGH = ["458", "096", "598", "626", "702", "608", "036", "764", "704", "116"];
const indo = all.find((f) => f.id === ID);
const neigh = all.filter((f) => NEIGH.includes(f.id) && f.properties.name !== "Ashmore and Cartier Is.");

// explode multipolygons into individual polygon features
function polys(f) {
  const g = f.geometry;
  const list = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  return list.map((c) => ({ type: "Feature", geometry: { type: "Polygon", coordinates: c } }));
}
const indoPolys = polys(indo);
const neighPolys = neigh.flatMap(polys);

function bbox(p) {
  let a = [180, 90, -180, -90];
  for (const [x, y] of p.geometry.coordinates[0]) {
    a[0] = Math.min(a[0], x);
    a[1] = Math.min(a[1], y);
    a[2] = Math.max(a[2], x);
    a[3] = Math.max(a[3], y);
  }
  return a;
}
for (const p of [...indoPolys, ...neighPolys]) p.bb = bbox(p);

function inside(list, lon, lat) {
  for (const p of list) {
    const b = p.bb;
    if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
    if (geoContains(p, [lon, lat])) return p;
  }
  return null;
}

function build({ lon0, lon1, lat0, lat1, step, unit = 10, minIslandSr = 0 }) {
  const cols = Math.round((lon1 - lon0) / step);
  const rows = Math.round((lat1 - lat0) / step);
  const indoPts = [],
    neighPts = [];
  const hit = new Set();
  for (let r = 0; r <= rows; r++) {
    const lat = lat1 - r * step;
    for (let c = 0; c <= cols; c++) {
      const lon = lon0 + c * step;
      const p = inside(indoPolys, lon, lat);
      if (p) {
        indoPts.push([c * unit, r * unit]);
        hit.add(p);
        continue;
      }
      if (inside(neighPolys, lon, lat)) neighPts.push([c * unit, r * unit]);
    }
  }
  // small islands that the grid missed: add one dot at centroid snapped to half-grid
  let extra = 0;
  for (const p of indoPolys) {
    if (hit.has(p)) continue;
    const [clon, clat] = geoCentroid(p);
    if (clon < lon0 || clon > lon1 || clat < lat0 || clat > lat1) continue;
    if (geoArea(p) < minIslandSr) continue;
    const x = (Math.round(((clon - lon0) / step) * 2) / 2) * unit;
    const y = (Math.round(((lat1 - clat) / step) * 2) / 2) * unit;
    indoPts.push([x, y]);
    extra++;
  }
  const toPath = (pts) => pts.map(([x, y]) => `M${+x.toFixed(1)} ${+y.toFixed(1)}h0`).join("");
  return {
    width: cols * unit,
    height: rows * unit,
    unit,
    indonesia: toPath(indoPts),
    neighbors: toPath(neighPts),
    stats: { indo: indoPts.length, neigh: neighPts.length, extra },
    project: { lon0, lat1, step, unit },
  };
}

// 1 sr ~ (180/pi)^2 sq deg ≈ 3283 sq deg ; minIsland 0.01 sq deg ≈ 3e-6 sr
const maps = {
  archipelago: build({ lon0: 93, lon1: 142, lat0: -12, lat1: 8, step: 0.34, minIslandSr: 3e-6 }),
  consulting: build({ lon0: 104, lon1: 118, lat0: -9.6, lat1: -1.7, step: 0.16, minIslandSr: 1e-6 }),
  trading: build({ lon0: 95.5, lon1: 109.5, lat0: -3.6, lat1: 4.3, step: 0.16, minIslandSr: 1e-6 }),
  travel: build({ lon0: 113, lon1: 127, lat0: -11.4, lat1: -3.5, step: 0.16, minIslandSr: 1e-6 }),
};
for (const [k, v] of Object.entries(maps))
  console.log(k, v.width, v.height, v.stats, ((v.indonesia.length + v.neighbors.length) / 1024) | 0, "KB");

let out = `// Generated dot-matrix map data. Source geometry: Natural Earth (public domain) via the
// world-atlas package (countries-10m). Equirectangular projection; one dot per grid cell on land,
// plus one dot for each small Indonesian island the grid misses. Regenerate with: node scripts/generate-map-data.mjs src/components/art/map-data.ts
// Do not edit by hand.

export type DotMap = {
  width: number;
  height: number;
  unit: number;
  indonesia: string;
  neighbors: string;
  project: { lon0: number; lat1: number; step: number; unit: number };
};

`;
for (const [k, v] of Object.entries(maps)) {
  const rest = { ...v };
  delete rest.stats;
  out += `export const ${k}Map: DotMap = ${JSON.stringify(rest)};\n\n`;
}
fs.writeFileSync(process.argv[2], out);
