import { AnimatedHero } from "@/components/ui/animated-hero";
import { DeltaEffect } from "@/components/sections/delta-effect";
import { CoverageArea } from "@/components/sections/coverage-area";
import { Manufacturers } from "@/components/sections/manufacturers";

export default function Home() {
  return (
    <>
      <AnimatedHero />
      <DeltaEffect />
      <CoverageArea />
      <Manufacturers />
    </>
  );
}
