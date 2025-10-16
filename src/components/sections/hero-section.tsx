"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "../shadcn-io/background-beams";
import { TypewriterEffectSmooth } from "../shadcn-io/typewriter-effect";
import { useIsMobile } from "@/hooks/use-mobile";

const words = [
  {
    text: "alibi",
    className: `text-new-orange font-semibold uppercase xs:text-xl sm:text-2xl text-4xl md:text-5xl lg:text-[4rem] font-latin`,
  },
  {
    text: "alisher",
    className: `font-semibold uppercase xs:text-xl sm:text-2xl text-4xl md:text-5xl lg:text-[4rem] font-latin`,
  },
];
export default function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <main className="relative min-h-[80vh]">
      <BackgroundBeams className="-z-20" />
      <div className="relative mx-auto flex h-[70vh] max-w-6xl flex-col px-6 lg:h-screen lg:items-center lg:justify-center lg:pt-16">
        <TypewriterEffectSmooth
          className="absolute bottom-0 left-6 z-20 m-0 h-80 min-w-fit justify-center rounded-xl lg:top-66 lg:left-3 lg:h-[65vh]"
          word={words[0]}
          gap={isMobile ? 8 : 12}
        />
        <TypewriterEffectSmooth
          className="absolute right-6 bottom-0 z-20 h-116 justify-center rounded-xl text-white lg:top-34 lg:right-3 lg:h-[85vh] lg:min-w-fit lg:text-xl"
          word={words[1]}
          gap={isMobile ? 8 : 12}
          transparentInside
        />
        <Image
          className={cn(
            "-pt-40 -z-10 object-cover",
            "lg:absolute lg:inset-0 lg:order-last lg:mt-0 lg:object-contain"
          )}
          fill
          src="/hero.webp"
          alt="Abstract Object"
        />
        <div className="pointer-events-none absolute bottom-0 z-10 h-20 w-[90%] bg-gradient-to-t from-black to-transparent lg:right-1/3 lg:h-40 lg:w-90" />
      </div>
    </main>
  );
}
