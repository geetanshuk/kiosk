const button = document.getElementById("add-cart");

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

    const cart = getCart();
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const img = button.dataset.img;

    const item = {
        name: name,
        price: price,
        img: img
    };

    cart.items.push(item);

    localStorage.setItem("cart", JSON.stringify({
        items: cart.items,
        expires: cart.expires
    }));

    console.log(cart);
});

}
