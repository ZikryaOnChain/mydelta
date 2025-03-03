import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";
import { services } from "@/data/services";
import Image from "next/image";

export const metadata = {
  title: "Our Services - Delta Exterior Cleaning and Pest Control",
  description: "Professional home maintenance services in Vancouver",
};

export default function ServicesPage() {
  return (
    <>
      <BackButton />
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Professional Home Maintenance Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Keep your home in perfect condition with our comprehensive range of professional services.
            </p>
            <Button as="a" href="/quote" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-3"
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
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="mb-8">
                    <p className="text-2xl font-bold text-primary-600">
                      From ${service.pricing.from}
                      <span className="text-base font-normal text-gray-600">
                        {" "}
                        {service.pricing.unit}
                      </span>
                    </p>
                  </div>

                  <div className="space-x-4">
                    <Button as="a" href={`/quote?service=${service.id}`}>
                      Get a Quote
                    </Button>
                    <Button
                      as="a"
                      href={`/services/${service.id}`}
                      variant="outline"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
