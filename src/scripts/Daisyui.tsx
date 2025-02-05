import Script from "next/script";

// Constants for external resources
const DAISY_UI_CSS_URL =
  "https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css";
const TAILWIND_JS_URL = "https://cdn.tailwindcss.com";

function Daisyui() {
  return (
    <>
      <link href={DAISY_UI_CSS_URL} rel="stylesheet" type="text/css" />
      <Script src={TAILWIND_JS_URL} strategy="beforeInteractive"></Script>
    </>
  );
}

export default Daisyui;
