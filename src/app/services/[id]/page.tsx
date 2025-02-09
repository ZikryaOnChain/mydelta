"use client";

import { services } from "@/data/services";
import { ServiceContent } from "@/components/sections/service-content";
import { BackButton } from "@/components/ui/back-button";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function ServicePage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const service = services.find((s) => s.id === id);
  if (!service) notFound();

  return (
    <>
      <BackButton />
      <ServiceContent id={id} />
    </>
  );
} 