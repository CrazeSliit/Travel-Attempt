"use client";

import { useTheme } from "@/app/contexts/theme-context";
import { colorUtils } from "@/app/lib/theme-config";

export function useThemeColors() {
  const { resolvedTheme } = useTheme();

  return {
    theme: resolvedTheme,
    colors: colorUtils,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
  };
}

// Hook for theme-aware class names
export function useThemeClass() {
  const { resolvedTheme } = useTheme();

  const getThemeClass = (lightClass: string, darkClass: string) => {
    return resolvedTheme === "dark" ? darkClass : lightClass;
  };

  const conditionalClass = (condition: boolean, trueClass: string, falseClass: string = "") => {
    return condition ? trueClass : falseClass;
  };

  return {
    theme: resolvedTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    getThemeClass,
    conditionalClass,
  };
}
