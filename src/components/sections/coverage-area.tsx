import { Container } from "../ui/container";
import Image from "next/image";

export function CoverageArea() {
  return (
    <section className="py-20" id="coverage">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Service Coverage Area</h2>
            <p className="text-gray-600 text-lg mb-6">
              We proudly serve the Greater Vancouver area, including:
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Vancouver</li>
              <li>• North Vancouver</li>
              <li>• West Vancouver</li>
              <li>• Burnaby</li>
              <li>• Richmond</li>
              <li>• New Westminster</li>
            </ul>
          </div>
          
          <div className="relative rounded-lg overflow-hidden aspect-[16/9] w-full max-w-2xl">
            <Image
              src="/images/coverage/map.jpg"
              alt="Delta Home Solutions Service Area Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
} 