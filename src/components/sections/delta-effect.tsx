"use client";

import { Container } from "@/components/ui/container";
import { Compare } from "@/components/ui/compare";

const features = [
  {
    icon: "🏠",
    title: "Professional Service",
    description: "Expert technicians delivering quality results",
  },
  {
    icon: "⚡",
    title: "Fast Response",
    description: "Quick turnaround on all service requests",
  },
  {
    icon: "💪",
    title: "Reliable Results",
    description: "Consistent quality you can count on",
  },
  {
    icon: "🌟",
    title: "Customer Satisfaction",
    description: "Your happiness is our top priority",
  },
];

export function DeltaEffect() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Delta Effect
          </h2>
          <p className="text-xl text-gray-600">
            See the remarkable difference our services make. Drag the slider to
            reveal the transformation.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="aspect-[4/3] relative w-[800px] overflow-hidden rounded-xl">
            <Compare
              firstImage="/images/deltaeffect/delta-effect-before.jpg"
              secondImage="/images/deltaeffect/delta-effect-after.jpg"
              className="w-full h-full"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              showHandlebar={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The Delta Exterior Cleaning and Pest Control Effect
          </h2>
          <p className="text-lg text-gray-600">
            At Delta Exterior Cleaning and Pest Control, we take pride in delivering exceptional service that transforms your property.
          </p>
        </div>
      </Container>
    </section>
  );
} 