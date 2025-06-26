"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-6 inset-x-0 z-[5000] mx-auto max-w-fit px-6 py-3 rounded-full border backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-xl flex items-center space-x-4",
          "border-neutral-200 dark:border-white/20",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => {
              if (navItem.link.startsWith("#")) {
                e.preventDefault();
                const targetId = navItem.link.slice(1);
                const target = document.getElementById(targetId);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className={cn(
              "relative flex items-center space-x-1 text-sm font-medium text-neutral-600 dark:text-neutral-200",
              "transition-all hover:text-blue-600 dark:hover:text-blue-400"
            )}
          >
            <motion.span
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="block sm:hidden"
            >
              {navItem.icon}
            </motion.span>
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative text-sm font-semibold px-5 py-2 rounded-full border border-neutral-300 dark:border-white/30 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-blue-500/40 transition"
        >
          <span>Login</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-0.5 inset-x-1/4 h-px bg-white/70"
          />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};
