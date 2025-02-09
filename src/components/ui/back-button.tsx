"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => router.back()}
      className={`${className} md:h-12 md:px-5 md:py-3 md:rounded-full md:border-2 md:border-[#1FB8BF] md:bg-black md:text-white md:hover:bg-[#1FB8BF] md:transition-colors flex items-center justify-center gap-2 ${
        className ? "" : "md:hidden fixed right-4 z-50 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      } ${
        isScrolled && !className ? "top-36" : "top-20"
      }`}
      aria-label="Go back"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="hidden md:inline">Back</span>
    </button>
  );
} 