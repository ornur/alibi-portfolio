"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `hidden text-black opacity-0 dark:text-white`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  word,
  className,
  gap,
  transparentInside = false,
}: {
  word: {
    text: string;
    className?: string;
  };
  className?: string;
  gap?: number;
  transparentInside?: boolean;
}) => {
  // split text inside of words into array of characters
  const charArray = word.text.split("").map((char) => {
    return {
      text: char,
      className: word.className,
    };
  });
  const renderWords = () => {
    return charArray.map((char, idx) => (
      <span
        key={`char-${idx}`}
        className={cn(word.className)}
        style={
          transparentInside
            ? {
                WebkitTextStroke: "2px #FF7517",
                color: "transparent",
              }
            : undefined
        }
      >
        {char.text}
      </span>
    ));
  };

  return (
    <div className={cn("flex", className)}>
      <motion.div
        className={cn(
          "flex flex-col items-center overflow-hidden",
          gap && `gap-${gap}`
        )}
        initial={{
          width: "100%",
          height: "0%",
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5,
        }}
        // style={{scrollbarGutter: 'auto'}}
      >
        {renderWords()}
      </motion.div>
      {/* <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block w-[4px] rounded-sm bg-blue-500 h-full",
          cursorClassName
        )}
      ></motion.span> */}
    </div>
  );
};
