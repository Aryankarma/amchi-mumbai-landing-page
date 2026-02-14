import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "IFactory — The Operating System for Food Supply Chains",
  description:
    "AI-powered supply chain orchestration for the modern food industry. Automate procurement, streamline production, and eliminate communication gaps across your entire operation.",
};

export const viewport: Viewport = {
  themeColor: "#1a1510",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
