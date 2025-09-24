import { InView } from "@/components/ui/in-view";
import { achievements } from "@/constants";

export function Achievements() {
  return (
    <div id="results" className="mx-auto max-w-6xl py-32">
      <InView
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -150px 0px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="mt-24">
          <h3 className="mb-12 text-center font-cyrillic text-3xl font-bold">
            Результаты и достижения
          </h3>
          <div className="mx-auto max-w-4xl space-y-4">
            {achievements.map((achievement, index) => (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.1 * index,
                }}
              >
                <div className="flex items-center gap-4 rounded-xl border bg-card p-4">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                  <p className="font-cyrillic text-sm font-medium">
                    {achievement}
                  </p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </InView>
    </div>
  );
}
