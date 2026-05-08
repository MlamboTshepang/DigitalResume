import type { Metadata } from "next";
import { Courier_Prime, Space_Grotesk } from "next/font/google";
import "./globals.css";
import React from "react";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "MLAMBO_T // Level 4",
  description: "Digital Resume and Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${courierPrime.variable} ${spaceGrotesk.variable} dossier-bg min-h-screen p-4 pt-24 md:p-16 lg:p-24 flex justify-center font-mono selection:bg-pine selection:text-paper text-ink`}>
        {children}
      </body>
    </html>
  );
}