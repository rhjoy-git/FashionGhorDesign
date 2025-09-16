// Banner Swiper
const heroSlider = new Swiper('.heroSlider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cart-btn[data-in-cart="true"]').forEach(btn => {
        renderCartButton(btn);
    });
    const notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
        console.warn('No #notification-container found for notifications.');
        return;
    }

    // helper: sanitize text (avoid HTML injection)
    function escapeHtml(unsafe) {
        return String(unsafe)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // helper: small icon set
    function iconFor(type) {
        if (type === 'success') {
            return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>`;
        }
        if (type === 'error') {
            return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>`;
        }
        if (type === 'warning') {
            return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
              </svg>`;
        }
        // info / default
        return `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"></path>
            </svg>`;
    }

    // Public: showNotification(message, type = 'info', {duration})
    window.showNotification = function (message, type = 'info', opts = {}) {
        const duration = typeof opts.duration === 'number' ? opts.duration : 3000; // default 3s
        const id = `notif-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const colorClass =
            type === 'success' ? 'bg-green-500' :
                type === 'error' ? 'bg-red-500' :
                    type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500';

        const wrapper = document.createElement('div');
        wrapper.id = id;
        wrapper.className = `notification ${colorClass} text-white p-3 rounded-lg shadow-lg flex items-start justify-between`;
        wrapper.style.maxWidth = '22rem';         // keep width manageable
        wrapper.innerHTML = `
                                <div class="flex items-center gap-3">
                                    <div class="flex-shrink-0">${iconFor(type)}</div>
                                    <div class="text-sm pr-2">${escapeHtml(message)}</div>
                                </div>
                                <button type="button" aria-label="Close notification" class="close-btn ml-3 p-1 rounded hover:bg-white/10">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                                `;

        notificationContainer.appendChild(wrapper);

        // show with animation on next frame
        requestAnimationFrame(() => wrapper.classList.add('show'));

        // close handler
        wrapper.querySelector('.close-btn').addEventListener('click', () => closeNotification(id));

        // pause auto-close while hovering
        let autoCloseTimer = setTimeout(() => closeNotification(id), duration);
        wrapper.addEventListener('mouseenter', () => {
            clearTimeout(autoCloseTimer);
        });
        wrapper.addEventListener('mouseleave', () => {
            autoCloseTimer = setTimeout(() => closeNotification(id), 1200);
        });

        return id;
    };

    // Public: closeNotification(id)
    window.closeNotification = function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        // animate out
        el.classList.remove('show');
        el.classList.add('hide');
        // remove from DOM after transition
        setTimeout(() => {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 320);
    };


    // Renfering Customer cart items   
    renderCart();
    var cartNumElements = document.querySelectorAll('.cartNum');
    var cartItemsNumber = document.querySelectorAll('.cartItem').length;
    cartItemsNumber ? numberOfCartItems(cartItemsNumber) : numberOfCartItems(0);
    function numberOfCartItems(itemNumber) {
        if (itemNumber >= 0) {
            cartNumElements.forEach(el => {
                el.textContent = itemNumber;
            });
        }
    }
});

const openSearchButtons = document.querySelectorAll('.openSearch');
const overlay = document.getElementById("searchOverlay");
openSearchButtons.forEach(openBtn => {
    openBtn.addEventListener("click", () => {
        overlay.classList.remove("hidden");
    });
})
// click on overlay background close
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.add("hidden");
    }
});

// click on close button close
document.getElementById('closeSerachOverlay').addEventListener("click", () => {
    overlay.classList.add("hidden");
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");

function openMenu() {
    mobileMenu.classList.remove("-translate-x-full");
    menuOverlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
}

function closeMenu() {
    mobileMenu.classList.add("-translate-x-full");
    menuOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
}

menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("-translate-x-full")) {
        openMenu();
    } else {
        closeMenu();
    }
});

// Close if clicked outside (overlay)
menuOverlay.addEventListener("click", closeMenu);

// Cart button logic
document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.inCart !== "true") {
            btn.dataset.inCart = "true";
            btn.dataset.qty = "1";
            renderCartButton(btn);
            // Show notification
            const productName = btn.closest('.bg-white').querySelector('a.text-sm').textContent.trim();
            showNotification(`Added "${productName}" to cart`, 'success');
            cartValue += 1;
            cartNumber.forEach(el => {
                el.textContent = cartValue;
            });
        }   
    });
});

function renderCartButton(btn) {
    const qty = parseInt(btn.dataset.qty, 10);

    // Keep button consistent size
    btn.className =
        "add-to-cart cart-btn mt-auto w-full bg-green-600 text-white h-9 font-medium rounded-md flex items-center justify-between";

    btn.innerHTML = `
    <button class="decrease bg-green-700 hover:bg-green-800 w-7 h-9 flex items-center justify-center text-xl rounded-md">−</button>
    
    <span class="flex items-center gap-2 text-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
      </svg>
      ${qty} item${qty > 1 ? 's' : ''} in cart
    </span>
    
    <button class="increase bg-green-700 hover:bg-green-800 w-7 h-9 flex items-center justify-center text-xl rounded-md">+</button>
  `;

    btn.querySelector('.decrease').addEventListener('click', (e) => {
        e.stopPropagation();
        if (qty > 1) {
            btn.dataset.qty = qty - 1;
            renderCartButton(btn);
        } else {
            resetCartButton(btn);
        }
    });

    btn.querySelector('.increase').addEventListener('click', (e) => {
        e.stopPropagation();
        btn.dataset.qty = qty + 1;
        renderCartButton(btn);
    });
}

function resetCartButton(btn) {
    btn.dataset.inCart = "false";
    btn.className = "add-to-cart cart-btn bg-primary text-white text-sm font-medium py-2 px-4 rounded hover:opacity-90";
    btn.textContent = "Add to Cart";

    // Show notification
    showNotification(`Product Remove from Cart`, 'warning');    
}


// Dummy Products
const products = [{
    id: 1,
    name: "USDA Organic Beetroot...",
    price: 25.00,
    image: "assets/pro2.png",
    qty: 1
},
{
    id: 2,
    name: "Natural Honey Glass Jar",
    price: 20.00,
    image: "assets/pro1.png",
    qty: 2
},
];

const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartBtns = document.querySelectorAll('.cartBtn');

cartBtns.forEach(cartBtn => {
    cartBtn.addEventListener('click', () => {
        cartDrawer.classList.remove("translate-x-full");
    })
})

// Drawer Open
document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        renderCart();
        cartDrawer.classList.remove("translate-x-full");
        showNotification("Product Added to Cart Successfully", 'success');
        // console.log(cartItemsNumber);
    });
});

// Drawer Close
closeCart.addEventListener("click", () => {
    cartDrawer.classList.add("translate-x-full");
});

// Render Cart Items
function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    products.forEach((p, index) => {
        total += p.price * p.qty;
        const item = document.createElement("div");
        item.className = "cartItem flex items-center space-x-3 border-b pb-3";

        item.innerHTML = `
                                <img src="${p.image}" class="w-16 h-16 object-cover rounded">
                                <div class="flex-1">
                                <h4 class="text-sm font-medium truncate">${p.name}</h4>
                                <p class="text-gray-600 text-sm">$${p.price.toFixed(2)}</p>
                                <div class="flex items-center mt-1">
                                    <button class="decrease px-2 border">-</button>
                                    <span class="px-3">${p.qty}</span>
                                    <button class="increase px-2 border">+</button>
                                </div>
                                </div>
                                <button class="remove text-red-500">✕</button>
                            `;
        // Qty Increase
        item.querySelector(".increase").addEventListener("click", () => {
            p.qty++;
            renderCart();
        });

        // Qty Decrease
        item.querySelector(".decrease").addEventListener("click", () => {
            if (p.qty > 1) p.qty--;
            renderCart();
        });

        // Remove Item
        item.querySelector(".remove").addEventListener("click", () => {
            products.splice(index, 1);
            renderCart();
        });

        cartItems.appendChild(item);
    });

    cartTotal.textContent = total.toFixed(2);
}

