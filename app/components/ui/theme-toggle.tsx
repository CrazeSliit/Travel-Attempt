"use client";

import { useTheme } from "@/app/contexts/theme-context";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-md"
      aria-label="Toggle theme"
    >
      {theme === "light" && <Sun className="h-4 w-4 text-gray-900 dark:text-gray-100" />}
      {theme === "dark" && <Moon className="h-4 w-4 text-gray-900 dark:text-gray-100" />}
      {theme === "system" && <Monitor className="h-4 w-4 text-gray-900 dark:text-gray-100" />}
    </button>
  );
}

export function ThemeToggleDropdown() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative inline-block text-left">
      <div className="flex space-x-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-1 shadow-md">
        <button
          onClick={() => setTheme("light")}
          className={`flex items-center justify-center rounded-full px-2 py-1.5 text-sm transition-colors ${
            theme === "light"
              ? "bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300"
              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          }`}
          aria-label="Light theme"
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`flex items-center justify-center rounded-full px-2 py-1.5 text-sm transition-colors ${
            theme === "dark"
              ? "bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300"
              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          }`}
          aria-label="Dark theme"
        >
          <Moon className="h-4 w-4" />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`flex items-center justify-center rounded-full px-2 py-1.5 text-sm transition-colors ${
            theme === "system"
              ? "bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300"
              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          }`}
          aria-label="System theme"
        >
          <Monitor className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
