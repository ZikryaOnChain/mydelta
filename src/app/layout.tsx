import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mydelta.vercel.app"),
  title: {
    default: "Delta Home Solutions - Professional Home Maintenance Services",
    template: "%s | Delta Home Solutions",
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
  authors: [{ name: "Delta Home Solutions" }],
  creator: "Delta Home Solutions",
  publisher: "Delta Home Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Delta Home Solutions - Professional Home Maintenance Services",
    description: "Professional exterior cleaning services in Lower Mainland. Specializing in house washing, roof soft wash, gutter cleaning, pressure washing, and window cleaning.",
    url: "https://mydelta.vercel.app",
    siteName: "Delta Home Solutions",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
