import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import "@/src/styles/globals.css";
import IranSansXPro from "@/src/styles/fonts";
import Layout from "@/src/components/Layout";
import Daisyui from "@/src/scripts/Daisyui";
import { CartProvider } from "@/src/providers/Cart";

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
      {/* for to add daisyUI theme(winter) added tailwind.config.ts*/}
      <head>
        <Daisyui />
      </head>
      <body
        className={`${IranSansXPro.className} ${IranSansXPro.variable} antialiased font-normal`}
        dir="rtl"
      >
        <SessionProvider>
          <CartProvider>
            <Layout>{children}</Layout>
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
