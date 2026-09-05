# One-time setup: fonts

The components use two typefaces:
- **Space Grotesk** for headings (`font-[family-name:var(--font-display)]`)
- **Inter** for body text (your existing default sans)

Add this to your root layout (e.g. `app/layout.jsx` / `app/layout.tsx`):

```jsx
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)] bg-[#05070B]">
        {children}
      </body>
    </html>
  );
}
```

That's it — every component already references `var(--font-display)` for
headings, and will fall back to your default sans-serif until this is added.

## Color tokens used throughout

| Role                | Hex        |
|---------------------|------------|
| Background          | `#05070B`  |
| Surface (cards/nav)  | `#0B0F17`  |
| Border               | `#1D2636`  |
| Text (primary)       | `#EAF0F7`  |
| Text (secondary)     | `#8792A3`  |
| Accent — amber (CTA/alert) | `#FF8A3D` |
| Accent — cyan (AI/vision)  | `#4FD8FF` |

## Note on a bug fixed during the redesign

`WhyKavach.jsx` and `Features.jsx` both used `id="features"` — duplicate IDs
break in-page anchor links. `WhyKavach.jsx` now uses `id="why-it-works"`.
If your page only renders one of these two components, you can ignore this,
but if both are on the same page, this fix was necessary.
