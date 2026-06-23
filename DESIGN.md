---
name: Glacial Clarity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dddddd'
  on-secondary-container: '#606161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  deep-navy: '#0A1128'
  ice-blue: '#F4F7F9'
  status-success: '#10B981'
  border-subtle: '#EBEBEB'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 120px
---

## Brand & Style

This design system embodies a "Glacial Clarity" aesthetic—a sophisticated blend of high-trust Corporate Modernism and refreshing Minimalism. Designed for the venture capital space, the visual identity prioritizes transparency, efficiency, and professional rigor.

The style avoids unnecessary ornamentation, focusing instead on structural integrity and crisp execution. It utilizes a restrained color palette and generous whitespace to evoke a sense of calm authority. Elements feel grounded and permanent, yet the use of subtle micro-interactions and high-quality typography ensures the brand remains approachable and contemporary for early-stage founders. The emotional response is one of institutional reliability paired with forward-thinking agility.

## Colors

The color strategy is anchored in a high-contrast monochromatic foundation, utilizing pure blacks and whites to establish a "no-nonsense" professional tone. 

- **Primary:** Black is used for core branding, primary typography, and high-impact call-to-action elements, signaling strength and decisiveness.
- **Secondary:** A cool-toned light gray (#EBEBEB) acts as a structural divider, used for borders and subtle background shifts to organize content without creating visual noise.
- **Neutral:** Pure White (#FFFFFF) provides the primary "canvas," ensuring maximum readability and a clean, airy feel.
- **Accents:** A deep navy and a very pale "ice blue" are introduced to add depth and a hint of the "Icebreaker" thematic identity, primarily used for data visualization and secondary UI elements.

## Typography

The typography system relies on **Hanken Grotesk** for its sharp, contemporary geometric forms that bridge the gap between technical precision and human accessibility. It is used across all primary headings and body copy to maintain a unified, modern voice.

For specialized metadata, technical stats, or "pre-header" labels, **JetBrains Mono** is introduced. This monospaced font reinforces the "venture capital meets technology" narrative, providing a structured, data-driven contrast to the more fluid Hanken Grotesk. 

Tight letter-spacing is applied to larger display sizes to maintain a compact, high-end editorial feel. Line heights are generous in the body copy to ensure effortless readability for long-form investment theses or founder bios.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop screens, centering content within a 1280px container to create a focused reading experience. On mobile, the system transitions to a fluid model with consistent 20px margins.

Spacing follows a strict 4px base unit, but the design leans into large-scale vertical rhythms. Section gaps of 120px or more are encouraged to separate distinct thematic blocks, allowing the brand's "ice" aesthetic to breathe. Content is organized primarily in vertical stacks with clear hierarchical groupings, avoiding overly complex horizontal nesting to maintain clarity and ease of navigation on all devices.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**. 

Depth is achieved by placing pure white elements on the light gray (#EBEBEB) background or vice-versa. To distinguish interactive cards or modals, a 1px solid border using the `border-subtle` token is preferred over shadows. This creates a "flat-plus" look that feels architectural rather than organic.

When extreme focus is required (e.g., a modal or dropdown), a very soft, large-radius ambient shadow (10% opacity, 20px blur) may be used, but it should be nearly imperceptible. The goal is to feel like sheets of paper or panels of frosted glass stacked with precision.

## Shapes

The shape language is "Soft-Mechanical." By using a consistent `0.25rem` (4px) corner radius, UI elements feel finished and modern without becoming overly "friendly" or "bubbly" like consumer social apps. 

This subtle rounding applies to buttons, input fields, and cards. It provides a technical, engineered quality that aligns with the professional venture capital environment. Circular shapes are reserved exclusively for avatars and specific iconography to provide a visual break from the otherwise rectangular grid.

## Components

- **Buttons:** Primary buttons are solid black with white text, utilizing sharp 4px corners. Hover states should involve a slight shift to a deep navy or a very subtle lift. Secondary buttons use a `border-subtle` outline.
- **Input Fields:** Use a minimalist approach with a 1px bottom border or a full subtle outline. Focus states are indicated by a thickening of the border or a change to primary black.
- **Cards:** Cards should be border-heavy (1px #EBEBEB) with no shadow. Backgrounds should be pure white to contrast against the site-wide gray or vice-versa.
- **Chips/Tags:** Use the `label-caps` typography style. Chips are rectangular with the same 4px radius as buttons, typically using a light gray background and black text.
- **Lists:** Clean, unstyled lists with generous vertical padding (stack-md) and a `border-subtle` horizontal separator between items.
- **Trust Signals:** Specifically for VC, use a "Portfolio Grid" component—a clean 4-6 column layout of monochrome logos that emphasizes the breadth of investments without overwhelming the eye.