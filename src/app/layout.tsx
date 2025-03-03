import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mydelta.vercel.app"),
  title: {
    default: "Delta Exterior Cleaning and Pest Control - Professional Home Maintenance Services",
    template: "%s | Delta Exterior Cleaning and Pest Control",
  },
  description: "Professional exterior cleaning services in Lower Mainland. Specializing in house washing, roof soft wash, gutter cleaning, pressure washing, and window cleaning.",
  keywords: [
    "House cleaning",
    "Exterior Cleaning",
    "Roof wash",
    "Gutter cleaning",
    "Pressure Washing",
    "Window Cleaning",
    "Home Maintenance",
    "Lower Mainland",
    "Vancouver",
    "Surrey",
    "Professional Cleaning",
  ],
  authors: [{ name: "Delta Exterior Cleaning and Pest Control" }],
  creator: "Delta Exterior Cleaning and Pest Control",
  publisher: "Delta Exterior Cleaning and Pest Control",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Delta Exterior Cleaning and Pest Control - Professional Home Maintenance Services",
    description: "Professional exterior cleaning services in Lower Mainland. Specializing in house washing, roof soft wash, gutter cleaning, pressure washing, and window cleaning.",
    url: "https://mydelta.vercel.app",
    siteName: "Delta Exterior Cleaning and Pest Control",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // You'll need to replace this with your actual verification code
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
