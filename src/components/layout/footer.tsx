"use client";

import Link from "next/link";
import Image from "next/image";

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
                Delta Home Solutions
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
              <li className="text-gray-400">Roof Maintenance</li>
              <li className="text-gray-400">Gutter Cleaning</li>
              <li className="text-gray-400">Window Cleaning</li>
              <li className="text-gray-400">Pressure Washing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="tel:416-931-3314" 
                  className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline"
                >
                  416-931-3314
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:info@mydelta.ca"
                  className="text-gray-400 hover:text-[#1FB8BF] transition-colors no-underline"
                >
                  info@mydelta.ca
                </Link>
              </li>
              <li className="text-gray-400">
                12414 82 Ave Unit 110, Surrey, BC V3W 3E9
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Delta Home Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 