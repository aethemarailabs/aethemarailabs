import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Aethemar AI Labs | Imagine Anything. Create Everything.",
  description: "Aethemar AI Labs - Marketing agency & SW development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${hankenGrotesk.variable} ${geist.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-background text-on-background font-body-md antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden min-h-screen flex flex-col relative`}>
        {children}
      </body>
    </html>
  );
}
