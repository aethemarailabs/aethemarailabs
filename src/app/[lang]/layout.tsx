import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aethemar AI Labs | Imagine Anything. Create Everything.",
  description: "Aethemar AI Labs - Marketing agency & SW development",
  openGraph: {
    title: "Aethemar AI Labs",
    description: "Imagine Anything. Create Everything.",
    url: "https://aethemar.com", // Replace with actual domain later if needed
    siteName: "Aethemar AI Labs",
    images: [
      {
        url: "/og_image.png", // The newly attached image
        width: 1000,
        height: 1000,
        alt: "Aethemar AI Labs Logo",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethemar AI Labs",
    description: "Imagine Anything. Create Everything.",
    images: ["/og_image.png"],
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang ?? 'ko'} className={`dark ${outfit.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`bg-background text-on-background font-body-md antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden overflow-y-scroll min-h-screen flex flex-col relative pb-20 md:pb-0`}>
        {/* Global Background Texture */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
          <div 
            className="absolute inset-0 opacity-5 mix-blend-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('/bg_main.png')` }}
          />
        </div>
        <TopNavBar />
        <main className="flex-grow pt-24 w-full overflow-x-hidden">
          {children}
        </main>
        <MobileBottomNav />
        <Footer />
      </body>
    </html>
  );
}
