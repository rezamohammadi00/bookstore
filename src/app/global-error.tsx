"use client"; // Error boundaries must be Client Components 
// // the global-error.tsx only renders if a error happens in RootLayout in production mode.

import "@/src/styles/globals.css";
import DaisyuiScript from "@/src//scripts/DaisyuiScript";

export default function GlobalError() {
  return (
    // global-error must include html and body tags
    <html lang="fa-IR" data-theme="winter">
      <head>
        <DaisyuiScript />
      </head>
      <body dir="rtl">
        <main className="w-screen h-screen flex justify-center items-center">
          <div className="w-1/2">
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                خطایی نامعمول رخ داده است لطفا با پشتیان(09167718891) تماس
                بگیرید.
              </span>
              <button
                className="btn btn-sm"
                onClick={() => window.location.reload()} //این لاین یادت نره تو این فایل
              >
                تلاش دوباره
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
