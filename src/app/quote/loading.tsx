import { Container } from "@/components/ui/container";

export default function QuoteLoading() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Title and Description Loading State */}
          <div className="space-y-4 mb-8">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-2/3" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
          </div>

          {/* Form Loading State */}
          <div className="space-y-6">
            {/* Service Selection */}
            <div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-32 mb-2" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-24 mb-2" />
                <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
              </div>
              <div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-24 mb-2" />
                <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-32 mb-2" />
                <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
              </div>
              <div>
                <div className="h-5 bg-gray-200 rounded animate-pulse w-32 mb-2" />
                <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-36 mb-2" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
            </div>

            {/* Message */}
            <div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-36 mb-2" />
              <div className="h-32 bg-gray-200 rounded animate-pulse w-full" />
            </div>

            {/* Submit Button */}
            <div className="h-12 bg-gray-200 rounded animate-pulse w-40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
