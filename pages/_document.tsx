import { Html, Head, Main, NextScript } from "next/document";
import {
  BRAND_APPLE_ICON,
  BRAND_FAVICON,
  BRAND_MANIFEST_PATH,
  BRAND_THEME_COLOR,
} from "@/utils/branding";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="favicon" href={BRAND_FAVICON} />
        <link rel="icon" href={BRAND_FAVICON} />
        <link rel="apple-icon" href={BRAND_APPLE_ICON} />
        <link rel="manifest" href={BRAND_MANIFEST_PATH} />
        <meta name="theme-color" content={BRAND_THEME_COLOR} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
