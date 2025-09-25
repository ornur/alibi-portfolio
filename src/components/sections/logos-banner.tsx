import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { useTranslations } from "next-intl";
import Image from "next/image";

const logos = [
  {
    src: "/logos/125_high_school.png",
    alt: "125 High School Logo",
  },
  {
    src: "/logos/alash_pride.webp",
    alt: "Alash Pride Logo",
  },
  {
    src: "/logos/capable_group.webp",
    alt: "Capable Group Logo",
  },
  {
    src: "/logos/fun_sun.png",
    alt: "Fun Sun Logo",
  },
  {
    src: "/logos/geely.webp",
    alt: "Geely Logo",
  },
  {
    src: "/logos/hikmet.webp",
    alt: "Hikmet Logo",
  },
  {
    src: "/logos/holyland.webp",
    alt: "Holyland Logo",
  },
  {
    src: "/logos/huawei.webp",
    alt: "Huawei Logo",
  },
  {
    src: "/logos/jas_korermen.webp",
    alt: "Jas Korermen Logo",
  },
  {
    src: "/logos/myrza.png",
    alt: "Myrza Logo",
  },
  {
    src: "/logos/naiza.webp",
    alt: "Naiza Logo",
  },
  {
    src: "/logos/otau.webp",
    alt: "Otau Logo",
  },
  {
    src: "/logos/tari_new.webp",
    alt: "Tari Logo",
  },
  {
    src: "/logos/tumi.webp",
    alt: "Tumi Logo",
  },
  {
    src: "/logos/visit_astana.webp",
    alt: "Visit Astana Logo",
  },
  {
    src: "/logos/volt.png",
    alt: "Volt Logo",
  },
];

export function LogosBanner() {
  const t = useTranslations("hero");
  return (
    <section className="mx-auto max-w-6xl overflow-x-hidden bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:border-r md:pr-6">
            <p className="w-full text-end font-cyrillic text-sm text-nowrap">
              {t("clients")}
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={100}>
              {logos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="mx-auto flex h-12 w-26 object-contain"
                  width={100}
                  height={48}
                />
              ))}
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
  );
}
