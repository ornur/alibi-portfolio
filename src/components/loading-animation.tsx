"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { TextShimmer } from "./motion-primitives/text-shimmer";

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex max-h-full max-w-full items-center justify-center">
            <motion.p
              className="absolute h-164 font-latin text-[400px] text-transparent"
              style={{
                WebkitTextStroke: "2px gray",
              }}
              animate={{ opacity: [0.1, 0.6, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              a
            </motion.p>

            <TextShimmer
              className="-ml-4 font-latin text-5xl font-medium tracking-wider [--base-color:var(--color-white)]"
              duration={2}
            >
              alibi
            </TextShimmer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
