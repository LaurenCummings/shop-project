import './CartItem.css';
import { useCart } from '../contexts/ShopContext';
import { XCircle } from 'phosphor-react';
import ConfirmDialog from './ConfirmDialog';
import { useState } from 'react';

const CartItem = (props) => {
    const { id, productName, price, productImages } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useCart();
    const [showDialog, setShowDialog] = useState(false);
    
    const handleDelete = () => {
        updateCartItemCount(0, id);
        setShowDialog(false);
    };

    return (
        <div className="cartItem">
            <button 
                className="deleteItemX"
                onClick={() => setShowDialog(true)}
            >
                <XCircle size={32} />
            </button>
            <ConfirmDialog
                isOpen = {showDialog}
                title="Confirm Delete"
                message="Delete item from cart?"
                onConfirm={handleDelete}
                onCancel={() => setShowDialog(false)}
            />
                <img src={productImages[0]} alt={productName} />
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>${price.toFixed(2)}</p>
                    <div className="countHandler">
                        <button onClick={() => 
                            { if (cartItems[id] > 1) {
                                removeFromCart(id)
                            }
                            else {
                                setShowDialog(true);
                            }}}> - </button>
                        <input 
                            value={cartItems[id]} 
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)} 
                        />
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
        </div>
    );
};

export default CartItem;