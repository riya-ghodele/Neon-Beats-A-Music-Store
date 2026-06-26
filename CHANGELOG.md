# 📜 Neon Beats: Project Changelog

All notable changes to the **Neon Beats** music store project are documented in this file.

---

## [2.3.0] - 2026-06-26
### 🎨 Fixed/Polished
-   **Codebase Cleanup**: Removed a massive duplicated stylesheet block in `styles.css` (reducing size by ~48%), deleted leftover empty comments related to the music player, and cleared temporary browser/file-system debugging scripts.
-   **Mobile Layout & UX**: Fixed a layout bug in the mobile stats view by shrinking the stats box size, using a 3-column grid layout, and adding proper vertical clearance above the hero title.
-   **Desktop Navbar**: Resolved a duplicate "Sign In" button layout bug on desktop view by globally hiding the mobile-drawer action buttons.
-   **Hero Background**: Reverted the hero section's background back to using the local high-fidelity `assets/images/hero-bg.jpg` file.
-   **Subscription Form Cleanup**: Removed the redundant email subscription form section from below the about section.
-   **Visual Polish**: Upgraded the splash screen's loading indicator to a modern, neon-accented letter-gathering animation spelling "NEON BEATS" with alternating brand colors.

## [2.2.0] - 2026-06-26
### ✨ Added
-   **Splash Screen**: Implemented a 2-second loading splash screen featuring the brand logo and pulse animation.
-   **Hero Background**: Integrated a new high-resolution hero background image from Unsplash.

### 🎨 Fixed/Polished
-   **Bento Grid Redesign**: Completely overhauled the About section with a responsive, modern Bento Grid layout featuring glassmorphism and micro-animations.
-   **Product Assets**: Integrated high-fidelity PNG product images for all 9 products (including the Gibson Les Paul Standard).
-   **UI Cleanup**: Removed informal emojis from the footer, newsletter note, and checkout success message.

---

## [2.1.0] - 2026-04-01
### ✨ Added
-   **Sign In Modal**: Implemented a professional login/authentication simulation.
-   **New Drum Instruments**: Added "Roland V-Drums TD-17KVX" and "Pearl Export EXX Drum Set" to the catalog.
-   **Empty Cart State**: Added a custom UI for an empty shopping cart.
-   **Sticky Footer**: Cart summary is now sticky within the sliding panel.
-   **Documentation Suite**: Created `TECHNICAL_REPORT.md`, `USER_GUIDE.md`, `DEVELOPER_DOCS.md`, and `STYLE_GUIDE.md` for formal project submission.

### 🎨 Fixed/Polished
-   **INR Pricing**: Converted the entire product dataset from `$` to Indian Rupees (`₹`).
-   **Bento Grid**: Refined the About section for a more modern information layout.
-   **Filtering Animations**: Implemented high-performance CSS crossfade transitions for category switching.
-   **Merge Resolution**: Correctly resolved complex git merge conflicts across `index.html`, `styles.css`, and `script.js`.

---

## [2.0.0] - 2026-03-25
### ✨ Added
-   **Responsive Design**: Implemented media queries for mobile and tablet support.
-   **Glassmorphism**: Applied signature "frosted glass" effects to cards and navigation.
-   **Category Filtering**: Logic for real-time store sorting.
-   **Quick View**: Initial modal architecture for product details.

---

## [1.0.0] - Initial Release
### 🏗️ Created
-   Basic HTML5/CSS3/Vanilla JS boilerplate.
-   Static product array.
-   Standard shopping cart logic.
