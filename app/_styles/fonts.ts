import localFont from "next/font/local";

const IRANSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansWeb_Light.woff2",
      weight: "300", // Light                ---->font-light
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansWeb.woff2",
      weight: "400", // regular              ---> font-normal
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/woff2/IRANSansWeb_Bold.woff2",
      weight: "700", // Bold                 ---> font-bold
      style: "normal",
    },
  ],
  display: "swap", // Ensures text is visible while font loads
  variable: "--font-IRANSans", // Custom CSS variable for Tailwind integration
});

export default IRANSans;
