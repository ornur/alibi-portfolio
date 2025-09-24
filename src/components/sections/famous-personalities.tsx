"use client";

import { InView } from "@/components/ui/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { famousPersonalities } from "@/constants";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";

export function FamousPersonalities() {
  const isMobile = useIsMobile();
  const t = useTranslations("famousPersonalities");

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto w-full px-4">
        <InView
          variants={{
            hidden: { opacity: 0, y: isMobile ? 0 : 50 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{
            margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-cyrillic text-3xl font-bold text-foreground md:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-2xl font-cyrillic text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          viewOptions={{
            margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        >
          <div className="relative">
            <InfiniteSlider
              speedOnHover={20}
              gap={32}
              speed={60}
              className="py-8"
            >
              {famousPersonalities.map((personality) => (
                <div
                  key={personality.id}
                  className="group flex w-55 flex-col overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-2xl lg:w-68"
                  style={{
                    scrollbarGutter: "auto",
                  }}
                >
                  <Image
                    src={personality.image}
                    alt={personality.name}
                    className="aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                    width={272}
                    height={272}
                    sizes="100vw"
                  />
                  <div className="p-4 text-center transition-transform duration-300 group-hover:scale-105">
                    <h3 className="font-cyrillic text-lg font-semibold text-foreground">
                      {personality.name}
                    </h3>
                    <p className="font-cyrillic text-sm text-muted-foreground">
                      {personality.profession}
                    </p>
                  </div>
                </div>
              ))}
            </InfiniteSlider>

            {/* Gradient overlays for smooth fade effect */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
          </div>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{
            margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
          }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-3xl font-cyrillic text-base text-muted-foreground">
              {t("description")}
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}
