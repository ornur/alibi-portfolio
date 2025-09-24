import Image from "next/image";
import { InView } from "../ui/in-view";
import { AnimatedStats } from "../animated-stats";

export function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-background to-muted/20 py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mb-20 text-center">
            <h2 className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Обо мне
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Режиссёр и продюсер с 4-летним опытом создания киношного контента
            </p>
          </div>
        </InView>

        {/* Main Content Grid */}
        <div className="grid w-full grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Image */}
          <InView
            variants={{
              hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
              <Image
                className="mx-auto h-full rounded-3xl object-cover shadow-2xl lg:mx-0"
                src="/about.png"
                alt="Alibi Alisher - Режиссёр и продюсер"
                width={600}
                height={600}
                priority
              />
            </div>
          </InView>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <InView
              variants={{
                hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="space-y-6">
                <h3 className="font-cyrillic text-3xl font-bold">
                  Алиби Алишер
                </h3>
                <p className="font-cyrillic text-lg leading-relaxed text-muted-foreground">
                  Я занимаюсь видеопроизводством более 4 лет, из которых
                  последние 2 года — в роли режиссёра, продюсера и
                  контент-продюсера брендов.
                </p>
                <p className="font-cyrillic text-lg leading-relaxed text-muted-foreground">
                  Моя специализация — создание киношного видеоконтента: от
                  разработки концепции и написания сценариев до организации
                  съёмочного процесса и аналитики готового продукта. Я помогаю
                  брендам и личностям получать не только качественную визуальную
                  упаковку, но и измеримые результаты в виде охватов,
                  подписчиков и роста узнаваемости.
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
