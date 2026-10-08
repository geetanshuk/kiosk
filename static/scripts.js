const button = document.getElementById("add-cart");
const cartCount = document.querySelector(".cart-count");


function getCart() {
    let savedCart = localStorage.getItem("cart")
    if (!savedCart) {
        const newData = {
            items: [],
            expires: Date.now() + 10000
        }
        localStorage.setItem("cart", JSON.stringify(newData))
        return newData
    }
    const data = JSON.parse(savedCart)
    if (Date.now() > data.expires) {
        const newData = {
            items: [],
            expires: Date.now() + 10000
        }
        localStorage.setItem("cart", JSON.stringify(newData))
        return newData
    }
    return data;
}

if (button) {
    button.addEventListener("click", function() {
        let quantity = Number(document.getElementById("quantity").value);
        console.log(quantity)

        const cart = getCart();
        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const img = button.dataset.img;

        const item = {
            name: name,
            price: price,
            img: img,
            id: crypto.randomUUID(),
            quantity: quantity
        };

        for (let i = 0; i < cart.items.length; i++) {
            if (cart.items[i].name == item.name) {
                const id = cart.items[i].id
                const itemQuantity = cart.items[i].quantity
                cart.items = cart.items.filter(item => item.id !== id);
                item.quantity = quantity + itemQuantity
            }
        }

        cart.items.push(item);

        localStorage.setItem("cart", JSON.stringify({
            items: cart.items,
            expires: cart.expires
        }));

        alert("Added to cart!")
        
        let totalItems = 0
        

        for (let i = 0; i < cart.items.length; i++) {
            totalItems += cart.items[i].quantity
        }

        console.log(cartCount)
        
        if (cartCount) {
            cartCount.innerHTML = totalItems;
            cartCount.style.display = "inline-flex";
            cartCount.classList.remove("hidden");
        }

    });

}
