"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/sections/header";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
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
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pt-12 pb-24 md:pb-32 lg:pt-44 lg:pb-56">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
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
                className="-z-10 order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-top-96 lg:-right-20 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                alt="Abstract Object"
                height="4000"
                width="3000"
              />
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end font-cyrillic text-sm text-nowrap">
                  {t("clients")}
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Huawei
                    </span>
                  </div>

                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Tumi Kazakhstan
                    </span>
                  </div>
                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Tary Coffee
                    </span>
                  </div>
                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      MUZ THEATRE
                    </span>
                  </div>
                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Myrza Brand
                    </span>
                  </div>
                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Geely
                    </span>
                  </div>
                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Otau Group
                    </span>
                  </div>

                  <div className="flex">
                    <span className="mx-auto text-lg font-semibold text-muted-foreground">
                      Holiland
                    </span>
                  </div>
                </InfiniteSlider>

                <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 left-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 right-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
