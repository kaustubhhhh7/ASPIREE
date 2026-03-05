# Implementation Plan - Compacting Global Content for 100% Desktop View

The goal is to reduce the overall "scale" of the application so that more content is visible at once on standard desktop monitors (100% zoom).

## User Review Required

> [!IMPORTANT]
> This plan modifies the global container width and vertical paddings across multiple components. Please verify if the resulting tightness meets your requirements.

## Proposed Changes

### 1. Global Layout & Container
- **`tailwind.config.ts`**:
    - Reduce the `2xl` container max-width from `1400px` to `1280px`.
    - Reduce global container padding from `2rem` to `1.5rem`.

### 2. Header & Sections (Spacing)
- **`HeroSection.tsx`**:
    - Reduce `pt-16 lg:pt-20` to `pt-12 lg:pt-16`.
    - Reduce headline and body font sizes slightly.
- **`GlobalHotspotMap.tsx`**:
    - Change `py-24` to `py-12`.
    - Compact the university logo cards from `h-[190px]` to `h-[150px]`.
    - Scale down the world map max-width to `max-w-5xl`.
- **`TopDestinations.tsx`**:
    - Change `py-16 lg:py-20` to `py-10 lg:py-12`.
    - Smaller grid gaps and card padding.
- **`ProcessSteps.tsx`**:
    - Change `py-6 lg:py-10` to `py-4 lg:py-8`.
    - Tighten the S-curve connector spacing.

### 3. Global Styles
- **`index.css`**:
    - Reduce the default heading sizes (`h1`, `h2`, etc.) and body line heights slightly to save vertical space.

## Verification Plan
- Visually inspect the landing page at 100% zoom on a standard 1080p monitor.
- Ensure all sections are still readable and the layout remains responsive.
