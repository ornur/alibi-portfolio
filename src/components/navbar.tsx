"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";

const navs = [
  {
    title: "alibi",
    link: "/",
  },
  {
    title: "Обо мне",
    link: "/#about",
  },
  {
    title: "Проекты",
    link: "/#projects",
  },
  {
    title: "Результаты",
    link: "/#results",
  },
  {
    title: "Обучение",
    link: "/#education",
  },
  {
    title: "Контакты",
    link: "/#contacts",
  },
];

export function NavBar() {
  const [active, setActive] = useState<string | null>("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.nav
      className="mt-4 rounded-4xl p-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul className="relative flex justify-between font-cyrillic">
        {navs.map((nav, index) => (
          <motion.li
            key={nav.title}
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            onHoverStart={() => setHoveredItem(nav.title)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            {/* Active background indicator */}
            <AnimatePresence>
              {active === nav.title && (
                <motion.div
                  className="absolute inset-0 rounded-4xl bg-white/95"
                  layoutId="activeBackground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Hover background indicator */}
            <AnimatePresence>
              {hoveredItem === nav.title && active !== nav.title && (
                <motion.div
                  className="absolute inset-0 rounded-4xl bg-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            <motion.div
              className={cn(
                "relative z-10 cursor-pointer rounded-4xl px-2 py-1",
                active === nav.title ? "text-black" : "text-white"
              )}
              onClick={() => setActive(nav.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link href={nav.link}>
                <motion.span
                  className="block"
                  animate={{
                    color: active === nav.title ? "#000000" : "#ffffff",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {nav.title}
                </motion.span>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
