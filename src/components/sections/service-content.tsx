"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ServiceContentProps {
  id: string;
}

export function ServiceContent({ id }: ServiceContentProps) {
  const service = services.find((s) => s.id === id);
  if (!service) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>

        <Container className="relative z-10 py-20 md:py-32">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">{service.description}</p>
            <Button as="a" href={`/quote?service=${service.id}`} size="lg">
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center text-black">
            Why Choose Our {service.title} Service
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-black">{benefit.title}</h3>
                <p className="text-gray-800">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
} 