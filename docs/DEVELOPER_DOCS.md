# 🛠️ Neon Beats: Developer & Maintenance Documentation

This document is intended for developers, maintainers, or examiners looking to understand the implementation details of the Neon Beats project or extend its functionality.

---

## 1. JavaScript API Reference (`script.js`)

The core logic of the application is categorized into initialization, state management, and UI rendering.

### 🧩 Core State
- **`appState`**: Global object tracking `cart` (Array), `filter` (String), and `searchQuery` (String).
- **`products`**: Constant array of objects defining available items.

### 🚀 Core Functions

#### `renderProducts(filter)`
Clears the `#products-grid` and populates it with filtered `product-card` elements.
- **Parameters**: `filter` (String) - The category slug.
- **Behavior**: Uses CSS `fadeInUp` animation with a `0.05s` staggered delay per element.

#### `addToCart(productId)`
Main function for purchase logic.
- **Parameters**: `productId` (String) - The unique ID of the product.
- **Behavior**: Checks for existing IDs to update quantity or pushes a new object to `appState.cart`.

#### `updateCartUI()`
Re-renders the cart sidebar from the current `appState`.
- **Behavior**: Calculates running totals, updates the badge count, and conditionally renders an empty state if the cart length is 0.

#### `openQuickView(productId)`
Infects the Quick View modal with the attributes of the selected product ID.
- **Behavior**: Maps `id`, `title`, `price`, `description`, `category`, and `image` to the modal DOM elements.

#### `processPayment()`
Simulated transaction wrapper.
- **Behavior**: Displays a global loading mask for 1.5s, clears the cart, and triggers the `success-overlay`.

---

## 2. Design System & CSS Guide (`styles.css`)

### 🎨 Color Variables
Neon Beats uses a centralized color palette defined in `:root`:
- **`--primary`**: `#f72585` (Feature Highlights)
- **`--secondary`**: `#7209b7` (Gradients & Buttons)
- **`--accent`**: `#4cc9f0` (Success & Pricing)
- **`--dark`**: `#120118` (Background)

### 🧩 Layout Patterns
- **Bento Grid**: Utilized in the Features section using `display: grid` with `auto-fit` columns.
- **Glassmorphism**: Achieved via `rgba` backgrounds and `backdrop-filter: blur(12px)`.

---

## 3. Maintenance Guide

### How to Add a New Product
To expand the catalog, update the `products` array in `script.js`:
1.  Add a new JSON object to the array.
2.  Assign a unique `id` (e.g., `p12`).
3.  Specify a `category` (must match one of the navigation filter slugs).
4.  Add a product image to `assets/images/` and link its path.

### How to Modify Theme Colors
Change the variables in the `:root` pseudo-class in `styles.css`. This will globally propagate changes to buttons, backgrounds, and text.

---

## 4. Development Environment
- **Local Server**: Recommended to use a simple HTTP server (Pythons's `http.server` or VS Code Live Server) to prevent `CORS` issues when implementing dynamic `JSON` fetching in Phase 2.
- **Asset Optimization**: Images should be lazy-loaded (achieved via the `loading="lazy"` attribute in `index.html`) to maintain high Lighthouse performance scores.
