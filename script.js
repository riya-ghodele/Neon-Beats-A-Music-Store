/**
 * Neon Beats - Premium Music Store
 * Advanced JavaScript for Store Functionality
 */

// ==========================================
// Application State & Configuration
// ==========================================
const appState = {
  cart: [],
  view: 'grid', // 'grid' view for products
  filter: 'all',
  searchQuery: ''
};

// ==========================================
// Data: Products
// ==========================================
const products = [
  {
    id: 'p1',
    title: "Fender Stratocaster - Neon Edition",
    price: 1499.99,
    category: "guitars",
    image: "assets/images/fender_strat.jpg",
    rating: 4.9,
    description: "The classic Strat sound with a futuristic neon finish. Maple neck, alder body, and custom shop pickups."
  },
  {
    id: 'p2',
    title: "Roland Synthesis Keyboard",
    price: 899.99,
    category: "keyboards",
    image: "assets/images/roland_synth.jpg",
    rating: 4.8,
    description: "A powerhouse synthesizer with over 2000 sounds and intuitive controls for live performance."
  },
  {
    id: 'p3',
    title: "Yamaha Stage Drum Kit",
    price: 1299.99,
    category: "drums",
    image: "assets/images/yamaha_drums.jpg",
    rating: 4.7,
    description: "Professional birch shells for recording and touring. Includes hardware and cymbals."
  },
  {
    id: 'p4',
    title: "Audio-Technica Master Headphones",
    price: 199.99,
    category: "accessories",
    image: "assets/images/audiotechnica.jpg",
    rating: 4.9,
    description: "Reference quality open-back headphones for mixing and mastering."
  },
  {
    id: 'p5',
    title: "Gibson Les Paul Standard",
    price: 2499.99,
    category: "guitars",
    image: "assets/images/gibson_lespaul.jpg",
    rating: 5.0,
    description: "The iconic rock machine. Mahogany body with maple top for sustain and bite."
  },
  {
    id: 'p6',
    title: "Shure SM7B Vocal Mic",
    price: 399.99,
    category: "accessories",
    image: "assets/images/shure_sm7b.jpg",
    rating: 4.8,
    description: "The podcast and vocal standard. smooth, flat, wide-range frequency response."
  },
  {
    id: 'p7',
    title: "Korg Minilogue Poly-Synth",
    price: 549.99,
    category: "keyboards",
    image: "assets/images/korg_minilogue.jpg",
    rating: 4.6,
    description: "Next-gen analog synthesizer with 4-voice polyphony and built-in delay."
  },
  {
    id: 'p8',
    title: "Martin D-28 Acoustic",
    price: 2999.99,
    category: "guitars",
    image: "assets/images/martin_d28.jpg",
    rating: 5.0,
    description: "The dreadnought by which all others are judged. Sitka spruce top and rosewood back."
  },
  {
    id: 'p9',
    title: "Pioneer DJ Controller",
    price: 800.00,
    category: "accessories",
    image: "assets/images/pioneer_dj.jpg",
    rating: 4.7,
    description: "4-channel performance DJ controller for rekordbox dj."
  }
];

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Load saved state from localStorage
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      appState.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.warn('Failed to load saved state:', e);
  }

  // Initialize UI
  renderProducts(); // Render products on load
  updateCartUI();

  // Setup Listeners
  setupEventListeners();

  // Remove loading overlay (fast!)
  setTimeout(() => {
    try {
      const overlay = document.getElementById('loading-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s';
        setTimeout(() => {
          overlay.style.display = 'none';
          overlay.style.visibility = 'hidden';
        }, 300);
      } else {
        console.warn('Loading overlay element not found');
      }
    } catch (e) {
      console.error('Error hiding loading overlay:', e);
    }
  }, 100);
});

// ==========================================
// Rendering Components
// ==========================================

/**
 * Renders the product grid in the store section
 * Supports filtering by product category
 * 
 * @param {string} filter - Category filter ('all', 'guitars', 'keyboards', 'drums', 'accessories')
 */
function renderProducts(filter = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;
  container.innerHTML = '';

  // Filter products by category
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  filteredProducts.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Staggered animation for product cards
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.4s ease forwards ${index * 0.05}s`;

    card.innerHTML = `
      <div class="product-image">
        <img loading="lazy" src="${product.image}" alt="${product.title}" loading="lazy">
        <div class="product-overlay">
          <button type="button" class="btn-icon" onclick="addToCart('${product.id}')" title="Add to Cart">
            <i class="ri-shopping-cart-2-line"></i>
          </button>
          <button type="button" class="btn-icon" onclick="openQuickView('${product.id}')" title="Quick View">
            <i class="ri-eye-line"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-rating">
          ${getStarRating(product.rating)}
        </div>
        <div class="product-price">$${product.price}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Generates star rating HTML based on numeric rating
 * Supports full stars, half stars, and empty stars
 * 
 * @param {number} rating - Rating value (0-5)
 * @returns {string} HTML string with star icons
 */
function getStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="ri-star-fill" style="color: #fca311; font-size: 0.8rem"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="ri-star-half-fill" style="color: #fca311; font-size: 0.8rem"></i>';
    } else {
      stars += '<i class="ri-star-line" style="color: #666; font-size: 0.8rem"></i>';
    }
  }
  return stars;
}

// ==========================================
// Event Listeners Setup
// ==========================================

function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      // Remove active class from all
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      // Add to current
      this.classList.add('active');
    });
  });

  // NavBar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Nav Toggle
  document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
  });

  // Store Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.dataset.filter;

      // Update UI
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter products
      renderProducts(filter);
    });
  });

  // Cart Toggle
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', toggleCart);

  const closeCartBtn = document.getElementById('close-cart');
  if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);

  // Checkout Button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);

  // Close Modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    });
  });

  // Newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        showNotification('Thanks for subscribing!', 'success');
        newsletterForm.reset();
      }
    });
  }
}

// ==========================================
// Shopping Cart
// ==========================================
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = appState.cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
    showNotification('Quantity updated!', 'info');
  } else {
    appState.cart.push({ ...product, quantity: 1 });
    showNotification(`${product.title} added to cart!`, 'success');
  }

  updateCartUI();
  saveStateToStorage();
}

function removeFromCart(id) {
  appState.cart = appState.cart.filter(item => item.id !== id);
  updateCartUI();
  saveStateToStorage();
}

function updateCartUI() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  container.innerHTML = '';

  let total = 0;
  let count = 0;

  appState.cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img loading="lazy" src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <div class="cart-item-price">$${item.price.toLocaleString()} x ${item.quantity}</div>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.id}')">
        <i class="ri-close-line"></i>
      </button>
    `;
    container.appendChild(cartItem);
  });

  // Update Total
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);

  // Update Badge
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  if (panel.classList.contains('panel-open')) {
    panel.classList.remove('panel-open');
  } else {
    panel.classList.add('panel-open');
  }
}

// ==========================================
// Modals & View
// ==========================================

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('qv-image').src = product.image;
  document.getElementById('qv-category').textContent = product.category;
  document.getElementById('qv-title').textContent = product.title;
  document.getElementById('qv-rating').innerHTML = getStarRating(product.rating);
  document.getElementById('qv-description').textContent = product.description;
  document.getElementById('qv-price').textContent = `$${product.price}`;

  // Update button to add specific product
  const btn = document.getElementById('qv-add-btn');
  btn.onclick = () => {
    addToCart(productId);
    document.getElementById('quick-view-modal').classList.remove('active');
    setTimeout(() => {
      document.getElementById('quick-view-modal').style.display = 'none';
    }, 300);
  };

  const modal = document.getElementById('quick-view-modal');
  modal.style.display = 'flex';
  // Small delay to allow display:flex to apply before opacity transition
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

function openCheckout() {
  toggleCart(); // Close cart
  const modal = document.getElementById('checkout-modal');

  // Update summary
  let count = 0;
  let total = 0;
  appState.cart.forEach(item => {
    count += item.quantity;
    total += item.price * item.quantity;
  });

  document.getElementById('checkout-count').textContent = count;
  document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);

  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

window.processPayment = function () {
  const modal = document.getElementById('checkout-modal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);

  // Show processing (simulated)
  const overlay = document.getElementById('loading-overlay');
  overlay.style.display = 'flex';
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';

  setTimeout(() => {
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';

    // Show success
    const successOverlay = document.getElementById('success-overlay');
    successOverlay.style.display = 'flex';
    setTimeout(() => successOverlay.classList.add('active'), 10);

    // Clear cart
    appState.cart = [];
    updateCartUI();
    saveStateToStorage();
  }, 1500);
};

window.closeSuccess = function () {
  const overlay = document.getElementById('success-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
};


// ==========================================
// Notifications & Utils
// ==========================================
function showNotification(message, type = 'info') {
  const container = document.getElementById('notifications');
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <i class="ri-close-line" style="cursor: pointer;" onclick="this.parentElement.remove()"></i>
  `;

  container.appendChild(notification);

  // Auto remove
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function saveStateToStorage() {
  localStorage.setItem('cart', JSON.stringify(appState.cart));
}
