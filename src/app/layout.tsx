import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070d14",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linycon.in"),
  title: "Linycon Private Limited | Electrical, Illumination & Infrastructure Solutions",
  description:
    "From site surveys and electrical system design to project execution, testing and commissioning, Linycon Private Limited delivers integrated solutions for electrical, illumination and infrastructure projects.",
  keywords: [
    "Linycon Private Limited",
    "Electrical contractor",
    "Illumination solutions",
    "Highway lighting India",
    "Toll plaza electrification",
    "Tunnel underdeck illumination",
    "Stadium lighting",
    "HT Work Transformers DG Sets",
    "Electrical system design",
    "Site surveys IS standards",
    "CCTV LV systems Mumbai monorail",
  ],
  authors: [{ name: "Linycon Private Limited" }],
  openGraph: {
    title: "Linycon Private Limited | Electrical, Illumination & Infrastructure Solutions",
    description:
      "Integrated engineering solutions from concept to commissioning for highway lighting, HT works, toll plazas, tunnels, and infrastructure electrification.",
    url: "https://www.linycon.in",
    siteName: "Linycon Private Limited",
    images: [
      {
        url: "/images/hero_highway.jpg",
        width: 1200,
        height: 630,
        alt: "Linycon Infrastructure & Illumination Engineering",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
