// Widths the Next image optimizer accepts (default deviceSizes + imageSizes).
const WIDTHS = [32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// Payload serves uploads at their original size and format (multi-MB PNGs).
// Route them through the Next image optimizer so browsers receive a resized
// WebP instead. Static /assets/images files are already WebP and are returned
// untouched, as are empty values and anything the optimizer isn't allowed to
// fetch (see images.localPatterns in next.config.mjs).
export function mediaSrc(url, width = 828) {
  if (!url) return url;
  let path = url;
  if (/^https?:\/\//.test(url)) {
    try {
      path = new URL(url).pathname;
    } catch {
      return url;
    }
  }
  if (!path.startsWith("/api/media/file/")) return url;
  const w = WIDTHS.find((size) => size >= width) || WIDTHS[WIDTHS.length - 1];
  return `/_next/image?url=${encodeURIComponent(path)}&w=${w}&q=75`;
}

const heroFallbacks = ["banner-one-bg", "banner-two-bg", "banner-three-bg", "banner-four-bg"];

// Large and small (mobile, below 768px) background for a home hero slide. CMS
// uploads are resized by the optimizer; the bundled fallbacks ship a pre-made
// -sm variant.
export function heroBackground(slide, index) {
  const url = slide?.backgroundImage?.url;
  if (url) return { lg: mediaSrc(url, 1920), sm: mediaSrc(url, 828) };
  const name = `/assets/images/banner/${heroFallbacks[index % heroFallbacks.length]}`;
  return { lg: `${name}.webp`, sm: `${name}-sm.webp` };
}
