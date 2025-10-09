"use client";
import Image from "next/image";
import { InView } from "../ui/in-view";
import { AnimatedStats } from "../animated-stats";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";

export function AboutMe() {
  const isMobile = useIsMobile();
  const t = useTranslations("about");

  return (
    <section id="about" className="py-32">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <InView
          variants={{
            hidden: { opacity: 0, y: isMobile ? 0 : 30, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{
            margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </InView>

        {/* Main Content Grid */}
        <div className="grid w-full grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Image */}
          <InView
            variants={{
              hidden: {
                opacity: 0,
                x: isMobile ? 0 : -50,
                filter: "blur(4px)",
              },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{
              margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
              <Image
                className="mx-auto h-full rounded-3xl aspect-[3/3.25] saturate-120 object-cover shadow-2xl lg:mx-0"
                src="/a-halo.webp"
                alt="Alibi Alisher - Режиссёр и продюсер"
                width={600}
                height={600}
                priority
              />
            </div>
          </InView>

          {/* Content */}
          <div className="-mt-3 space-y-6">
            {/* Introduction */}
            <InView
              variants={{
                hidden: {
                  opacity: 0,
                  x: isMobile ? 0 : 50,
                  filter: "blur(4px)",
                },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              }}
              viewOptions={{
                margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
              }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="space-y-3">
                <h3 className="font-cyrillic text-3xl font-bold">
                  {t("name")}
                </h3>
                <p className="font-cyrillic text-base leading-relaxed text-muted-foreground">
                  {t("intro1")}
                </p>
                <p className="font-cyrillic text-base leading-relaxed text-muted-foreground">
                  {t("intro2")}
                </p>
              </div>
            </InView>

            {/* Stats */}
            <AnimatedStats />
          </div>
        </div>
      </div>
    </section>
  );
}
