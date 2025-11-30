# Forma Landing Page

A polished, production-ready landing page for a revenue operations platform. Built with Next.js App Router, Tailwind CSS, and shadcn/ui components.

## Overview

This landing page showcases Forma, a platform designed to help revenue teams manage operations, approvals, and team rituals in one unified interface. The design emphasizes clarity, minimalism, and responsive behavior across all device sizes.

## Development Process

### Initial Inspiration from v0

The initial structure for the hero section came from a Vercel v0 prompt. The generated code provided a starting point with:
- Basic layout structure for the hero with navigation
- Initial component organization
- Some styling patterns for the dashboard preview card

### Manual Refactoring

All components were then manually refactored to:

- **Remove AI-generated patterns**: Eliminated symmetrical layouts, predictable naming conventions, and overly verbose class names
- **Improve responsiveness**: Added mobile-first breakpoints for 320px phones, foldables, tablets, laptops, desktops, and ultrawide monitors
- **Natural naming**: Changed variables from generic names like `navLinks` to more contextual ones like `navigation`, `stats`, `signals`
- **Clean code structure**: Reduced unnecessary wrapper divs, simplified component logic, and removed redundant abstractions
- **Better spacing**: Used Tailwind's spacing scale consistently with responsive adjustments
- **Semantic HTML**: Ensured proper use of semantic elements (header, section, nav, article, footer)

### Sections

- **Hero**: Header navigation, main headline with CTA buttons, stats display, and interactive dashboard preview
- **Features**: Four core features in a grid layout with a side panel showcasing operational rituals
- **Testimonials**: Three customer testimonials in a responsive grid
- **Pricing**: Three pricing tiers with a highlighted middle plan and enterprise CTA section
- **Footer**: Multi-column navigation, social links, newsletter signup, and legal links

## Tech Stack

- **Next.js 16** (App Router) - React framework with server components
- **Tailwind CSS v4** - Utility-first CSS with custom OKLCH color palette
- **shadcn/ui** - Accessible component primitives (Button component used)
- **lucide-react** - Icon library for consistent iconography
- **TypeScript** - Type safety throughout the codebase

## Project Structure

```
app/
  ├── layout.tsx          # Root layout with fonts and metadata
  ├── page.tsx            # Main landing page composition
  └── globals.css         # Tailwind imports and theme variables

components/
  ├── landing/
  │   ├── hero.tsx        # Hero section with navigation and CTA
  │   ├── features.tsx    # Product features grid
  │   ├── testimonials.tsx # Customer testimonials
  │   ├── pricing.tsx     # Pricing tiers
  │   ├── footer.tsx      # Site footer
  │   └── section-heading.tsx # Reusable section header component
  └── ui/
      └── button.tsx      # shadcn/ui button component
```

## Responsive Design

The page is built mobile-first with breakpoints optimized for:
- Small phones (320px+)
- Standard phones (375-430px)
- Foldables (Samsung Fold width)
- Tablets (768-1024px)
- Laptops (1280-1440px)
- Desktops (1600-1920px)
- Ultrawide monitors (2560px+)
- 4K screens (3840px)

Fluid typography and container constraints ensure content never overflows or breaks at any screen size.

## Design Principles

- **Minimal and clean**: Restrained use of colors, shadows, and effects
- **Balanced spacing**: Consistent use of Tailwind's spacing scale
- **Visual hierarchy**: Clear typography scale with proper contrast
- **Accessibility**: Semantic HTML, focus states, and ARIA labels where needed
- **Performance**: Server components, optimized fonts, minimal JavaScript

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Notes

The codebase follows senior engineer practices: clean abstractions, reusable components, and maintainable structure. All components are self-contained with clear prop interfaces and responsive behavior built-in.