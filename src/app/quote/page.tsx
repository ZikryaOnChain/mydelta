import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata = {
  title: "Get a Quote - Delta Home Solutions",
  description: "Request a free quote for our professional home maintenance services",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Get a Free Quote
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get back to you with a custom quote for your needs.
            </p>
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
