"use client";
import { type ComponentProps } from "react";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({ className, background, particleColor }: ParticlesProps) => {
  return (
    <div 
      className={className}
      style={{ 
        background: background || 'transparent',
        color: particleColor || '#ffffff' 
      }}
    />
  );
};

export function Sparkles({ className, ...props }: ComponentProps<"div">) {
  return <div className={className} {...props} />;
} 