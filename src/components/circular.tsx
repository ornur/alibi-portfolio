"use client";

import CircularText from "@/components/shadcn-io/circular-effect";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Circular() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is near the bottom (within 100px of bottom)
      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setIsAtBottom(nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="group right-10 z-30 bottom-10 hidden md:fixed md:inline-block"
      onClick={handleClick}
    >
      <CircularText
        text="ALIBI • ALISHER • ALIBI • ALISHER • "
        onHover={"goBonkers"} // Disable hover animations
        spinDuration={20} // Disable spinning
        className="z-10 text-white"
      />
      <Button className="absolute right-6.5 bottom-6.5 size-12 rounded-full bg-new-orange">
        {isAtBottom ? <ChevronUp /> : <ChevronDown />}
      </Button>
    </div>
  );
}
