"use client";

import { Container } from "@/components/ui/container";
import { Compare } from "@/components/ui/compare";
import { useCallback } from "react";

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
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      
      // Get initial touch point
      const touch = e.touches[0];
      const touchStartX = touch.clientX;
      const touchStartY = touch.clientY;
      
      // Calculate movement direction
      const deltaX = Math.abs(touchStartX - touch.clientX);
      const deltaY = Math.abs(touchStartY - touch.clientY);
      
      // Only prevent default and update slider if movement is more horizontal than vertical
      if (deltaX > deltaY) {
        e.preventDefault();
        updateSliderPosition(touch.clientX);
      }
    },
    [isDragging, updateSliderPosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging && e.buttons !== 1) return;
      // Only handle horizontal movement
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition]
  );

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
      </Container>
    </section>
  );
} 