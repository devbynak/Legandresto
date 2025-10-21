import "./../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Nunito_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

const uiBody = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
});

const uiDisplay = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800"],
  preload: true,
});

const uiNumbers = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-numbers",
  display: "swap",
  weight: ["600", "700"],
  preload: true,
});

// Keep Inter specifically for header/footer menu elements
const menuSans = Inter({
  subsets: ["latin"],
  variable: "--font-menu",
  display: "swap",
});

// Brand uses Vintage Lander font
const brandSans = localFont({
  src: "../styles/fonts/Vintage Lander PersonalUseOnly.ttf",
  variable: "--font-brand",
  display: "swap",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002"),
  title: "Le Grandresto — Fine Dining Experience",
  description: "Experience luxurious Filipino–Arabic fusion cuisine, crafted with authentic Kerala spices in the heart of Salah Al Din, Deira, Dubai.",
  keywords: ["fine dining", "Filipino-Arabic fusion", "Dubai restaurant", "Kerala spices", "luxury dining", "Deira restaurant"],
  authors: [{ name: "Le Grandresto" }],
  category: "Restaurant",
  icons: [
    { rel: "icon", url: "/logo.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/logo.png", sizes: "16x16", type: "image/png" },
    { rel: "apple-touch-icon", url: "/logo.png", sizes: "180x180" },
    { rel: "shortcut icon", url: "/logo.png", type: "image/png" }
  ],
  manifest: "/manifest.json",
  openGraph: {
    title: "Le Grandresto — Fine Dining Experience",
    description: "Experience luxurious Filipino–Arabic fusion cuisine, crafted with authentic Kerala spices.",
    siteName: "Le Grandresto",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002",
    images: [
      { 
        url: "/logo.png", 
        width: 512, 
        height: 512, 
        alt: "Le Grandresto logo" 
      },
      {
        url: "/restaurant-front.jpg",
        width: 1200,
        height: 630,
        alt: "Le Grandresto restaurant front"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Grandresto — Fine Dining Experience",
    description: "Experience luxurious Filipino–Arabic fusion cuisine in Dubai",
    images: ["/restaurant-front.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0B0B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Le Grandresto",
    url: siteUrl || "/",
    logo: siteUrl ? `${siteUrl}/logo.png` : "/logo.png",
    sameAs: [
      "https://www.instagram.com/legrandrestaurant"
    ]
  };

  return (
    <html lang="en" className={`${uiBody.variable} ${uiDisplay.variable} ${uiNumbers.variable} ${menuSans.variable} ${brandSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-ink text-white selection:bg-gold selection:text-ink">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(199,164,76,0.15),transparent)]" />
          <NavBar />
          <main className="container flex-grow py-10">{children}</main>
          <Footer />
        </div>
        <Script id="organization-jsonld" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
