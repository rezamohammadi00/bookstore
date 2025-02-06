// "use client" // if needed
import Script from "next/script";

const DAISY_UI_CSS_URL = "https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css";
const TAILWIND_JS_URL = "https://cdn.tailwindcss.com";

function DaisyuiScript() {
  return (
    <>
      <link href={DAISY_UI_CSS_URL} rel="stylesheet" type="text/css" />
      <Script src={TAILWIND_JS_URL} strategy="beforeInteractive"></Script>
    </>
  );
}

export default DaisyuiScript;

// tips:
// beforeInteractive: Use this strategy for scripts that must load before the page becomes interactive, like essential analytics or monitoring tools.
// afterInteractive: When you use this strategy, the script loads after the page becomes interactive, which is the default behavior. This is ideal for scripts that add functionality but aren’t essential for initial rendering.
// lazyOnload: Defers loading the script until all other page resources have finished loading. This is perfect for non-essential scripts like ads or social media widgets.
