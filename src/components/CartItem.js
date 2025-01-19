import './CartItem.css';
import { useCart } from '../contexts/ShopContext';
import { XCircle } from 'phosphor-react';

const CartItem = (props) => {
    const { id, productName, price, productImages } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useCart();

    return (
        <div className="cartItem">
            <button className="deleteItemX">
                <XCircle size={32} />
            </button>
                <img src={productImages[0]} alt={productName} />
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>${price.toFixed(2)}</p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
        </div>
    );
};

export default CartItem;