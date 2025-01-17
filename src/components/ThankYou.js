import './ThankYou.css';
import { useCart } from '../contexts/ShopContext';
import { useState, useEffect } from 'react';

const ThankYou = () => {
    const { getTotalCartAmount, clearCart } = useCart();
    const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
    {clearCart()}

    // useEffect(() => {
    //     const handleBeforeUnload = (event) => {
    //         setTotalAmount(0);
    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    return (
        <div className="thankYou">
            <p>Thank you for trying out the demo.</p>
            <p>You spent ${ totalAmount }.</p> 
            <p>Your cart has been cleared.</p>
        </div>
    )
};

export default ThankYou;