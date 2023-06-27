import "./globals.css";
import { Titillium_Web } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import logo from "../public/img/logo.png";

const titillium = Titillium_Web({
  subsets: ["latin-ext"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "BioHackCloud",
  description: "Generated by create next app",
  manifest: "/img/favicon/site.webmanifest",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/img/browserconfig.xml" />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#576128"
        />
      </head>
      <body className={titillium.className}>
        <header>
          <Image
            src={logo}
            alt="BioHackCloud"
            className=" w-[18em] my-[1em] mx-auto"
          />
        </header>
        {children}
        <footer className=" px-0 py-[2em] font-bold text-center">
          <p>BioHackCloud 2023</p>
        </footer>
      </body>
    </html>
  );
}