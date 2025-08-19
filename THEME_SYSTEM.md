# Theme System Documentation

## Overview

This Next.js project includes a comprehensive theme system that supports light, dark, and system themes with proper CSS variables and TypeScript support.

## Features

- ✅ Light, Dark, and System theme modes
- ✅ Persistent theme storage in localStorage
- ✅ System preference detection and auto-switching
- ✅ Smooth transitions between themes
- ✅ TypeScript support with proper typing
- ✅ CSS variables for consistent theming
- ✅ Tailwind CSS integration
- ✅ Theme-aware components

## File Structure

```
app/
├── contexts/
│   └── theme-context.tsx      # Theme provider and context
├── components/
│   └── ui/
│       ├── theme-toggle.tsx   # Theme toggle components
│       ├── theme-demo.tsx     # Demo component
│       └── index.ts          # Component exports
├── hooks/
│   └── use-theme-colors.ts   # Theme utility hooks
├── lib/
│   └── theme-config.ts       # Theme configuration
└── globals.css               # CSS variables and theme styles
```

## Usage

### 1. Theme Provider

The `ThemeProvider` is already set up in `app/layout.tsx`:

```tsx
import { ThemeProvider } from "./contexts/theme-context";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Using the Theme Hook

```tsx
"use client";

import { useTheme } from "@/app/contexts/theme-context";

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme("dark")}>Set Dark</button>
      <button onClick={() => setTheme("light")}>Set Light</button>
      <button onClick={() => setTheme("system")}>Set System</button>
    </div>
  );
}
```

### 3. Theme Toggle Component

```tsx
import { ThemeToggle } from "@/app/components/ui/theme-toggle";

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

### 4. Using CSS Variables in Tailwind

The theme system provides these Tailwind classes:

- `bg-background` / `text-foreground` - Main background and text
- `bg-card` / `text-card-foreground` - Card backgrounds
- `bg-primary` / `text-primary-foreground` - Primary colors
- `bg-secondary` / `text-secondary-foreground` - Secondary colors
- `bg-muted` / `text-muted-foreground` - Muted colors
- `bg-accent` / `text-accent-foreground` - Accent colors
- `border-border` - Border colors
- `bg-input` - Input backgrounds

### 5. Theme-aware Styling

```tsx
function MyCard() {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-lg p-6">
      <h2 className="text-foreground">Card Title</h2>
      <p className="text-muted-foreground">Card description</p>
      <button className="bg-primary text-primary-foreground hover:bg-primary/80">
        Action
      </button>
    </div>
  );
}
```

## Color Tokens

### Light Theme
- Background: `hsl(0, 0%, 100%)`
- Foreground: `hsl(240, 10%, 3.9%)`
- Primary: `hsl(240, 9%, 10%)`
- Secondary: `hsl(240, 4.8%, 95.9%)`
- Muted: `hsl(240, 4.8%, 95.9%)`
- Accent: `hsl(240, 4.8%, 95.9%)`
- Border: `hsl(240, 5.9%, 90%)`

### Dark Theme
- Background: `hsl(240, 10%, 3.9%)`
- Foreground: `hsl(0, 0%, 98%)`
- Primary: `hsl(0, 0%, 98%)`
- Secondary: `hsl(240, 3.7%, 15.9%)`
- Muted: `hsl(240, 3.7%, 15.9%)`
- Accent: `hsl(240, 3.7%, 15.9%)`
- Border: `hsl(240, 3.7%, 15.9%)`

## Custom Hooks

### useThemeColors

```tsx
import { useThemeColors } from "@/app/hooks/use-theme-colors";

function MyComponent() {
  const { theme, colors, isDark, isLight } = useThemeColors();

  return (
    <div style={{ backgroundColor: colors.background() }}>
      {isDark ? "Dark mode" : "Light mode"}
    </div>
  );
}
```

## Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Use semantic color names** (primary, secondary, muted) instead of specific colors
3. **Test both themes** during development
4. **Use the theme hooks** for conditional logic
5. **Provide theme toggle** in your UI for better UX

## Extending the Theme

To add new color tokens:

1. Add to CSS variables in `globals.css`
2. Update `theme-config.ts` with new color utilities
3. Add Tailwind classes in the `@theme` section
4. Update TypeScript types if needed

## Troubleshooting

- **Hydration errors**: Make sure to use `suppressHydrationWarning` in the html tag
- **Theme not persisting**: Check localStorage permissions and `storageKey` prop
- **Colors not updating**: Ensure you're using CSS variables, not hardcoded values
- **System theme not working**: Check browser support for `prefers-color-scheme`
