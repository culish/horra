/**
 * Photography slots.
 *
 * No photography has been supplied yet, so every slot falls back to the dot-map artwork.
 * To use a photo: add the file to /public/images and set `src` (and a descriptive `alt`).
 * Only use images the company owns or is licensed to use. Recommended: landscape, at least
 * 1600px wide, WebP or AVIF.
 */

export type MediaSlot = "consulting" | "trading" | "travel" | "about";

export const media: Record<MediaSlot, { src?: string; alt: string }> = {
  consulting: { src: undefined, alt: "" },
  trading: { src: undefined, alt: "" },
  travel: { src: undefined, alt: "" },
  about: { src: undefined, alt: "" },
};
