"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "../shadcn-io/background-beams";
import { TypewriterEffectSmooth } from "../shadcn-io/typewriter-effect";

const words = [
  {
    text: "alibi",
    className: `text-white text-5xl lg:text-[9rem] font-latin`,
  },
  {
    text: "alisher",
    className: `text-white text-5xl lg:text-[9rem] font-latin`,
  },
];
export default function HeroSection() {
  return (
    <main className="relative">
      <BackgroundBeams className="-z-20" />
      <div className="relative mx-auto flex h-[70vh] max-w-6xl flex-col px-6 lg:h-screen lg:items-center lg:justify-center lg:pt-16">
        <div className="mt-90 flex w-full justify-center lg:mt-60 lg:w-240 lg:justify-start">
          <TypewriterEffectSmooth
            className="flex h-20 justify-center rounded-xl px-4 py-3 text-white lg:h-40"
            words={words}
          />
        </div>
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
