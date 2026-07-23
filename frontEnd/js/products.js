let cart = [];

const productsData = [
    { id: 'milk_a2_1l', name: 'A2 Cow Milk', price: 85, category: 'milk' },
    { id: 'ghee_desi_500g', name: 'Pure Desi Ghee', price: 650, category: 'ghee' },
    { id: 'paneer_fresh_400g', name: 'Fresh Paneer', price: 180, category: 'paneer' },
    { id: 'curd_fresh_500ml', name: 'Fresh Curd (Dahi)', price: 60, category: 'curd' },
    { id: 'butter_makkhan_500g', name: 'Makkhan (Butter)', price: 160, category: 'butter' },
    { id: 'cheese_art_200g', name: 'Artisanal Cheese', price: 280, category: 'cheese' },
    { id: 'chaas_buttermilk_500ml', name: 'Buttermilk (Chaas)', price: 40, category: 'buttermilk' }
];

document.addEventListener('DOMContentLoaded', () => {
    setupAddToCartListeners();
});

function filterCategory(category) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            card.style.display = 'block';
        } else {
            card.classList.add('hidden');
            setTimeout(() => {
                if (card.classList.contains('hidden')) {
                    card.style.display = 'none';
                }
            }, 300);
        }
    });
}

function setupAddToCartListeners() {
    const grid = document.getElementById('productGrid');
    
    grid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const card = e.target.closest('.product-card');
            const productTitle = card.querySelector('h3').innerText.trim();
            const productInfo = productsData.find(p => p.name === productTitle);
            
            if (productInfo) {
                addToCart(productInfo);
                
                const originalText = e.target.innerText;
                e.target.innerText = 'Added! ✓';
                e.target.style.backgroundColor = '#2a9d8f';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = '#2a9d8f';
                
                setTimeout(() => {
                    e.target.innerText = originalText;
                    e.target.style.backgroundColor = '';
                    e.target.style.color = '';
                    e.target.style.borderColor = '';
                }, 900);
            }
        }
    });
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
    
    console.log(`Cart: ${totalItems} items. Total: ₹${totalPrice}`);
}
