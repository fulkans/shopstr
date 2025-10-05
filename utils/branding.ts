export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME ?? "Shopstr";
export const BRAND_SHORT_NAME =
  process.env.NEXT_PUBLIC_BRAND_SHORT_NAME ?? BRAND_NAME;
export const BRAND_TAGLINE =
  process.env.NEXT_PUBLIC_BRAND_TAGLINE ?? "Shop freely.";

// Public base URL used for metadata fallbacks
export const BRAND_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shopstr.store";

// Images and icons
export const BRAND_DEFAULT_IMAGE =
  process.env.NEXT_PUBLIC_BRAND_DEFAULT_IMAGE ?? "/shopstr-2000x2000.png";
export const BRAND_FAVICON =
  process.env.NEXT_PUBLIC_BRAND_FAVICON ?? "/shopstr.ico";
export const BRAND_APPLE_ICON =
  process.env.NEXT_PUBLIC_BRAND_APPLE_ICON ?? "/shopstr.png";

// Colors
export const BRAND_THEME_COLOR =
  process.env.NEXT_PUBLIC_BRAND_THEME_COLOR ?? "#E8E8E8";

export const BRAND_MANIFEST_PATH = "/manifest.json";
