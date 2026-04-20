# Design System — Active Learning Business

## Visual Direction
**Clean and minimal.** Every.to-inspired. White space leads. Typography carries the content.
Visuals support — they never compete with the writing.

## Brand Colours

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1A1A2E` | Headlines, nav, primary text |
| `--color-accent` | `#4F46E5` | CTAs, links, highlights (indigo — focus/intelligence) |
| `--color-accent-light` | `#EEF2FF` | Accent backgrounds, tag chips |
| `--color-surface` | `#FFFFFF` | Page background |
| `--color-surface-alt` | `#F8F9FA` | Card backgrounds, code blocks |
| `--color-border` | `#E5E7EB` | Dividers, card borders |

### Text Colours
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#111827` | Body text |
| `--color-text-secondary` | `#6B7280` | Captions, metadata, secondary labels |
| `--color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |

### Status Colours
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#10B981` | Confirmation states |
| `--color-warning` | `#F59E0B` | Alerts |
| `--color-error` | `#EF4444` | Form errors |

## Typography

### Font Stack
- **Headings:** `Inter` (Google Fonts) — clean, modern, legible at all sizes
- **Body:** `Inter` — consistent, no serif friction
- **Code/inline:** `JetBrains Mono` — for any code snippets in posts

### Type Scale
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `--text-hero` | 3rem (48px) | 700 | Hero headlines |
| `--text-h1` | 2.25rem (36px) | 700 | Page titles |
| `--text-h2` | 1.75rem (28px) | 600 | Section headings |
| `--text-h3` | 1.25rem (20px) | 600 | Sub-sections |
| `--text-body` | 1rem (16px) | 400 | Body copy |
| `--text-small` | 0.875rem (14px) | 400 | Captions, metadata |
| `--text-xs` | 0.75rem (12px) | 500 | Tags, labels |

### Line Heights
- Body: 1.7 (generous — reader comfort for long-form)
- Headings: 1.2
- Max content width: 680px (Every.to style — optimal reading line length)

## Spacing System (8pt grid)
| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-24` | 96px |

## Image Style

### Hero Images
- **Dimensions:** 1200×630px
- **Format:** WebP at 85% quality
- **Style:** Clean, conceptual illustrations or minimal photography
- **Mood:** Focused, intelligent, calm — never chaotic or stock-photo generic
- **Colour treatment:** Cooler tones (blue/indigo leaning) to match brand palette
- **Avoid:** People hunched over laptops, generic lightbulbs, busy collages

### Social Cards
- Square (1080×1080): Bold title text on clean background, brand accent colour
- Story (1080×1920): Same system, vertical layout

## Component Patterns

### Blog Post Card
- White card, subtle border (`--color-border`)
- Category tag (indigo chip, `--color-accent-light`)
- Title in `--text-h3` weight 600
- 2-line excerpt in `--color-text-secondary`
- Read time + date metadata

### CTA Buttons
- Primary: `--color-accent` background, white text, 8px radius
- Secondary: white background, `--color-accent` border + text
- No shadows — flat design

### Newsletter Signup
- Full-width section, `--color-surface-alt` background
- Single email input + submit button
- Minimal copy: "Get the next post in your inbox."
