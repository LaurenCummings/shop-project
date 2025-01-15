import './ThankYou.css';
import { useCart } from '../contexts/ShopContext';
// import { useRef, useEffect } from 'react';

const ThankYou = () => {
    const { getTotalCartAmount, clearCart } = useCart();
    // const totalAmount = useRef();

    // useEffect(() => {
    //     totalAmount.current = getTotalCartAmount();
    // });

    return (
        <div className="thankYou">
            <p>Thank you for trying out the demo.</p>
                {/* You spent ${ totalAmount.current }. */}
                {clearCart()}
            <p>Your cart has been cleared.</p>
        </div>
    )
};

export default ThankYou;