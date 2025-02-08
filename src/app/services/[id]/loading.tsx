import { Container } from "@/components/ui/container";

export default function ServiceLoading() {
  return (
    <>
      {/* Hero Section Loading State */}
      <section className="relative bg-gray-900 overflow-hidden">
        <Container className="py-20 md:py-32">
          <div className="max-w-3xl space-y-4">
            <div className="h-12 bg-gray-700 rounded-lg animate-pulse w-3/4" />
            <div className="h-6 bg-gray-700 rounded animate-pulse w-full" />
            <div className="h-12 bg-gray-700 rounded-lg animate-pulse w-40 mt-8" />
          </div>
        </Container>
      </section>

      {/* Benefits Section Loading State */}
      <section className="py-16">
        <Container>
          <div className="h-10 bg-gray-200 rounded animate-pulse w-1/2 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse w-2/3 mx-auto" />
                <div className="h-20 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
} 