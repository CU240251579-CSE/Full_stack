function Cart({ cart, removeFromCart }) {

    // Empty cart condition
    if (cart.length === 0) {
        return (
            <div className="cart">
                <h2>Shopping Cart</h2>
                <p>Your cart is empty</p>
            </div>
        );
    }

    // Calculate grand total
    const grandTotal = cart.reduce(
        (total, item) =>
            total + item.product.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>

            {cart.map((item) => (
                <div
                    className="cart-item"
                    key={item.product.id}
                >
                    <img
                        src={item.product.image}
                        alt={item.product.name}
                    />

                    <div>
                        <h3>{item.product.name}</h3>

                        <p>
                            Price: ₹{item.product.price}
                        </p>

                        <p>
                            Quantity: {item.quantity}
                        </p>

                        <p>
                            Subtotal: ₹
                            {item.product.price * item.quantity}
                        </p>

                        <button
                            onClick={() =>
                                removeFromCart(item.product.id)
                            }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <h3>
                Grand Total: ₹{grandTotal}
            </h3>
        </div>
    );
}

export default Cart;
