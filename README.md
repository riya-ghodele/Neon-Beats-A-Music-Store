# 🎸 Neon Beats - Premium Music Store

<div align="center">
  <img src="assets/images/logo.png" alt="Neon Beats Logo" width="200" style="margin-bottom: 20px;"/>
</div>

A premium, high-fidelity e-commerce experience for musical instruments, built with modern HTML, CSS, and JavaScript. Features a stunning dark neon theme with advanced glassmorphism effects, a bento grid information architecture, and a seamless sliding shopping cart.

## 📸 Project Screenshots

<div align="center">
  <img src="assets/screenshots/Home%20Page%20Interface.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Home Page Interface"/>
  <img src="assets/screenshots/Product%20Catalog%20Interface.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Product Catalog Interface"/>
  <br>
  <img src="assets/screenshots/Product%20Category%20Filtering.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Product Category Filtering"/>
  <img src="assets/screenshots/Shopping%20Cart%20Panel.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Shopping Cart Panel"/>
  <br>
  <img src="assets/screenshots/Quick%20View%20Modal.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Quick View Modal"/>
  <img src="assets/screenshots/Checkout%20Interface.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Checkout Interface"/>
  <br>
  <img src="assets/screenshots/Success%20Confirmation%20Screen.png" width="48%" style="border-radius: 8px; border: 1px solid #333; margin: 1%;" alt="Success Confirmation Screen"/>
</div>

## ✨ Features

- **🛍️ Premium Product Catalog** - 11 curated premium guitars, keyboards, drums, and accessories mapped to realistic INR (₹) pricing.
- **🛒 Interactive Shopping Cart** - Add items, adjust quantities, view live calculations, and simulate checkout with a persistent sticky total footer and a styled empty state.
- **🔐 User Login / Sign In** - Interactive glassmorphic Sign In modal simulating full user authentication.
- **🕶️ Quick View Modal** - Instant details modal for every instrument with real-time stock simulation.
- **📱 Fully Responsive Mobile-First Design** - Beautiful layout optimized for desktop, tablet, and mobile devices with consolidated CSS.
- **⚡ Advanced Sliding Loader Splash Screen** - Modern letter-sliding animation ("LOADING") spelling out loading steps with custom neon glow and automatic fade-out.
- **🎨 Glassmorphic Bento Grid** - Modern, multi-dimensional grid layout in the About section detailing the shop's values, stats, and curated collections.

## 🚀 Getting Started

No installation or build steps required! This is a pure static web prototype.

1. **Option 1:** Double-click `index.html` to open it instantly in any modern web browser.
2. **Option 2:** Serve it locally using an extension like *Live Server* in VS Code or via Python:
   ```bash
   python -m http.server 3000
   ```

## 📁 Project Structure

```
Music Store/
├── index.html          # Main storefront page & modals
├── script.js           # Interactive logic, state & cart functions
├── styles.css          # Modern consolidated stylesheet & keyframes
├── assets/
│   ├── images/         # Logo, hero background, and instrument assets
│   └── screenshots/    # UI/UX layout walkthrough screenshots
└── docs/               # Complete college documentation suite
```

## 🛠️ Technical Details

- **HTML5** - Clean semantic markup for structure and accessibility.
- **CSS3** - Custom variables (`:root`), Flexbox, CSS Grid, and signature `backdrop-filter: blur()` glassmorphism effects.
- **Vanilla JavaScript (ES6+)** - Reactive state management, DOM manipulation, and persistence via `localStorage`.

## 🎮 Interactive Walkthrough

1. **Category Filters**: Sort items instantly (All, Guitars, Keyboards, Drums, Accessories) with smooth crossfade animations.
2. **Quick View**: Hover over a product and click the eye icon to inspect detailed specs.
3. **Cart Operations**: Click the cart icon to add items, open the drawer to adjust quantity, or click Checkout.
4. **Sign In**: Tap the "Sign In" button in the navigation bar to interact with the responsive authentication popup.

## 📚 College Documentation Suite

This project includes a comprehensive set of documents for college submission and development:

-   [**Technical Report**](docs/TECHNICAL_REPORT.md) - Deep dive into architecture and data flow.
-   [**User Guide**](docs/USER_GUIDE.md) - Instructions for the end visitor.
-   [**Developer Docs**](docs/DEVELOPER_DOCS.md) - Function references and maintenance guide.
-   [**Style Guide**](docs/STYLE_GUIDE.md) - Visual design tokens and UI/UX principles.
-   [**Technical Overview**](docs/TECHNICAL_OVERVIEW.md) - Project architecture and implementation phases.
-   [**References & Citations**](docs/REFERENCES.md) - Assets and academic references.

## 📜 Project History

Check [**CHANGELOG.md**](CHANGELOG.md) for a full history of updates, fixes, and refactoring milestones.

---

### 🎓 College Project Submission

- **Project Name**: Neon Beats - Premium Music Store
- **Platform**: Web Prototype (HTML5/CSS3/Vanilla JS)
- **Developed by**: Riya Ghodele
- **Status**: Final Release (v2.3.0)

**Made with ❤️ for the First Year Submission.**
