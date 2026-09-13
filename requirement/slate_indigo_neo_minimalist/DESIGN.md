---
name: Slate & Indigo Neo-Minimalist
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#005338'
  on-tertiary: '#ffffff'
  tertiary-container: '#006e4b'
  on-tertiary-container: '#67f4b7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-padding: 32px
  gutter: 24px
---

## Brand & Style
This design system focuses on a Neo-minimalist aesthetic tailored for high-density administrative workflows. The personality is sophisticated and trustworthy, balancing the rigidity of a professional tool with the softness of modern web aesthetics.

The style leverages **Minimalism** as its core, punctuated by **Glassmorphism** for elevated layers (modals, popovers) and **Tonal Layering** for depth. The interface utilizes generous whitespace to reduce cognitive load in data-heavy environments, ensuring that user management tasks feel deliberate and calm.

## Colors
The palette is built on a "Slate & Indigo" foundation. 

- **Primary (Indigo):** Used for primary actions, active states, and focus indicators. It provides a vibrant contrast against the slate neutrals.
- **Secondary (Slate):** Used for text, secondary iconography, and borders. It ensures professional legibility.
- **Success (Mint):** A soft, high-vibrancy green used for "Active" status badges and successful CRUD confirmations.
- **Error (Rose):** Used for destructive actions (Delete User) and validation errors.
- **Surfaces:** The background uses a crisp white (`#FFFFFF`), while subtle containers and table headers use a light slate wash (`#F8FAFC`).

## Typography
The system uses a pure **Inter** stack to maintain a clean, systematic feel. 

- **Headings:** Use bold weights and slight negative letter spacing for a punchy, editorial look.
- **Labels:** Semi-bold weights are used for form labels and table headers to distinguish them clearly from data values.
- **Data Values:** Standard body-md is the workhorse for table content, optimized for long-form reading of emails and names.

## Layout & Spacing
The layout follows a **Fluid Grid** model with fixed maximum widths for dashboard widgets. 

- **Sidebar:** A fixed 260px left navigation.
- **Main Content:** A flexible area with a minimum 32px padding on all sides to create a "breathable" workspace.
- **Rhythm:** A strict 4px base unit. Component internal padding should be 12px vertical / 16px horizontal to maintain the minimalist openness.
- **Responsive:** On tablet, the sidebar collapses into a hamburger menu; on mobile, container padding reduces to 16px and summary cards stack vertically.

## Elevation & Depth
This design system avoids heavy shadows, opting for **Tonal Layers** and **Refined Outlines**.

- **Level 0 (Base):** White background.
- **Level 1 (Cards):** 1px solid border in `#E2E8F0` with no shadow. Used for summary cards and table containers.
- **Level 2 (Hover/Active):** A very soft, low-blur shadow: `0 4px 12px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Modals):** Glassmorphism effect. Backdrop blur of 12px with a white tint at 80% opacity. 1px white border to simulate light catching the edge of the glass.

## Shapes
A "Rounded" shape language (0.5rem base) is applied across the system to soften the "enterprise" feel. 

- **Buttons & Inputs:** 8px (0.5rem) border radius.
- **Cards & Modals:** 16px (1rem) border radius for a distinct container feel.
- **Status Badges:** Fully pill-shaped (999px) to contrast with the more structured rectangular inputs.

## Components

### Data Tables
- **Header:** Light slate background (`#F8FAFC`), 12px vertical padding, semi-bold labels.
- **Rows:** Subtle 1px bottom border. Hover state should trigger a subtle indigo-tinted background wash (`rgba(79, 70, 229, 0.02)`).
- **Actions:** Use ghost-style buttons for "Edit" and "More" to keep the visual noise low.

### Summary Cards
- Used for "Total Users," "Active Sessions," etc.
- Feature a subtle 2px top-border in the primary indigo color to provide visual weight.
- Large, bold numerical values for immediate impact.

### Input Fields
- **Default:** 1px solid border in slate-200.
- **Focus:** Indigo border (1.5px) with a subtle indigo glow (ring-offset shadow).
- **Validation:** Soft rose text below the field, never intrusive but clearly legible.

### Buttons
- **Primary:** Solid Indigo with white text.
- **Secondary:** White background with slate-900 text and a 1px slate-200 border.
- **Destructive:** Soft rose background with deep rose text for a "warning" feel that isn't overly aggressive.

### Modals
- Centered overlays with a 12px backdrop blur.
- Header includes a clear "Close" icon and a distinct title.
- Footer is right-aligned with secondary and primary actions.