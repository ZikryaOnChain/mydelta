import { Container } from "@/components/ui/container";

export default function ServicesLoading() {
  return (
    <>
      {/* Hero Section Loading State */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-3/4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-40 mt-8" />
          </div>
        </Container>
      </section>

      {/* Services List Loading State */}
      <section className="py-16">
        <Container>
          <div className="space-y-20">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] rounded-lg bg-gray-200 animate-pulse" />

                {/* Content Placeholder */}
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded animate-pulse w-2/3" />
                  <div className="h-20 bg-gray-200 rounded animate-pulse" />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 bg-gray-200 rounded animate-pulse"
                      />
                    ))}
                  </div>
                  <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3" />
                  <div className="flex space-x-4">
                    <div className="h-10 bg-gray-200 rounded animate-pulse w-32" />
                    <div className="h-10 bg-gray-200 rounded animate-pulse w-32" />
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
