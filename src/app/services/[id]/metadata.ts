import { services } from "@/data/services";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const service = services.find((s) => s.id === params.id);
  if (!service) return {};

  return {
    title: `${service.title} - Delta Exterior Cleaning and Pest Control`,
    description: service.description,
  };
} 