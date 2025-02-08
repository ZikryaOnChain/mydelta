"use client";

import Link from "next/link";
import Image from "next/image";
import NavHeader from "@/components/blocks/nav-header";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4 md:py-6">
          {/* Logo and Navigation Group */}
          <div className="flex items-center flex-1">
            {/* Logo */}
            <Link href="/" className="flex items-center no-underline">
              <div className="relative w-[40px] h-[40px] md:w-[52px] md:h-[52px] rounded-full overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/images/brand/logo.png"
                  alt="Delta Logo"
                  fill
                  className="object-cover p-1"
                  priority
                />
              </div>
            </Link>

            {/* Navigation */}
            <NavHeader />
          </div>

          {/* Phone - Hidden on mobile, shown in mobile menu */}
          <Link
            href="tel:(123) 456-7890"
            className="hidden md:block px-5 py-3 rounded-full border-2 border-[#1FB8BF] bg-black text-white hover:bg-[#1FB8BF] transition-colors no-underline whitespace-nowrap text-base uppercase"
          >
            (123) 456-7890
          </Link>
        </div>
      </div>
    </header>
  );
} 