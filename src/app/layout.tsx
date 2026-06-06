import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`dark ${outfit.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-background text-on-background font-body-md antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden overflow-y-scroll min-h-screen flex flex-col relative`}>
        {/* Global Background Texture */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
          <div 
            className="absolute inset-0 opacity-5 mix-blend-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('/bg_main.png')` }}
          />
        </div>
        <TopNavBar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
