// =========================================
// STYLEHUB - MAIN APP
// =========================================

import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

function App() {

    // Cart state
    const [cart, setCart] = useState([]);

    // Show / hide cart
    const [showCart, setShowCart] = useState(false);

    // Show / hide checkout
    const [showCheckout, setShowCheckout] = useState(false);

    // Add product to cart
    const addToCart = (product) => {
        setCart((currentCart) => {

            const existingProduct = currentCart.find(
                (item) => item.product.id === product.id
            );

            if (existingProduct) {
                return currentCart.map((item) =>
                    item.product.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1
                          }
                        : item
                );
            }

            return [
                ...currentCart,
                {
                    product: product,
                    quantity: 1
                }
            ];
        });

        // Open cart after adding a product
        setShowCart(true);
    };

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCart((currentCart) =>
            currentCart.filter(
                (item) => item.product.id !== productId
            )
        );
    };

    // Calculate total number of items
    const cartItemCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <>
            {/* Header */}
            <header>
                <h1>STYLEHUB</h1>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>

                    <button
                        className="cart-button"
                        onClick={() => {
                            setShowCart(!showCart);
                            setShowCheckout(false);
                        }}
                    >
                        🛒 Cart
                        <span className="cart-count">
                            {cartItemCount}
                        </span>
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero" id="home">
                <h2>Style That Speaks</h2>

                <p>
                    Discover premium fashion for your everyday look.
                </p>

                <a href="#products">Shop Now</a>
            </section>

            {/* Products Section */}
            <section className="products" id="products">
                <h2>Our Products</h2>

                <ProductList addToCart={addToCart} />
            </section>

            {/* Cart Section */}
            {showCart && (
                <section id="cart">
                    <Cart
                        cart={cart}
                        removeFromCart={removeFromCart}
                    />

                    {/* Checkout button only when cart has products */}
                    {cart.length > 0 && (
                        <div className="checkout-container">
                            <button
                                className="checkout-button"
                                onClick={() =>
                                    setShowCheckout(!showCheckout)
                                }
                            >
                                {showCheckout
                                    ? "Hide Checkout"
                                    : "Proceed to Checkout"}
                            </button>
                        </div>
                    )}
                </section>
            )}

            {/* Checkout Form */}
            {showCheckout && cart.length > 0 && (
                <CheckoutForm />
            )}

            {/* Footer */}
            <footer>
                <p>© 2026 StyleHub. All rights reserved.</p>
                <p>Premium Fashion Store</p>
            </footer>
        </>
    );
}

export default App;
