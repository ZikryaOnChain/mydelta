import Image from "next/image";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Clean home exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>

      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Home is everything
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Let's maintain your safe heaven. Professional home maintenance services in Vancouver.
          </p>
          <div className="space-x-4">
            <Button as="a" href="/quote" size="lg">
              Get a Free Quote
            </Button>
            <Button as="a" href="/services" variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
              Our Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
} 