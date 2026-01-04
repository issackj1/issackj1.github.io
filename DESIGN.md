# The Proof — Design System

A portfolio designed like evidence. No decoration. Pure confidence.

---

## Philosophy

This design competes by **subtracting**, not adding. Most AI-generated designs pile on effects (gradients, blurs, animations, rounded corners). The Proof does the opposite: typography does all the work.

**Core principle:** If an element doesn't serve the content, remove it.

---

## Typography

| Purpose | Font | Example |
|---------|------|---------|
| Headlines/Statements | `--font-display` (Times New Roman, serif, italic) | Project titles, section headers |
| Body | `--font-body` (Inter, sans-serif) | Descriptions, paragraphs |
| Data/Labels | `--font-mono` (system monospace) | Dates, tech stacks, metrics |

Serif italic conveys authority. Monospace conveys precision. Sans-serif stays out of the way.

---

## Color Tokens

```css
--ink: #000000;     /* Primary text (white in dark mode) */
--paper: #FFFFFF;   /* Background (near-black in dark mode) */
--gray: #555555;    /* Secondary text */
--faint: #F0F0F0;   /* Hover states, subtle backgrounds */
--border: #E0E0E0;  /* Dividers */
```

**Rule:** No accent colors. The work is the accent.

---

## What's Not Allowed

| ❌ Avoid | ✅ Use Instead |
|----------|----------------|
| Rounded corners | Sharp edges (`border-radius: 0`) |
| Shadows | Borders (`1px solid var(--border)`) |
| Gradients | Solid colors |
| Scale transforms on hover | Background tint only |
| Animated blobs/orbs | Nothing |
| Icon-heavy interfaces | Text labels |
| Card-based layouts | List-based layouts |

---

## Interaction Patterns

**Hover feedback:** Background changes to `--faint`. No transforms, no shadows.

```css
.item:hover {
  background: var(--faint);
}
```

**Links:** Underlined with `text-decoration`. Thickness increases on hover.

```css
a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
a:hover {
  text-decoration-thickness: 2px;
}
```

---

## Layout

- **Max width:** 52rem (narrower = more intentional)
- **Spacing:** Tight vertical rhythm; confidence doesn't need breathing room
- **Structure:** Stacked lists, not grids

---

## When Adding Features

Before adding anything, ask:

1. Does this element serve the content, or is it decoration?
2. Can I communicate this with typography instead of color/icons?
3. Would removing this make the design weaker or stronger?

If in doubt, leave it out.
