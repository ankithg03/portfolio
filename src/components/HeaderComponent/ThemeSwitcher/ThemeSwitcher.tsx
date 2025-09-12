"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load saved theme or fallback
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.body.dataset.theme = saved;
    } else {
      document.body.dataset.theme = "dark";
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center"
    >
      {/* Sun (left) */}
      <SunIcon className="absolute left-2 w-4 h-4 text-yellow-500 pointer-events-none" />

      {/* Moon (right) */}
      <MoonIcon className="absolute right-2 w-4 h-4 text-indigo-400 pointer-events-none" />

      {/* Sliding knob */}
      <motion.div
        initial={false}
        animate={{ x: isDark ? 32 : 0 }} // knob moves between left & right
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-black shadow-md"
      />
    </button>
  );
}
