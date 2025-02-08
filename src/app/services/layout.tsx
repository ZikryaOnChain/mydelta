import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Delta Home Solutions",
  description: "Professional home maintenance and improvement services",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 