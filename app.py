from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/burritos")
def burrito():
    return render_template("burritos.html")

@app.route("/cart")
def cart():
    return render_template("cart.html", cart = cart)

@app.route("/product/<item>")
def product(item):

    products = {
        "grilled-chicken-burrito": {
            "name": "Grilled Chicken Burrito",
            "price": 8.99,
            "description": "A warm tortilla filled with seasoned chicken, rice, beans, cheese, lettuce, and salsa.",
            "image": "OIP.webp"
        },

        "crispy-chicken-burrito": {
            "name": "Crispy Chicken Burrito",
            "price": 9.99,
            "description": "A warm tortilla filled with seasoned steak, rice, beans, cheese, lettuce, and salsa.",
            "image": "crispy-chicken.webp"
        },

        "pepperoni-pizza": {
            "name": "Pepperoni Pizza",
            "price": 12.99,
            "description": "Pizza topped with mozzarella cheese and pepperoni.",
            "image": "pepperoni-pizza.jpg"
        },
        "paneer-pizza": {
            "name": "Paneer Pizza",
            "price": 12.99,
            "description": "Pizza topped with paneer and veggies.",
            "image": "paneer-pizza.jpg"
        }
    }

    product = products[item]

    return render_template("product.html", product=product)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)