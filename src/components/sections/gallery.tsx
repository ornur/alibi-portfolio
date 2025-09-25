"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { InView } from "@/components/ui/in-view";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";
import Image from "next/image";

const galleryImages = [
  // Column 1 - Portrait images
  [
    {
      src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=300&h=600&fit=crop&crop=faces",
      width: 300,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=500&fit=crop&crop=faces",
      width: 300,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=700&fit=crop&crop=faces",
      width: 300,
      height: 700,
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=550&fit=crop&crop=faces",
      width: 300,
      height: 550,
    },
  ],
  // Column 2 - Portrait images
  [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=650&fit=crop&crop=faces",
      width: 300,
      height: 650,
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=500&fit=crop&crop=faces",
      width: 300,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=600&fit=crop&crop=faces",
      width: 300,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=700&fit=crop&crop=faces",
      width: 300,
      height: 700,
    },
  ],
  // Column 3 - Portrait images
  [
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=550&fit=crop&crop=faces",
      width: 300,
      height: 550,
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=650&fit=crop&crop=faces",
      width: 300,
      height: 650,
    },
    {
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&h=500&fit=crop&crop=faces",
      width: 300,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=600&fit=crop&crop=faces",
      width: 300,
      height: 600,
    },
  ],
  // Column 4 - Portrait images
  [
    {
      src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=700&fit=crop&crop=faces",
      width: 300,
      height: 700,
    },
    {
      src: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=550&fit=crop&crop=faces",
      width: 300,
      height: 550,
    },
    {
      src: "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=300&h=600&fit=crop&crop=faces",
      width: 300,
      height: 600,
    },
    {
      src: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=500&fit=crop&crop=faces",
      width: 300,
      height: 500,
    },
  ],
  // Column 5 - Portrait images
  [
    {
      src: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=620&fit=crop&crop=faces",
      width: 300,
      height: 620,
    },
    {
      src: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=480&fit=crop&crop=faces",
      width: 300,
      height: 480,
    },
    {
      src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=580&fit=crop&crop=faces",
      width: 300,
      height: 580,
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=650&fit=crop&crop=faces",
      width: 300,
      height: 650,
    },
  ],
  // Column 6 - Portrait images
  [
    {
      src: "https://images.unsplash.com/photo-1705297603891-7d2ecaf95ce8?w=300&h=550&fit=crop&crop=faces",
      width: 300,
      height: 550,
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=700&fit=crop&crop=faces",
      width: 300,
      height: 700,
    },
    {
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=500&fit=crop&crop=faces",
      width: 300,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&h=600&fit=crop&crop=faces",
      width: 300,
      height: 600,
    },
  ],
];

export function Gallery() {
  const t = useTranslations("gallery");
  const isMobile = useIsMobile();

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

        <div className="relative grid h-144 max-w-[100rem] mx-auto grid-cols-2 justify-items-center md:grid-cols-4 lg:h-[800px] lg:grid-cols-6">
          {galleryImages.map((columnImages, columnIndex) => (
            <div
              key={columnIndex}
              className="relative h-max w-max lg:h-[800px]"
            >
              <InfiniteSlider
                direction="vertical"
                speed={20 + columnIndex * 5} // Different speeds for each column
                reverse={columnIndex % 2 === 1} // Alternate directions
                className="h-full"
              >
                {columnImages
                  .concat(columnImages)
                  .map((imageData, imageIndex) => (
                    <div key={imageIndex} className="flex-shrink-0">
                      <div
                        className="group relative cursor-pointer overflow-hidden rounded-lg"
                        style={{ scrollbarGutter: "auto" }}
                      >
                        <Image
                          src={imageData.src}
                          alt={`Gallery image ${imageIndex + 1}`}
                          width={imageData.width}
                          height={imageData.height}
                          className="h-auto w-44 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 lg:w-full"
                          style={{ scrollbarGutter: "auto" }}
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.66vw"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    </div>
                  ))}
              </InfiniteSlider>
            </div>
          ))}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-background to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
