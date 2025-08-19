// Theme configuration and utilities
export const themes = {
  light: {
    background: "#ffffff",
    foreground: "#1a1a1a",
    card: "#fdfdfd",
    cardForeground: "#1a1a1a",
    popover: "#fdfdfd",
    popoverForeground: "#1a1a1a",
    primary: "#2e8b57",
    primaryForeground: "#ffffff",
    secondary: "#f7c948",
    secondaryForeground: "#1a1a1a",
    muted: "#f0f0f0",
    mutedForeground: "#555555",
    accent: "#4a90e2",
    accentForeground: "#ffffff",
    destructive: "#ff6f61",
    destructiveForeground: "#ffffff",
    border: "#dcdcdc",
    input: "#dcdcdc",
    ring: "#4a90e2",
    chart1: "#2e8b57",
    chart2: "#f7c948",
    chart3: "#4a90e2",
    chart4: "#ff6f61",
    chart5: "#e75480",
    sidebar: "#f5f5dc",
    sidebarForeground: "#1a1a1a",
    sidebarPrimary: "#2e8b57",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent: "#f7c948",
    sidebarAccentForeground: "#1a1a1a",
    sidebarBorder: "#dcdcdc",
    sidebarRing: "#4a90e2",
  },
  dark: {
    background: "#1a1a1a",
    foreground: "#fdfdfd",
    card: "#262626",
    cardForeground: "#fdfdfd",
    popover: "#262626",
    popoverForeground: "#fdfdfd",
    primary: "#6ab547",
    primaryForeground: "#ffffff",
    secondary: "#f7c948",
    secondaryForeground: "#1a1a1a",
    muted: "#2a2a2a",
    mutedForeground: "#aaaaaa",
    accent: "#4a90e2",
    accentForeground: "#ffffff",
    destructive: "#ff6f61",
    destructiveForeground: "#ffffff",
    border: "#3a3a3a",
    input: "#3a3a3a",
    ring: "#4a90e2",
    chart1: "#6ab547",
    chart2: "#f7c948",
    chart3: "#4a90e2",
    chart4: "#ff6f61",
    chart5: "#e75480",
    sidebar: "#222222",
    sidebarForeground: "#fdfdfd",
    sidebarPrimary: "#6ab547",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent: "#f7c948",
    sidebarAccentForeground: "#1a1a1a",
    sidebarBorder: "#3a3a3a",
    sidebarRing: "#4a90e2",
  },
} as const;

// CSS variable names mapping
export const cssVariables = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  popover: "--popover",
  popoverForeground: "--popover-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  destructive: "--destructive",
  destructiveForeground: "--destructive-foreground",
  border: "--border",
  input: "--input",
  ring: "--ring",
  chart1: "--chart-1",
  chart2: "--chart-2",
  chart3: "--chart-3",
  chart4: "--chart-4",
  chart5: "--chart-5",
  sidebar: "--sidebar",
  sidebarForeground: "--sidebar-foreground",
  sidebarPrimary: "--sidebar-primary",
  sidebarPrimaryForeground: "--sidebar-primary-foreground",
  sidebarAccent: "--sidebar-accent",
  sidebarAccentForeground: "--sidebar-accent-foreground",
  sidebarBorder: "--sidebar-border",
  sidebarRing: "--sidebar-ring",
} as const;

// Typography variables
export const fontVariables = {
  sans: "--font-sans",
  serif: "--font-serif",
  mono: "--font-mono",
} as const;

// Radius variables
export const radiusVariables = {
  sm: "--radius-sm",
  md: "--radius-md",
  lg: "--radius-lg",
  xl: "--radius-xl",
} as const;

// Shadow variables
export const shadowVariables = {
  "2xs": "--shadow-2xs",
  xs: "--shadow-xs",
  sm: "--shadow-sm",
  md: "--shadow-md",
  lg: "--shadow-lg",
  xl: "--shadow-xl",
  "2xl": "--shadow-2xl",
} as const;

// Utility function to get CSS variable
export function getCSSVariable(name: keyof typeof cssVariables): string {
  return `var(${cssVariables[name]})`;
}

// Color utilities for dynamic styling
export const colorUtils = {
  background: () => getCSSVariable("background"),
  foreground: () => getCSSVariable("foreground"),
  primary: () => getCSSVariable("primary"),
  primaryForeground: () => getCSSVariable("primaryForeground"),
  secondary: () => getCSSVariable("secondary"),
  secondaryForeground: () => getCSSVariable("secondaryForeground"),
  muted: () => getCSSVariable("muted"),
  mutedForeground: () => getCSSVariable("mutedForeground"),
  accent: () => getCSSVariable("accent"),
  accentForeground: () => getCSSVariable("accentForeground"),
  border: () => getCSSVariable("border"),
  input: () => getCSSVariable("input"),
  card: () => getCSSVariable("card"),
  cardForeground: () => getCSSVariable("cardForeground"),
  destructive: () => getCSSVariable("destructive"),
  destructiveForeground: () => getCSSVariable("destructiveForeground"),
  ring: () => getCSSVariable("ring"),
  // Chart colors
  chart1: () => getCSSVariable("chart1"),
  chart2: () => getCSSVariable("chart2"),
  chart3: () => getCSSVariable("chart3"),
  chart4: () => getCSSVariable("chart4"),
  chart5: () => getCSSVariable("chart5"),
  // Sidebar colors
  sidebar: () => getCSSVariable("sidebar"),
  sidebarForeground: () => getCSSVariable("sidebarForeground"),
  sidebarPrimary: () => getCSSVariable("sidebarPrimary"),
  sidebarPrimaryForeground: () => getCSSVariable("sidebarPrimaryForeground"),
  sidebarAccent: () => getCSSVariable("sidebarAccent"),
  sidebarAccentForeground: () => getCSSVariable("sidebarAccentForeground"),
  sidebarBorder: () => getCSSVariable("sidebarBorder"),
  sidebarRing: () => getCSSVariable("sidebarRing"),
} as const;

// Typography utilities
export const fontUtils = {
  sans: () => `var(${fontVariables.sans})`,
  serif: () => `var(${fontVariables.serif})`,
  mono: () => `var(${fontVariables.mono})`,
} as const;

// Shadow utilities
export const shadowUtils = {
  "2xs": () => `var(${shadowVariables["2xs"]})`,
  xs: () => `var(${shadowVariables.xs})`,
  sm: () => `var(${shadowVariables.sm})`,
  md: () => `var(${shadowVariables.md})`,
  lg: () => `var(${shadowVariables.lg})`,
  xl: () => `var(${shadowVariables.xl})`,
  "2xl": () => `var(${shadowVariables["2xl"]})`,
} as const;

// Radius utilities
export const radiusUtils = {
  sm: () => `var(${radiusVariables.sm})`,
  md: () => `var(${radiusVariables.md})`,
  lg: () => `var(${radiusVariables.lg})`,
  xl: () => `var(${radiusVariables.xl})`,
} as const;
