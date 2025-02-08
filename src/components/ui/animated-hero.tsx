"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "peaceful", "fancy", "everything"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        return; // Stop at "everything"
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white flex flex-col gap-4">
            <div className="-ml-15 self-start">Home is</div>
            <div className="relative h-[1.2em] ml-20">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 right-0 text-[#1FB8BF]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: titleNumber === index ? 1 : 0,
                    y: titleNumber === index ? 0 : -40,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.span>
              ))}
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Delta Home Solutions. Professional home maintenance services in Lower Mainland.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/quote"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "px-8 py-6 text-lg min-w-[200px]"
              )}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "px-8 py-6 text-lg min-w-[200px] bg-black hover:bg-[#1FB8BF]"
              )}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 