import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import "@/src/styles/globals.css";
import IranSansXPro from "@/src/styles/fonts";
import Layout from "@/src/components/Layout";
import DaisyuiScript from "@/src/scripts/DaisyuiScript";
import { CartProvider } from "@/src/providers/Cart";
// import { ErrorWrapper } from "@/src/components/error-wrapper";

export const metadata: Metadata = {
  title: "کتابان",
  description: "کتاب فروشی کتابان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" data-theme="winter">
      {/*data-theme="winter" for to add daisyUI theme(winter) added tailwind.config.ts*/}
      <head>
        <DaisyuiScript />
        {/* but Mosh do not use <head></head> */}
      </head>
      <body
        className={`${IranSansXPro.className} ${IranSansXPro.variable} antialiased font-normal`}
        dir="rtl"
      >
        <SessionProvider>
          <CartProvider>
            <Layout>
              {/* <ErrorWrapper>  for test global-error.tsx */}
              {children}
              {/* </ErrorWrapper> */}
            </Layout>
          </CartProvider>
        </SessionProvider>
      </body>
      {/* <DaisyuiScript />  recommended by doc */}
    </html>
  );
}
