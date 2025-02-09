"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";

const cities = {
  vancouver: [
    "West Vancouver",
    "North Vancouver",
    "Vancouver",
    "Burnaby",
    "Richmond",
  ],
  surrey: [
    "New Westminster",
    "North Delta",
    "Surrey",
    "White Rock",
    "Langley",
  ],
  tricities: [
    "Coquitlam",
    "Port Coquitlam",
    "Port Moody",
    "Pitt Meadows",
    "Maple Ridge",
  ],
  fraser: [
    "Twassen",
    "Ladner",
    "Langley Twp",
    "Abbotsford",
    "Mission",
    "Chilliwack",
  ],
};

export function CoverageArea() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Area Coverage</h2>
          <p className="text-xl text-gray-300">
            Serving the entire Lower Mainland with professional home maintenance services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(cities).map(([region, cityList]) => (
            <div key={region} className="space-y-2">
              <ul className="space-y-2">
                {cityList.map((city) => (
                  <li key={city} className="text-gray-300 flex items-center">
                    <svg
                      className="w-5 h-5 text-[#1FB8BF] mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
          <Image
            src="/images/coverage/map.jpg"
            alt="Service Area Map"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
} 