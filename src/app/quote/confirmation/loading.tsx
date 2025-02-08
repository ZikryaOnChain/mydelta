import { Container } from "@/components/ui/container";

export default function QuoteConfirmationLoading() {
  return (
    <section className="bg-gray-50 min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4">
            {/* Icon Placeholder */}
            <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full animate-pulse" />
            
            {/* Title and Description Loading State */}
            <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4 mx-auto" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
            
            {/* Content Box Loading State */}
            <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3 mx-auto" />
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-200 rounded animate-pulse w-full"
                  />
                ))}
              </div>
            </div>

            {/* Buttons Loading State */}
            <div className="flex justify-center space-x-4 mt-8">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-24" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-24" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 