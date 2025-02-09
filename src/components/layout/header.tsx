"use client";

import Link from "next/link";
import Image from "next/image";
import NavHeader from "@/components/blocks/nav-header";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo and Navigation Group */}
          <div className="flex items-center flex-1">
            {/* Logo */}
            <Link href="/" className="flex items-center no-underline">
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/images/brand/logo.png"
                  alt="Delta Logo"
                  fill
                  className="object-cover p-0.5"
                  priority
                />
              </div>
            </Link>

            {/* Navigation */}
            <NavHeader />
          </div>

          {/* Phone - Always visible */}
          <a
            href="tel:+1-416-931-3314"
            className="flex items-center h-10 md:h-12 px-4 py-2 md:px-5 md:py-3 rounded-full border-2 border-[#1FB8BF] bg-black text-white hover:bg-[#1FB8BF] transition-colors no-underline whitespace-nowrap text-sm md:text-base uppercase"
          >
            <svg
              className="w-4 h-4 mr-2 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden md:inline">416-931-3314</span>
            <span className="md:hidden">CALL</span>
          </a>
        </div>
      </div>
    </header>
  );
} 