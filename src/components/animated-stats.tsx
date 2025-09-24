"use client";
import { InView } from "@/components/ui/in-view";
import { Tilt } from "@/components/ui/tilt";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { stats } from "@/constants";

// Individual animated stat components
function AnimatedStat({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  if (isInView && animatedValue === 0) {
    setTimeout(() => {
      setAnimatedValue(value);
    }, delay);
  }

  return (
    <div ref={ref}>
      <Tilt
        rotationFactor={16}
        isRevese
        className="rounded-2xl border bg-card p-4 text-center shadow-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black"
      >
        <div className="flex items-center justify-center font-cyrillic text-3xl font-bold">
          <AnimatedNumber
            className="inline-flex items-center"
            springOptions={{
              bounce: 0,
              duration: 2000,
            }}
            value={animatedValue}
          />
          <span>{suffix}</span>
        </div>
        <p className="font-cyrillic text-sm text-muted-foreground">{label}</p>
      </Tilt>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <AnimatedStat
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={index * 200}
          />
        ))}
      </div>
    </InView>
  );
}
