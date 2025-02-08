"use client";

import { Container } from "../ui/container";
import { Card, CardContent } from "../ui/card";
import { Compare } from "@/components/ui/compare";

const features = [
  {
    title: "Professional Excellence",
    description: "Trained experts using industry-leading equipment and techniques",
    icon: "🏆",
  },
  {
    title: "Reliable Service",
    description: "On-time arrival and thorough completion of every project",
    icon: "⏰",
  },
  {
    title: "Eco-Friendly",
    description: "Environmentally conscious cleaning solutions and practices",
    icon: "🌱",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Your complete satisfaction is our top priority",
    icon: "✨",
  },
];

export function DeltaEffect() {
  return (
    <section className="py-20 bg-gray-50" id="coverage">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Delta Effect
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference of professional home maintenance services that go above and beyond.
          </p>
        </div>

        {/* Comparison Slider */}
        <div className="flex justify-center mb-16">
          <Compare
            firstImage="/images/deltaeffect/delta-effect-before.jpg"
            secondImage="/images/deltaeffect/delta-effect-after.jpg"
            className="h-[300px] w-[500px] md:h-[400px] md:w-[700px]"
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            slideMode="hover"
            showHandlebar={true}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="text-center p-6">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 