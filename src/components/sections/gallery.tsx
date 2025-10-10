"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { InView } from "@/components/ui/in-view";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";
import Image from "next/image";

const images = [
  {
    src: "/gallery/a-books.webp",
    height: 600,
  },
  {
    src: "/gallery/a-building.webp",
    height: 500,
  },
  {
    src: "/gallery/a-chair-dark.webp",
    height: 700,
  },
  {
    src: "/gallery/a-chair-light.webp",
    height: 550,
  },
  {
    src: "/gallery/a-chair-stand.webp",
    height: 650,
  },
  {
    src: "/gallery/a-famous.webp",
    height: 500,
  },
  {
    src: "/gallery/a-huawei.webp",
    height: 600,
  },
  {
    src: "/gallery/a-light.webp",
    height: 700,
  },
  {
    src: "/gallery/a-look-bottom.webp",
    height: 550,
  },
  {
    src: "/gallery/a-look.webp",
    height: 650,
  },
  {
    src: "/gallery/a-one-hand.webp",
    height: 500,
  },
  {
    src: "/gallery/a-sand.webp",
    height: 600,
  },

  {
    src: "/gallery/a-side-dark.webp",
    height: 700,
  },
  {
    src: "/gallery/a-two-hand.webp",
    height: 550,
  },
  {
    src: "/gallery/a-writing.webp",
    height: 600,
  },
  {
    src: "/gallery/a-city.webp",
    height: 500,
  },
];

function generateGalleryImages(
  size: "desktop" | "mobile" | "tablet",
  images: { src: string; height: number }[]
) {
  const galleryImages = [];
  const columns = size === "mobile" ? 2 : size === "tablet" ? 3 : 4;
  for (let i = 0; i < columns; i++) {
    galleryImages.push(images.filter((_, index) => index % columns === i));
  }
  return galleryImages;
}

export function Gallery() {
  const t = useTranslations("gallery");
  const isMobile = useIsMobile();
  const isTablet =
    typeof window !== "undefined" &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1024;
  const galleryImages = generateGalleryImages(
    isMobile ? "mobile" : isTablet ? "tablet" : "desktop",
    images
  );

  return (
    <section id="gallery" className="my-32 overflow-hidden">
      <div className="mx-auto px-4 md:px-6 lg:px-0">
        <InView
          variants={{
            hidden: { opacity: 0, y: isMobile ? 0 : 40, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{
            margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -150px 0px",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-3xl font-cyrillic text-xl text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
        </InView>

        <div className="relative mx-auto grid h-144 max-w-[100rem] grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:h-[800px] lg:grid-cols-4">
          {galleryImages.map((columnImages, columnIndex) => (
            // <div
            //   key={columnIndex}
            //   className="relative h-max w-max lg:h-[800px]"
            // >
            <InfiniteSlider
              key={columnIndex}
              direction="vertical"
              speed={20 + columnIndex * 3} // Different speeds for each column
              reverse={columnIndex % 2 === 1} // Alternate directions
              className="h-full"
            >
              {columnImages
                .concat(columnImages)
                .map((imageData, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
                    style={{
                      width: isMobile ? 180 : isTablet ? 230 : 385,
                      height: imageData.height,
                      scrollbarGutter: "auto",
                    }}
                  >
                    <Image
                      src={imageData.src}
                      alt={`Gallery image ${imageIndex + 1}`}
                      // width={isMobile ? 180 : 385}
                      // height={imageData.height}
                      fill
                      className="h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ scrollbarGutter: "auto" }}
                      loading="lazy"
                      sizes="(max-width: 768px) 60vw, (max-width: 1024px) 70vw, 80vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                ))}
            </InfiniteSlider>
            // </div>
          ))}
          <div className="pointer-events-none absolute -inset-x-1 top-0 z-10 h-20 bg-gradient-to-b from-background to-transparent" />
          <div className="pointer-events-none absolute -inset-x-1 bottom-0 z-10 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
