```javascript
// SAVAT

let cart = [];

const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");


// Savatga mahsulot qo‘shish

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const productName = button.dataset.product;

        cart.push(productName);

        updateCart();

    });

});


// Savatni yangilash

function updateCart() {

    cartCount.textContent = cart.length;
    cartTotal.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Savatingiz hozircha bo‘sh.</p>';

        return;
    }

    cartItems.innerHTML = "";

    cart.forEach((product, index) => {

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <strong>${product}</strong>
            <br>
            <button onclick="removeFromCart(${index})">
                O‘chirish
            </button>
        `;

        cartItems.appendChild(item);

    });
}


// Savatdan o‘chirish

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// SAVATNI OCHISH

document.getElementById("cartButton").addEventListener("click", () => {

    cartPanel.classList.add("open");

});


// SAVATNI YOPISH

document.getElementById("closeCart").addEventListener("click", () => {

    cartPanel.classList.remove("open");

});


// SEVIMLILAR

document.querySelectorAll(".favorite").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }

    });

});


// QIDIRUV

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase().trim();

    document.querySelectorAll(".product-card").forEach(card => {

        const productName =
            card.dataset.name.toLowerCase();

        if (productName.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});
```
