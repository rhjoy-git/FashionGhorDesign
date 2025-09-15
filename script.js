// Banner Swiper
const bannerSwiper = new Swiper('.bannerSwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

// Testimonial Swiper
const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        }, // sm
        1024: {
            slidesPerView: 4
        } // lg
    },
    loop: true,
    pagination: false, // dots off

});

// Feature Poducts Swiper
const featureProductsSwiper = new Swiper(".featureProducts", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 15 }, // sm
        768: { slidesPerView: 3, spaceBetween: 20 }, // md
        1024: { slidesPerView: 5, spaceBetween: 20 } // lg
    },
    loop: true,
    pagination: false, // dots off

});

// trending Products Swiper
const trendingProducts = new Swiper(".trendingProducts", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 15 }, // sm
        768: { slidesPerView: 3, spaceBetween: 20 }, // md
        1024: { slidesPerView: 5, spaceBetween: 20 } // lg
    },
    loop: true,
    pagination: false, // dots off

});


const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

const filterBtn = document.getElementById('filterBtn');
const mobileFilter = document.getElementById('mobileFilter');
const closeFilter = document.getElementById('closeFilter');

const overlay = document.getElementById('overlay');

// -------------------- Open --------------------
menuBtn?.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

filterBtn?.addEventListener('click', () => {
    mobileFilter.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

// -------------------- Close Function --------------------
const closeAll = () => {
    sidebar?.classList.add('-translate-x-full');
    mobileFilter?.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
};

closeBtn?.addEventListener('click', closeAll);
closeFilter?.addEventListener('click', closeAll);
overlay?.addEventListener('click', closeAll);


// Accordion style submenu toggle
document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;

        if (submenu.classList.contains('max-h-96')) {
            submenu.classList.remove('max-h-96');
            submenu.classList.add('max-h-0');
            btn.querySelector('svg').classList.remove('rotate-180');
            return;
        }

        const parentNav = btn.closest('nav, .submenu');
        parentNav.querySelectorAll('.submenu').forEach(sm => {
            if (sm !== submenu) {
                sm.classList.remove('max-h-96');
                sm.classList.add('max-h-0');
                sm.previousElementSibling?.querySelector('svg')?.classList.remove('rotate-180');
            }
        });

        submenu.classList.remove('max-h-0');
        submenu.classList.add('max-h-96');
        btn.querySelector('svg').classList.add('rotate-180');
    });
});

// Dummy Data with productId
const products = [
    {
        productId: 1,
        title: "iPhone 15 Pro Max",
        shortDetails: "The latest smartphone with a powerful A17 Bionic chip and a pro-level camera system.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 2,
        title: "Samsung Galaxy S23",
        shortDetails: "A flagship Android phone known for its vibrant display and versatile camera.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 3,
        title: "Sony Headphones",
        shortDetails: "High-quality headphones offering industry-leading noise cancellation and superb audio.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 4,
        title: "Dell XPS Laptop",
        shortDetails: "A powerful and sleek laptop perfect for productivity and creative tasks.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 5,
        title: "Nike Air Max Shoes",
        shortDetails: "Comfortable and stylish athletic shoes with iconic Air Max cushioning.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 6,
        title: "Apple Watch Series 9",
        shortDetails: "A top-tier smartwatch for health tracking, notifications, and more.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 7,
        title: "Google Pixel 8 Pro",
        shortDetails: "A smartphone with a fantastic camera and seamless integration with Google services.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 8,
        title: "Microsoft Surface Laptop",
        shortDetails: "A lightweight and elegant laptop designed for everyday use and portability.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 9,
        title: "Bose QuietComfort Earbuds",
        shortDetails: "Compact earbuds delivering excellent sound and powerful noise cancellation.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 10,
        title: "iPad Air",
        shortDetails: "A versatile tablet perfect for work, school, and entertainment.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 11,
        title: "MacBook Air M2",
        shortDetails: "An ultra-thin and lightweight laptop with the powerful Apple M2 chip.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 12,
        title: "Canon EOS R5",
        shortDetails: "A professional-grade mirrorless camera for photography and filmmaking.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 13,
        title: "Dyson V11 Cordless Vacuum",
        shortDetails: "A powerful and convenient cordless vacuum for quick and easy cleaning.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 14,
        title: "Samsung 65-inch 4K TV",
        shortDetails: "A large-screen TV with stunning 4K resolution for an immersive viewing experience.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 15,
        title: "LG OLED C2 TV",
        shortDetails: "An OLED television with perfect blacks and infinite contrast.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 16,
        title: "Fitbit Sense 2",
        shortDetails: "A smartwatch focused on advanced health and wellness tracking.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 17,
        title: "GoPro HERO11 Black",
        shortDetails: "A durable action camera for capturing high-quality video in any environment.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 18,
        title: "Nintendo Switch OLED",
        shortDetails: "A portable gaming console with a vibrant OLED screen.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 19,
        title: "Sony PlayStation 5",
        shortDetails: "The next-generation gaming console with lightning-fast loading and immersive graphics.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 20,
        title: "Xbox Series X",
        shortDetails: "A powerful gaming console offering incredible performance and a vast game library.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 21,
        title: "Kindle Paperwhite",
        shortDetails: "A popular e-reader with a glare-free display and built-in adjustable light.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 22,
        title: "Anker PowerCore",
        shortDetails: "A portable power bank to keep your devices charged on the go.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 23,
        title: "JBL Flip 6 Speaker",
        shortDetails: "A compact and durable portable Bluetooth speaker with great sound.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 24,
        title: "Logitech MX Master 3S",
        shortDetails: "An advanced ergonomic mouse for enhanced productivity and comfort.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 25,
        title: "Apple AirTag",
        shortDetails: "A small device to help you keep track of your belongings.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 26,
        title: "Ring Video Doorbell",
        shortDetails: "A smart doorbell that lets you see, hear, and speak to visitors from anywhere.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 27,
        title: "Google Nest Hub",
        shortDetails: "A smart display that helps manage your smart home and provides quick information.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 28,
        title: "Arlo Pro 4 Camera",
        shortDetails: "A wire-free security camera with 2K HDR video.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 29,
        title: "Philips Hue Lightstrip",
        shortDetails: "A flexible smart light strip to add dynamic color to any room.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 30,
        title: "Roku Streaming Stick",
        shortDetails: "A simple device to stream movies and shows to your TV.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 31,
        title: "Samsung Bespoke Refrigerator",
        shortDetails: "A customizable refrigerator that blends style and function.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 32,
        title: "LG WashTower",
        shortDetails: "A sleek, single-unit washer and dryer for modern homes.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 33,
        title: "iRobot Roomba",
        shortDetails: "A robotic vacuum that cleans your floors automatically.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 34,
        title: "KitchenAid Mixer",
        shortDetails: "A classic stand mixer for baking and cooking enthusiasts.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 35,
        title: "Keurig K-Elite Coffee Maker",
        shortDetails: "A single-serve coffee maker for a quick and easy cup of coffee.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 36,
        title: "Vitamix Blender",
        shortDetails: "A high-performance blender for smoothies, soups, and more.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 37,
        title: "Le Creuset Dutch Oven",
        shortDetails: "A durable cast-iron pot for slow cooking and braising.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 38,
        title: "Ooni Koda Pizza Oven",
        shortDetails: "A portable pizza oven that cooks authentic Neapolitan-style pizza in minutes.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 39,
        title: "Hydro Flask Water Bottle",
        shortDetails: "A durable, insulated water bottle to keep drinks cold or hot.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 40,
        title: "Away Carry-On Luggage",
        shortDetails: "A lightweight and durable suitcase with smart features for travel.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 41,
        title: "Sonos Roam Speaker",
        shortDetails: "A compact smart speaker for portable listening at home or on the go.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 42,
        title: "DJI Mini 3 Pro Drone",
        shortDetails: "A compact drone with a professional-grade camera for aerial photography.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 43,
        title: "Garmin Fenix 7 Watch",
        shortDetails: "A rugged, high-end smartwatch for athletes and outdoor adventurers.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 44,
        title: "Peloton Bike+",
        shortDetails: "An interactive stationary bike for at-home cycling classes.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 45,
        title: "Ember Smart Mug",
        shortDetails: "A temperature-controlled mug to keep your drink warm.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 46,
        title: "Theragun Pro",
        shortDetails: "A professional-grade massage gun for deep muscle treatment.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 47,
        title: "Casper Original Mattress",
        shortDetails: "A supportive foam mattress designed for all-night comfort.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 48,
        title: "Tuft & Needle Pillow",
        shortDetails: "A comfortable and breathable pillow for a better night's sleep.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 49,
        title: "Parachute Waffle Robe",
        shortDetails: "A cozy and soft robe for luxurious comfort.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 50,
        title: "Brooklinen Core Sheets",
        shortDetails: "High-quality, durable sheets for a comfortable sleep.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 51,
        title: "Instant Pot Duo",
        shortDetails: "A multi-cooker that functions as a pressure cooker, slow cooker, and more.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 52,
        title: "Samsung Freestyle Projector",
        shortDetails: "A portable projector for an on-the-go cinematic experience.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 53,
        title: "Amazon Echo Dot",
        shortDetails: "A compact smart speaker with Alexa voice assistant.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 54,
        title: "Google Nest Thermostat",
        shortDetails: "A smart thermostat that helps you save energy and stay comfortable.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 55,
        title: "Wyze Cam v3",
        shortDetails: "An affordable security camera for indoor and outdoor use.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 56,
        title: "August Smart Lock",
        shortDetails: "A smart lock that allows you to control your door from your phone.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 57,
        title: "TP-Link Kasa Smart Plug",
        shortDetails: "A smart plug to control your home appliances remotely.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 58,
        title: "Eero Pro 6 Mesh Wi-Fi",
        shortDetails: "A mesh Wi-Fi system that provides fast and reliable internet coverage.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 59,
        title: "Nestle Nespresso Machine",
        shortDetails: "A coffee machine that makes espresso and coffee at the touch of a button.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 60,
        title: "Ninja Foodi Air Fryer",
        shortDetails: "A versatile kitchen appliance that air fries, roasts, bakes, and dehydrates.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 61,
        title: "All-Clad Cookware Set",
        shortDetails: "A set of durable stainless steel cookware for professional-level cooking.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 62,
        title: "Shun Classic Chef's Knife",
        shortDetails: "A high-quality Japanese chef's knife for precision cutting.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 63,
        title: "Weber Spirit Grill",
        shortDetails: "A reliable gas grill perfect for backyard barbecues.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 64,
        title: "Solo Stove Bonfire",
        shortDetails: "A portable, smokeless fire pit for outdoor gatherings.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 65,
        title: "Yeti Tundra Cooler",
        shortDetails: "A heavy-duty cooler that keeps ice for days.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 66,
        title: "Oculus Quest 2",
        shortDetails: "A standalone virtual reality headset for immersive gaming.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 67,
        title: "Sonos Arc Soundbar",
        shortDetails: "A premium soundbar that provides a powerful home theater experience.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 68,
        title: "Samsung The Frame TV",
        shortDetails: "A television that transforms into a piece of art when not in use.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 69,
        title: "Apple HomePod mini",
        shortDetails: "A small but mighty smart speaker with a rich 360-degree audio.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 70,
        title: "Google Chromecast",
        shortDetails: "A streaming device to cast content from your phone or laptop to your TV.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 71,
        title: "Razer Blade 15 Gaming Laptop",
        shortDetails: "A high-performance gaming laptop with a sleek design.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 72,
        title: "SteelSeries Arctis Headset",
        shortDetails: "A comfortable and lightweight gaming headset with clear audio.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 73,
        title: "Logitech G Pro Mouse",
        shortDetails: "A high-precision gaming mouse for competitive play.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 74,
        title: "Corsair K95 Keyboard",
        shortDetails: "A mechanical gaming keyboard with customizable backlighting.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 75,
        title: "Herman Miller Aeron Chair",
        shortDetails: "An iconic ergonomic office chair for superior comfort and support.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 76,
        title: "Lululemon Align Leggings",
        shortDetails: "Yoga leggings known for their buttery-soft feel and comfortable fit.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 77,
        title: "Allbirds Wool Runners",
        shortDetails: "Eco-friendly shoes made from merino wool for comfort and sustainability.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 78,
        title: "Ray-Ban Aviator Sunglasses",
        shortDetails: "A timeless classic of a sunglass design.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 79,
        title: "TUMI Alpha Luggage",
        shortDetails: "Premium luggage known for its durability and functional design.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 80,
        title: "Patagonia Better Sweater Fleece",
        shortDetails: "A warm and cozy fleece jacket perfect for layering.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 81,
        title: "Levi's 501 Jeans",
        shortDetails: "The original straight-fit jeans that have defined style for generations.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 82,
        title: "Columbia PFG Shirt",
        shortDetails: "A lightweight, breathable shirt designed for fishing and outdoor activities.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 83,
        title: "Adidas Ultraboost Shoes",
        shortDetails: "Running shoes offering a responsive and comfortable ride.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 84,
        title: "FitFlop Sandals",
        shortDetails: "Ergonomically designed sandals for comfortable walking.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 85,
        title: "Seiko Prospex Watch",
        shortDetails: "A durable and reliable watch for professional and recreational use.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 86,
        title: "Citizen Eco-Drive Watch",
        shortDetails: "A watch powered by any light, so it never needs a battery.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 87,
        title: "Garmin Approach S62 Watch",
        shortDetails: "A premium GPS golf watch with a vibrant display and advanced features.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 88,
        title: "Apple AirPods Max",
        shortDetails: "High-fidelity wireless headphones with a premium design and great sound.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 89,
        title: "Beats Studio Buds",
        shortDetails: "Compact, noise-canceling earbuds for on-the-go listening.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 90,
        title: "Sennheiser HD 660S Headphones",
        shortDetails: "Audiophile-grade open-back headphones for a natural and clear sound.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 91,
        title: "Shure SM7B Microphone",
        shortDetails: "A legendary microphone for broadcast, podcasting, and vocal recording.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 92,
        title: "Blue Yeti USB Microphone",
        shortDetails: "A popular and versatile USB microphone for podcasting, streaming, and music.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 93,
        title: "Elgato Stream Deck",
        shortDetails: "A customizable control panel for streamers and content creators.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 94,
        title: "Logitech C920 Webcam",
        shortDetails: "A reliable and popular webcam for video calls and streaming.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 95,
        title: "Fujifilm Instax Mini Camera",
        shortDetails: "An instant film camera that prints photos on the spot.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 96,
        title: "Epson EcoTank Printer",
        shortDetails: "A cartridge-free printer with high-capacity ink tanks.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 97,
        title: "Canon Pixma Printer",
        shortDetails: "A versatile all-in-one printer for home and office use.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 98,
        title: "Brother MFC Laser Printer",
        shortDetails: "A fast and efficient laser printer for sharp text documents.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 99,
        title: "Shark Robot Vacuum",
        shortDetails: "A robotic vacuum with powerful suction and self-cleaning capabilities.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 100,
        title: "Bissell CrossWave",
        shortDetails: "A multi-surface floor cleaner that vacuums and washes at the same time.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 101,
        title: "Dyson Air Purifier",
        shortDetails: "An air purifier that captures ultrafine particles and cools you with purified air.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 102,
        title: "Levoit Air Purifier",
        shortDetails: "An efficient air purifier with a three-stage filtration system.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 103,
        title: "Aura Air Purifier",
        shortDetails: "A smart air purifier with a state-of-the-art filtration system.",
        img: "asset/dummy-watch.png"
    },
    {
        productId: 104,
        title: "Thermos Insulated Bottle",
        shortDetails: "A vacuum-insulated bottle that keeps drinks hot or cold for hours.",
        img: "asset/dummy-watch.png"
    }
];

function setupSearch(inputId, boxId, listId) {
    const searchInput = document.getElementById(inputId);
    const suggestionsBox = document.getElementById(boxId);
    const suggestionsList = document.getElementById(listId);

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        suggestionsList.innerHTML = "";

        if (query) {
            const filtered = products.filter(p =>
                p.title.toLowerCase().includes(query)
            ).slice(0, 20);

            if (filtered.length > 0) {
                filtered.forEach(p => {
                    const li = document.createElement("li");
                    li.innerHTML = `
            <a href="/search?q=${p.productId}" class="flex items-center px-4 py-2 hover:bg-gray-100 rounded">
              <img src="${p.img}" alt="${p.title}" class="w-10 h-10 object-cover rounded-md mr-3">
              <h6 class="text-gray-700">${p.title} <span class="truncate text-sm italic" title="${p.shortDetails}">${p.shortDetails}</span></h6>
            </a>
          `;
                    suggestionsList.appendChild(li);
                });
                suggestionsBox.classList.remove("hidden");
                document.body.classList.add('overflow-hidden');
            } else {
                suggestionsBox.classList.add("hidden");
                document.body.classList.remove('overflow-hidden');
            }
        } else {
            suggestionsBox.classList.add("hidden");
            document.body.classList.remove('overflow-hidden');
        }
    });

    // Hide suggestions when clicked outside
    document.addEventListener("click", (e) => {
        if (
            !e.target.closest(`#${inputId}`) &&
            !e.target.closest(`#${boxId}`)
        ) {
            suggestionsBox.classList.add("hidden");
        }
    });
}

// Setup for both Desktop & Mobile
setupSearch("searchInputDesktop", "suggestionsBoxDesktop", "suggestionsListDesktop");
setupSearch("searchInputMobile", "suggestionsBoxMobile", "suggestionsListMobile");

// Customer Bag
var cartValue = 0;
var cartNumber = document.querySelectorAll('.cartNum');
function numberOfCartItems(itemNumber) {
    if (itemNumber >= 0) {
        cartNumber.forEach(el => {
            el.textContent = itemNumber;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cart-btn[data-in-cart="true"]').forEach(btn => {
        renderCartButton(btn);
        cartValue++;
    });
    cartValue += cartData.length;
    numberOfCartItems(cartValue);

    const container = document.getElementById('notification-container');
    if (!container) {
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

        container.appendChild(wrapper);

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

    // Initialize
    updateCart();
});

// Wishlist toggle
document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const fillPath = btn.querySelector('.fill-path');
        const outlinePath = btn.querySelector('.outline-path');
        const pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', !pressed);
        fillPath.classList.toggle('hidden');
        outlinePath.classList.toggle('hidden');
        btn.classList.toggle('text-red-500', !pressed);
        btn.classList.toggle('text-gray-400', pressed);
        if (pressed)
            showNotification('Product Remove from Wishlist', 'warning');
        else
            showNotification('Product Added to Wishlist', 'success');
    });
});

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
        "cart-btn mt-auto w-full bg-green-600 text-white h-10 font-medium rounded-b-md flex items-center justify-between";

    btn.innerHTML = `
    <button class="decrease bg-green-700 hover:bg-green-800 w-10 h-10 flex items-center justify-center text-xl rounded-bl-md">−</button>
    
    <span class="flex items-center gap-2 text-sm">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
      </svg>
      ${qty} item${qty > 1 ? 's' : ''} in cart
    </span>
    
    <button class="increase bg-green-700 hover:bg-green-800 w-10 h-10 flex items-center justify-center text-xl rounded-br-md">+</button>
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
    btn.className = "cart-btn mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 transition-colors duration-200 font-medium rounded-b-md";
    btn.textContent = "Add to Cart";

    // Show notification
    let productName = btn.closest('.bg-white').querySelector('a.text-sm').textContent.trim();
    showNotification(`Product "${productName}" Remove from Cart`, 'warning');

    cartValue--;
    numberOfCartItems(cartValue);
}

// ============== Customer Cart Drawer Part =============
const cartIcons = document.querySelectorAll('.cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartOverlay = document.getElementById('cartOverlay');

closeCart.addEventListener('click', closeDrawer);
cartOverlay.addEventListener('click', closeDrawer);

// --- Static cart data ---
let cartData = [
    { id: 1, name: "Oppo A3 6GB RAM", price: 1148, image: "asset/spro1.png", qty: 1 },
    { id: 2, name: "Oppo Reno14F 5G", price: 1350, image: "asset/spro2.png", qty: 2 },
    { id: 3, name: "Oppo Reno14F 5G", price: 1350, image: "asset/spro3.png", qty: 4 },
    { id: 4, name: "Oppo Reno14F 5G", price: 1350, image: "asset/spro4.png", qty: 1 },
    { id: 5, name: "Oppo Reno14F 5G", price: 1350, image: "asset/spro5.png", qty: 6 },
    { id: 6, name: "Oppo Reno14F 5G", price: 1350, image: "asset/spro6.png", qty: 7 },
];

// Open drawer
cartIcons.forEach(icon => {
    icon.addEventListener('click', toggleDrawer);
});

// Toggle drawer
function toggleDrawer() {
    const isOpen = !cartDrawer.classList.contains('translate-x-full');

    if (isOpen) {
        // Close
        cartDrawer.classList.add('translate-x-full');
        cartOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    } else {
        // Open
        cartDrawer.classList.remove('translate-x-full');
        cartOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
}

// Close drawer (X button or overlay click)
function closeDrawer() {
    cartDrawer.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Render a single cart item
function renderCartItem(product) {
    const div = document.createElement('div');
    div.className = "flex items-center justify-between border-b pb-2";

    div.innerHTML = `
      <div class="flex items-center space-x-3">
        <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded">
        <div>
          <p class="font-medium text-sm">${product.name}</p>
          <p class="text-gray-500 text-xs">Tk ${product.price}</p>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button class="decrease bg-gray-200 px-2 rounded">−</button>
        <span class="qty">${product.qty}</span>
        <button class="increase bg-gray-200 px-2 rounded">+</button>
        <button class="remove text-red-500 ml-2">✕</button>
      </div>
    `;

    // Events
    div.querySelector('.increase').addEventListener('click', () => {
        product.qty++;
        updateCart();
    });
    div.querySelector('.decrease').addEventListener('click', () => {
        if (product.qty > 1) {
            product.qty--;
        } else {
            cartData = cartData.filter(p => p.id !== product.id);
        }
        updateCart();
    });
    div.querySelector('.remove').addEventListener('click', () => {
        cartData = cartData.filter(p => p.id !== product.id);
        updateCart();
        cartValue--;
        numberOfCartItems(cartValue);
    });

    return div;
}

// Update cart drawer + badge
function updateCart() {
    cartItems.innerHTML = "";
    cartData.forEach(product => {
        cartItems.appendChild(renderCartItem(product));
    });
}

