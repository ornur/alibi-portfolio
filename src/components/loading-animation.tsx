"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

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
          <div className="relative flex justify-center items-center max-w-full max-h-full">
            <motion.p
              className="text-[400px] h-164 absolute font-latin text-transparent"
              style={{
                WebkitTextStroke: "2px gray",
              }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              a
            </motion.p>

            <p className="text-5xl -ml-4 font-medium font-latin tracking-wider z-10 text-white">
              alibi
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
