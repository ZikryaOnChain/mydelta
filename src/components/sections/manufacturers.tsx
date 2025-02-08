import Image from "next/image";
import { Container } from "../ui/container";

const manufacturers = [
  { name: "Manufacturer 1", logo: "/images/manufacturers/logo1.png" },
  { name: "Manufacturer 2", logo: "/images/manufacturers/logo2.png" },
  { name: "Manufacturer 3", logo: "/images/manufacturers/logo3.png" },
  { name: "Manufacturer 4", logo: "/images/manufacturers/logo4.png" },
  { name: "Manufacturer 5", logo: "/images/manufacturers/logo5.png" },
];

export function Manufacturers() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 px-4">
            Our methods are approved by all manufacturing associations
          </h2>
        </div>
        
        <div className="flex justify-center items-center space-x-4 md:space-x-6 overflow-x-auto no-scrollbar px-4">
          {manufacturers.map((manufacturer) => (
            <div 
              key={manufacturer.name}
              className="flex-shrink-0 w-[80px] md:w-[100px] h-[40px] md:h-[50px] relative"
            >
              <Image
                src={manufacturer.logo}
                alt={manufacturer.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 