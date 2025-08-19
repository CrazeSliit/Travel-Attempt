"use client";

import { useTheme } from "@/app/contexts/theme-context";

export function ColorVerification() {
  const { resolvedTheme } = useTheme();

  const lightColors = {
    background: "#ffffff",
    foreground: "#1a1a1a", 
    card: "#fdfdfd",
    cardForeground: "#1a1a1a",
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
    sidebar: "#f5f5dc",
    sidebarForeground: "#1a1a1a",
  };

  const darkColors = {
    background: "#1a1a1a",
    foreground: "#fdfdfd",
    card: "#262626", 
    cardForeground: "#fdfdfd",
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
    sidebar: "#222222",
    sidebarForeground: "#fdfdfd",
  };

  const chartColors = {
    chart1: resolvedTheme === "light" ? "#2e8b57" : "#6ab547",
    chart2: "#f7c948",
    chart3: "#4a90e2", 
    chart4: "#ff6f61",
    chart5: "#e75480",
  };

  const currentColors = resolvedTheme === "light" ? lightColors : darkColors;

  return (
    <div className="p-6 bg-card border border-border rounded-lg space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground">🎨 Color Verification</h3>
        <p className="text-muted-foreground">Current theme: {resolvedTheme}</p>
      </div>

      {/* Main Colors */}
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Main Colors</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Object.entries(currentColors).map(([name, color]) => (
            <div key={name} className="space-y-2">
              <div 
                className="w-full h-12 rounded border border-border"
                style={{ backgroundColor: color }}
              />
              <div className="text-xs">
                <div className="font-medium text-foreground">{name}</div>
                <div className="text-muted-foreground font-mono">{color}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Colors */}
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Chart Colors</h4>
        <div className="grid grid-cols-5 gap-3">
          {Object.entries(chartColors).map(([name, color]) => (
            <div key={name} className="space-y-2">
              <div 
                className="w-full h-12 rounded border border-border"
                style={{ backgroundColor: color }}
              />
              <div className="text-xs">
                <div className="font-medium text-foreground">{name}</div>
                <div className="text-muted-foreground font-mono">{color}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Classes Test */}
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Tailwind Classes Test</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-primary text-primary-foreground rounded text-center text-sm font-medium">
            Primary
          </div>
          <div className="p-3 bg-secondary text-secondary-foreground rounded text-center text-sm font-medium">
            Secondary
          </div>
          <div className="p-3 bg-accent text-accent-foreground rounded text-center text-sm font-medium">
            Accent
          </div>
          <div className="p-3 bg-destructive text-destructive-foreground rounded text-center text-sm font-medium">
            Destructive
          </div>
          <div className="p-3 bg-muted text-muted-foreground rounded text-center text-sm font-medium">
            Muted
          </div>
          <div className="p-3 bg-chart-1 text-white rounded text-center text-sm font-medium">
            Chart 1
          </div>
          <div className="p-3 bg-chart-2 text-black rounded text-center text-sm font-medium">
            Chart 2
          </div>
          <div className="p-3 bg-chart-3 text-white rounded text-center text-sm font-medium">
            Chart 3
          </div>
        </div>
      </div>

      {/* CSS Variables Test */}
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">CSS Variables Test</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded">
            <h5 className="font-medium mb-2">Background/Foreground</h5>
            <div 
              className="p-3 rounded"
              style={{ 
                backgroundColor: "var(--background)", 
                color: "var(--foreground)",
                border: "1px solid var(--border)"
              }}
            >
              This uses CSS variables directly
            </div>
          </div>
          <div className="p-4 border border-border rounded">
            <h5 className="font-medium mb-2">Card Colors</h5>
            <div 
              className="p-3 rounded"
              style={{ 
                backgroundColor: "var(--card)", 
                color: "var(--card-foreground)",
                border: "1px solid var(--border)"
              }}
            >
              Card with CSS variables
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
