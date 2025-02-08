"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  showHandlebar?: boolean;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  showHandlebar = true,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging && e.buttons !== 1) return;
      
      const rect = sliderRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderXPercent(Math.max(0, Math.min(100, percent)));
    },
    [isDragging]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderXPercent(Math.max(0, Math.min(100, percent)));
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={sliderRef}
      className={cn(
        "relative w-full h-full select-none rounded-2xl",
        className
      )}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-white z-30"
          style={{ left: `${sliderXPercent}%` }}
          transition={{ duration: 0 }}
        >
          {showHandlebar && (
            <div 
              className="h-8 w-8 rounded-full top-1/2 -translate-y-1/2 bg-white z-30 -translate-x-1/2 absolute flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <IconDotsVertical className="h-5 w-5 text-gray-600" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <Image
                src={firstImage}
                alt="first image"
                width={800}
                height={600}
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none",
                  firstImageClassName
                )}
                draggable={false}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none",
              secondImageClassname
            )}
            alt="second image"
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}; 