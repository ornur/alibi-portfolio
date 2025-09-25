"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    const headerOffset = 80; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <main className="py-30 md:py-40 lg:py-56">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block lg:h-full">
        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left lg:h-full">
          <h1 className="mt-8 max-w-2xl font-latin text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-8 max-w-2xl font-cyrillic text-lg text-pretty">
            {t("subtitle")}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="px-5 text-base">
              <Link
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
              >
                <span className="font-cyrillic text-nowrap">
                  {t("myProjects")}
                </span>
              </Link>
            </Button>
            <Button
              key={2}
              asChild
              size="lg"
              variant="ghost"
              className="px-5 text-base"
            >
              <Link
                href="#contacts"
                onClick={(e) => handleSmoothScroll(e, "#contacts")}
              >
                <span className="font-cyrillic text-nowrap">
                  {t("contact")}
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <Image
          className="-z-10 order-first ml-auto h-66 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-top-96 lg:-right-20 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
          src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
          alt="Abstract Object"
          height="4000"
          width="3000"
        />
      </div>
    </main>
  );
}
