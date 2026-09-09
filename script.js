/* ==========================================================================
   TEA TIME CAFE & LOUNGE - JAVASCRIPT LOGIC
   Hero Slider, Dynamic Product Filtering, Shopping Basket & Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. MENU PRODUCTS DATA ARRAY (Teas, Coffees & 4 Snacks)
       -------------------------------------------------------------------------- */
    const productsData = [
        // --- TEAS ---
        {
            id: 'tea-1',
            title: 'Royal Masala Chai',
            category: 'tea',
            categoryName: 'Artisanal Tea',
            badge: 'Bestseller',
            price: 5.50,
            rating: 4.9,
            reviews: 142,
            image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
            description: 'Traditional slow-brewed black tea infused with fresh cardamom, cinnamon sticks, star anise, crushed ginger, and whole milk.',
            ingredients: ['Assam Black Tea', 'Fresh Ginger', 'Cardamom Pods', 'Whole Milk', 'Raw Honey']
        },
        {
            id: 'tea-2',
            title: 'Ceremonial Matcha Latte',
            category: 'tea',
            categoryName: 'Artisanal Tea',
            badge: 'Organic',
            price: 6.25,
            rating: 4.95,
            reviews: 98,
            image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
            description: 'First-harvest Uji Japanese green tea whisked meticulously and finished with steamed oat milk and microfoam art.',
            ingredients: ['Grade A Uji Matcha', 'Steamed Oat Milk', 'Agave Nectar']
        },
        {
            id: 'tea-3',
            title: 'Imperial Earl Grey Lavender',
            category: 'tea',
            categoryName: 'Artisanal Tea',
            badge: 'Signature',
            price: 5.75,
            rating: 4.8,
            reviews: 76,
            image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
            description: 'Single-origin Ceylon black tea scented with cold-pressed Italian bergamot oil and organic French lavender buds.',
            ingredients: ['Ceylon Black Tea', 'Bergamot Essence', 'French Lavender']
        },
        {
            id: 'tea-4',
            title: 'Jasmine Dragon Pearl',
            category: 'tea',
            categoryName: 'Artisanal Tea',
            badge: 'Floral Blend',
            price: 6.50,
            rating: 4.85,
            reviews: 54,
            image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=80',
            description: 'Hand-rolled green tea pearls naturally scented five times with fresh night-blooming jasmine blossoms.',
            ingredients: ['Hand-rolled Green Tea', 'Night-blooming Jasmine']
        },

        // --- COFFEES ---
        {
            id: 'coffee-1',
            title: 'Artisan Espresso Roast',
            category: 'coffee',
            categoryName: 'Coffee Bar',
            badge: 'Double Shot',
            price: 4.25,
            rating: 4.9,
            reviews: 110,
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
            description: 'Intense double shot extracted from roasted Arabica beans with notes of dark Belgian chocolate and roasted hazelnuts.',
            ingredients: ['100% Arabica Beans', 'Filtered Water']
        },
        {
            id: 'coffee-2',
            title: 'Creamy Cappuccino',
            category: 'coffee',
            categoryName: 'Coffee Bar',
            badge: 'Classic',
            price: 5.25,
            rating: 4.85,
            reviews: 88,
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
            description: 'Balanced 1:1:1 ratio of espresso, silky steamed milk, and velvety milk foam topped with cocoa powder dusting.',
            ingredients: ['Espresso Roast', 'Whole Milk Foam', 'Valrhona Cocoa Powder']
        },
        {
            id: 'coffee-3',
            title: 'Velvet Caramel Macchiato',
            category: 'coffee',
            categoryName: 'Coffee Bar',
            badge: 'Hot Seller',
            price: 5.95,
            rating: 4.92,
            reviews: 165,
            image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80',
            description: 'Fresh steamed milk layered with rich espresso, Madagascar vanilla syrup, and house-made buttery caramel drizzle.',
            ingredients: ['Espresso', 'Vanilla Syrup', 'Steamed Milk', 'Caramel Drizzle']
        },

        // --- 4 SNACKS (Explicit Requirement) ---
        {
            id: 'snack-1',
            title: 'French Butter Croissant',
            category: 'snack',
            categoryName: 'Fresh Snack',
            badge: 'Pastry 01',
            price: 4.50,
            rating: 4.95,
            reviews: 210,
            image: 'images/snack_croissant.png',
            description: 'Authentic 27-layer flaky French croissant baked daily using pure AOP Normandy butter. Crispy outside, soft inside.',
            ingredients: ['French Wheat Flour', 'Normandy Butter', 'Yeast', 'Sea Salt']
        },
        {
            id: 'snack-2',
            title: 'English Scones Set',
            category: 'snack',
            categoryName: 'Fresh Snack',
            badge: 'Pastry 02',
            price: 5.25,
            rating: 4.9,
            reviews: 185,
            image: 'images/snack_scones.png',
            description: 'Two warm golden oven-baked scones accompanied by thick Devonshire clotted cream and organic wild strawberry preserves.',
            ingredients: ['Flour', 'Butter', 'Devonshire Clotted Cream', 'Strawberry Jam']
        },
        {
            id: 'snack-3',
            title: 'Parisian Macaron Assortment',
            category: 'snack',
            categoryName: 'Fresh Snack',
            badge: 'Pastry 03',
            price: 6.75,
            rating: 4.88,
            reviews: 140,
            image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
            description: 'Box of 4 delicate French almond macarons featuring Pistachio, Lemon, Salted Caramel, and Raspberry velvet filling.',
            ingredients: ['Almond Flour', 'Egg Whites', 'Ganache Fillings', 'Natural Colorings']
        },
        {
            id: 'snack-4',
            title: 'Tuscan Almond Biscotti',
            category: 'snack',
            categoryName: 'Fresh Snack',
            badge: 'Pastry 04',
            price: 3.95,
            rating: 4.82,
            reviews: 92,
            image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
            description: 'Twice-baked crunchy Italian biscuits studded with whole Mediterranean roasted almonds and citrus orange zest.',
            ingredients: ['Roasted Almonds', 'Flour', 'Vanilla Bean', 'Orange Zest']
        }
    ];

    /* --------------------------------------------------------------------------
       2. HERO SLIDER CONTROLLER (4 Slides Full Fitting)
       -------------------------------------------------------------------------- */
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const sliderContainer = document.getElementById('heroSlider');
    
    let currentSlide = 0;
    let slideInterval = null;
    const autoSlideDelay = 4500; // 4.5s

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = index;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(nextSlide, autoSlideDelay);
    }

    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    // Slider Event Listeners
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoSlide();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startAutoSlide();
        });
    });

    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);

        // Touch Swipe Support
        let startX = 0;
        let endX = 0;

        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                nextSlide();
                startAutoSlide();
            } else if (endX - startX > 50) {
                prevSlide();
                startAutoSlide();
            }
        }, { passive: true });
    }

    startAutoSlide();

    /* --------------------------------------------------------------------------
       3. RENDER PRODUCTS & FILTERING
       -------------------------------------------------------------------------- */
    const productsGrid = document.getElementById('productsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    function renderProducts(items) {
        if (!productsGrid) return;

        if (items.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
                    <i class="fa-solid fa-mug-hot" style="font-size: 3rem; color: var(--primary-gold); margin-bottom: 1rem;"></i>
                    <h3 style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--bg-dark-base);">No Menu Items Found</h3>
                    <p style="color: var(--text-muted);">Try searching for another keyword or change your filter category.</p>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = items.map(item => {
            const badgeClass = item.category === 'tea' ? 'badge-tea' : (item.category === 'coffee' ? 'badge-coffee' : 'badge-snack');
            return `
                <div class="product-card" data-category="${item.category}">
                    <div class="card-img-wrapper">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                        <span class="card-badge ${badgeClass}">${item.badge}</span>
                        <button class="quick-view-btn" data-id="${item.id}" title="Quick View">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="card-rating">
                            <i class="fa-solid fa-star"></i>
                            <strong>${item.rating}</strong>
                            <span>(${item.reviews} reviews)</span>
                        </div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.description}</p>
                        <div class="card-footer">
                            <span class="card-price">$${item.price.toFixed(2)}</span>
                            <button class="add-cart-btn" data-id="${item.id}" title="Add to Basket">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Re-attach button listeners
        attachCardListeners();
    }

    // Filter Category Handler
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                renderProducts(productsData);
            } else {
                const filtered = productsData.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });

    // Search Input Handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');

            const filtered = productsData.filter(product => {
                const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
                const matchesQuery = product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
                return matchesCategory && matchesQuery;
            });

            renderProducts(filtered);
        });
    }

    renderProducts(productsData);

    /* --------------------------------------------------------------------------
       4. QUICK VIEW MODAL
       -------------------------------------------------------------------------- */
    const modal = document.getElementById('quickViewModal');
    const modalContent = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    function openQuickView(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product || !modal || !modalContent) return;

        modalContent.innerHTML = `
            <div class="modal-img-col">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="modal-info-col">
                <span style="color: var(--primary-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">
                    <i class="fa-solid fa-tag"></i> ${product.categoryName}
                </span>
                <h2 style="font-family: var(--font-heading); font-size: 2rem; margin: 0.4rem 0 0.8rem 0;">${product.title}</h2>
                <div class="card-rating" style="margin-bottom: 1rem;">
                    <i class="fa-solid fa-star"></i> <strong>${product.rating}</strong> <span>(${product.reviews} customer reviews)</span>
                </div>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.2rem;">${product.description}</p>

                <div style="margin-bottom: 1.5rem;">
                    <strong style="display: block; font-size: 0.85rem; margin-bottom: 0.4rem; color: var(--bg-dark-base);">Key Ingredients / Notes:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
                        ${product.ingredients.map(ing => `
                            <span style="background: var(--bg-cream-alt); padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.8rem; color: var(--text-primary);">${ing}</span>
                        `).join('')}
                    </div>
                </div>

                <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid rgba(0,0,0,0.08);">
                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--bg-dark-base);">$${product.price.toFixed(2)}</span>
                    <button class="btn btn-primary modal-add-cart-btn" data-id="${product.id}">
                        <i class="fa-solid fa-basket-shopping"></i> Add to Basket
                    </button>
                </div>
            </div>
        `;

        modal.classList.add('active');

        // Modal Inner Add to Cart Button Listener
        const modalAddBtn = modalContent.querySelector('.modal-add-cart-btn');
        if (modalAddBtn) {
            modalAddBtn.addEventListener('click', () => {
                addToCart(product.id);
                modal.classList.remove('active');
            });
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    /* --------------------------------------------------------------------------
       5. SHOPPING BASKET / CART STATE
       -------------------------------------------------------------------------- */
    let cart = [];

    const cartBtn = document.getElementById('cartBtn');
    const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartBadge = document.getElementById('cartBadge');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartTaxEl = document.getElementById('cartTax');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    function addToCart(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartUI();
        showToast(`Added <strong>${product.title}</strong> to your tea basket!`);
    }

    function updateQuantity(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
        }
        updateCartUI();
    }

    function updateCartUI() {
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartBadge) cartBadge.textContent = totalItemsCount;

        if (!cartItemsList) return;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p class="empty-cart-msg">Your tea basket is currently empty.</p>`;
            cartSubtotalEl.textContent = '$0.00';
            cartTaxEl.textContent = '$0.00';
            cartTotalEl.textContent = '$0.00';
            return;
        }

        let subtotal = 0;
        cartItemsList.innerHTML = cart.map(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn minus-btn" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn plus-btn" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const tax = subtotal * 0.08;
        const total = subtotal + tax;

        if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (cartTaxEl) cartTaxEl.textContent = `$${tax.toFixed(2)}`;
        if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;

        // Attach Qty Button Event Listeners
        cartItemsList.querySelectorAll('.minus-btn').forEach(b => {
            b.addEventListener('click', () => updateQuantity(b.getAttribute('data-id'), -1));
        });
        cartItemsList.querySelectorAll('.plus-btn').forEach(b => {
            b.addEventListener('click', () => updateQuantity(b.getAttribute('data-id'), 1));
        });
    }

    function attachCardListeners() {
        document.querySelectorAll('.add-cart-btn, .quick-add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                addToCart(id);
            });
        });

        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                openQuickView(id);
            });
        });
    }

    // Toggle Cart Drawer
    if (cartBtn && cartDrawerBackdrop && closeCartBtn) {
        cartBtn.addEventListener('click', () => cartDrawerBackdrop.classList.add('active'));
        closeCartBtn.addEventListener('click', () => cartDrawerBackdrop.classList.remove('active'));
        cartDrawerBackdrop.addEventListener('click', (e) => {
            if (e.target === cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('active');
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your basket is empty! Add some teas or snacks first.');
            } else {
                showToast('Thank you! Your order has been placed successfully. 🫖');
                cart = [];
                updateCartUI();
                if (cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('active');
            }
        });
    }

    /* --------------------------------------------------------------------------
       6. TOAST NOTIFICATIONS & MOBILE NAV
       -------------------------------------------------------------------------- */
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close nav when link clicked
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileToggle.querySelector('i')) {
                    mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
                }
            });
        });
    }

    // Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Welcome to the Tea Time Club! Check your inbox for your 15% voucher.');
            newsletterForm.reset();
        });
    }
});
