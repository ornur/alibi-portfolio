import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    src: "/logos/125_high_school.png",
    alt: "125 High School Logo",
    link: "https://www.instagram.com/125highschool.shymkent/",
  },
  {
    src: "/logos/alash_pride.webp",
    alt: "Alash Pride Logo",
    link: "https://www.instagram.com/alash_pridefc/",
  },
  {
    src: "/logos/capable_group.webp",
    alt: "Capable Group Logo",
    link: "https://www.instagram.com/capable_group/",
  },
  {
    src: "/logos/fun_sun.png",
    alt: "Fun Sun Logo",
    link: "https://www.instagram.com/fstravel_kazakhstan",
  },
  {
    src: "/logos/geely.webp",
    alt: "Geely Logo",
    link: "https://www.instagram.com/geely_astana/",
  },
  {
    src: "/logos/hikmet.webp",
    alt: "Hikmet Logo",
    link: "https://www.instagram.com/hickmet_astana",
  },
  {
    src: "/logos/holyland.webp",
    alt: "Holyland Logo",
    link: "https://www.instagram.com/holyland_kz",
  },
  {
    src: "/logos/huawei.webp",
    alt: "Huawei Logo",
    link: "https://www.instagram.com/huaweikazakhstan/",
  },
  {
    src: "/logos/jas_korermen.webp",
    alt: "Jas Korermen Logo",
    link: "https://www.instagram.com/muztheatre.kz/",
  },
  {
    src: "/logos/myrza.png",
    alt: "Myrza Logo",
    link: "https://www.instagram.com/myrza.brands.astana/",
  },
  {
    src: "/logos/naiza.webp",
    alt: "Naiza Logo",
    link: "https://www.instagram.com/naiza.mma/",
  },
  {
    src: "/logos/otau.webp",
    alt: "Otau Logo",
    link: "https://www.instagram.com/otaugroup/",
  },
  {
    src: "/logos/tari_new.webp",
    alt: "Tari Logo",
    link: "https://www.instagram.com/tary.coffee/",
  },
  {
    src: "/logos/tumi.webp",
    alt: "Tumi Logo",
    link: "https://www.instagram.com/tumi_kazakhstan/",
  },
  {
    src: "/logos/visit_astana.webp",
    alt: "Visit Astana Logo",
    link: "https://www.instagram.com/visitastana.kz/",
  },
  {
    src: "/logos/volt.png",
    alt: "Volt Logo",
    link: "https://www.instagram.com/",
  },
  {
    src: "/logos/yurt.png",
    alt: "Yurt Logo",
    link: "https://www.instagram.com/",
  },
];

const logos1 = logos.slice(0, Math.ceil(logos.length / 3));
const logos2 = logos.slice(Math.ceil(logos.length / 3), Math.ceil(logos.length / 3) * 2);
const logos3 = logos.slice(Math.ceil(logos.length / 3) * 2, logos.length);

export function LogosBanner() {
  const t = useTranslations("hero");
  return (
    <section id="companies" className="mx-auto max-w-6xl overflow-x-hidden bg-background pb-16 md:py-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center">
          <p className="w-full text-center font-cyrillic lg:text-5xl text-sm font-bold text-nowrap">
            {t("clients")}
          </p>
          <div className="relative space-y-38 py-16 md:w-full">
            <InfiniteSlider key={"logos1"} speedOnHover={40} speed={250} gap={200}>
              {logos1.map((logo) => (
                <Link
                  href={logo.link}
                  className="m-0 p-0"
                  target="_blank"
                  key={logo.src}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto flex h-24 w-32 object-contain brightness-200 grayscale"
                    width={100}
                    height={48}
                  />
                </Link>
              ))}
            </InfiniteSlider>
            <InfiniteSlider key={"logos2"} speedOnHover={40} reverse speed={160} gap={200}>
              {logos2.map((logo) => (
                <Link
                  href={logo.link}
                  className="m-0 p-0"
                  target="_blank"
                  key={logo.src}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto flex h-24 w-32 object-contain brightness-200 grayscale"
                    width={100}
                    height={48}
                  />
                </Link>
              ))}
            </InfiniteSlider>
            <InfiniteSlider key={"logos3"} speedOnHover={40} speed={160} gap={200}>
              {logos3.map((logo) => (
                <Link
                  href={logo.link}
                  className="m-0 p-0"
                  target="_blank"
                  key={logo.src}  
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto flex h-24 w-32 object-contain brightness-200 grayscale"
                    width={100}
                    height={48}
                  />
                </Link>
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
