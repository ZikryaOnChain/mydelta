"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Roof Soft Wash", id: "roof-maintenance" },
  { name: "Gutter Cleaning", id: "gutter-cleaning" },
  { name: "House Washing", id: "house-washing" },
  { name: "Pressure Washing", id: "pressure-washing" },
  { name: "Window Cleaning", id: "window-cleaning" },
  { name: "Solar Panel Cleaning", id: "solar-panel-cleaning" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/images/brand/logo.png"
                  alt="Delta Logo"
                  fill
                  className="object-cover p-1"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white">
                Delta Exterior Cleaning and Pest Control
              </span>
            </Link>
            <p className="text-gray-400">
              Professional home maintenance services in Lower Mainland. Making your home a better place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+16043577171" 
                  className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline"
                >
                  (604) 357-7171
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@mydelta.ca?subject=Inquiry from Website"
                  className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline"
                >
                  info@mydelta.ca
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=12414+82+Ave+Unit+110,+Surrey,+BC+V3W+3E9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline"
                >
                  12414 82 Ave Unit 110, Surrey, BC V3W 3E9
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Delta Exterior Cleaning and Pest Control. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 