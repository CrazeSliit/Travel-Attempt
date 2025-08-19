"use client";

import { useTheme } from "@/app/contexts/theme-context";
import { useThemeColors } from "@/app/hooks/use-theme-colors";

export function ThemeDemo() {
  const { theme, resolvedTheme } = useTheme();
  const { isDark } = useThemeColors();

  return (
    <div className="p-6 rounded-lg border border-border bg-card text-card-foreground shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-foreground">🎨 Theme Showcase</h3>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Current Theme:</span>
          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-mono">
            {theme} → {resolvedTheme}
          </span>
        </div>

        {/* Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">🎯 Primary Colors</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary border border-border"></div>
                <span className="text-xs text-muted-foreground">Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary border border-border"></div>
                <span className="text-xs text-muted-foreground">Secondary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent border border-border"></div>
                <span className="text-xs text-muted-foreground">Accent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-destructive border border-border"></div>
                <span className="text-xs text-muted-foreground">Destructive</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">📊 Chart Colors</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-chart-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">Chart 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-chart-2 border border-border"></div>
                <span className="text-xs text-muted-foreground">Chart 2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-chart-3 border border-border"></div>
                <span className="text-xs text-muted-foreground">Chart 3</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-chart-4 border border-border"></div>
                <span className="text-xs text-muted-foreground">Chart 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">🎛️ Interactive Elements</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium shadow-sm">
              Secondary Button
            </button>
            <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors text-sm font-medium shadow-sm">
              Destructive Button
            </button>
            <button className="px-4 py-2 border border-border bg-background text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
              Outline Button
            </button>
          </div>
        </div>

        {/* Form Elements */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">📝 Form Elements</h4>
          <div className="space-y-2">
            <input 
              type="text" 
              placeholder="Enter some text..."
              className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
            />
            <textarea 
              placeholder="Enter a message..."
              rows={3}
              className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">🃏 Card Variants</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-card border border-border rounded-lg shadow-sm">
              <h5 className="font-medium text-card-foreground">Default Card</h5>
              <p className="text-sm text-muted-foreground mt-1">Card content with muted text</p>
            </div>
            <div className="p-4 bg-sidebar border border-sidebar-border rounded-lg shadow-sm">
              <h5 className="font-medium text-sidebar-foreground">Sidebar Card</h5>
              <p className="text-sm text-muted-foreground mt-1">Sidebar variant styling</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span>{isDark ? "🌙" : "☀️"}</span>
            Currently in <span className="font-medium text-foreground">{resolvedTheme}</span> mode with theme preference: <span className="font-medium text-foreground">{theme}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
