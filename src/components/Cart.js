import './Cart.css';
import PRODUCTS from '../Products';
import { useCart } from '../contexts/ShopContext';
import CartItem from './CartItem';

import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useCart();
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cartContainer">
            <div className="cart">
            {totalAmount > 0 ? (
                <div>
                    <h1>Your Cart Items</h1>
                </div>
            ) : ""}
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button onClick={() => navigate("/thankYou")}>Checkout</button>
                </div>
            ) : (
                <h1>Your Cart is Empty</h1>
            )}
            
            </div>
        </div>
    )
};

export default Cart;