# 🎨 Neon Beats: Style Guide & Design System

<div align="center">
  <img src="../assets/images/logo.png" alt="Neon Beats Logo" width="150" style="margin-bottom: 20px;"/>
</div>
This style guide documents the visual identity and UI/UX patterns used across the Neon Beats platform. This ensures design consistency and professional visual presentation.

---

## 1. Brand Identity
**Neon Beats** embodies a futuristic, immersive, and premium aesthetic. The design is inspired by "Cyberpunk" aesthetics but refined with a sophisticated, professional dark theme called **Neon Dark**.

---

## 2. Color Palette

### 🌈 Core Colors
| Role | HEX | Example |
| :--- | :--- | :--- |
| **Primary (Glow)** | `#f72585` | Neon Pink (Highlights) |
| **Secondary (Core)** | `#7209b7` | Deep Purple (Buttons) |
| **Accent (Info)** | `#4cc9f0` | Cyan (Pricing & Success) |
| **Dark (Base)** | `#120118` | Background & Layout |

### 🌌 Gradients
- **Primary Gradient**: `linear-gradient(135deg, #7209b7 0%, #f72585 100%)`
- **Glass Overlay**: Semi-transparent white (`rgba(255, 255, 255, 0.05)`) with shadow.

---

## 3. Typography
**Neon Beats** uses the **Inter/Outfit** font family (system-fallback provided) for a modern, clean, and highly readable interface.

| Level | Size | Weight |
| :--- | :--- | :--- |
| **H1 (Hero Title)** | `3.5rem` | 700 (Bold) |
| **H2 (Section Header)** | `2.5rem` | 700 (Bold) |
| **H3 (Card Title)** | `1.5rem` | 600 (Semi-Bold) |
| **Body (Standard)** | `1.0rem` | 400 (Regular) |

---

## 4. UI Components

### 🔘 Buttons
Our buttons use heavy border-radius and neon hover effects:
- **Primary**: Gradient background with floating shadow.
- **Icon Buttons**: Circle glass backgrounds with transition hover scaling.

### 🗃️ Card Design
Product cards utilize the **Glassmorphism** principle:
- **Background**: `rgba(255, 255, 255, 0.03)`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Interactions**: Image scales inward `1.1x` on hover to create depth.

---

## 5. Animation Principles
1. **Staggered Entrance**: Items enter the grid one-by-one (`0.05s` delay) to lead the user's eye.
2. **Smooth Transitions**: All hover and active states use a `0.3s cubic-bezier` easing for a "premium" feel.
3. **Motion with Purpose**: We avoid excessive spinning/flashing; motion is exclusively used to indicate interaction or focus.
4. **Pulse Animation & Letter Gathering**: The brand logo uses a subtle pulsing glow, while the "NEON BEATS" title gathers letter-by-letter along a smooth HSL gradient, during the initial 2.5-second launch splash screen to build brand anticipation.
