import './ThankYou.css';
import { useCart } from '../contexts/ShopContext';
import { useState } from 'react';

const ThankYou = () => {
    const { getTotalCartAmount, clearCart } = useCart();
    const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
    {clearCart()}

    return (
        <div className="thankYou">
            <p>Thank you for trying out the demo.</p>
            <p>You spent ${ totalAmount }.</p> 
            <p>Your cart has been cleared.</p>
        </div>
    )
};

export default ThankYou;