import './Product.css';
import { useCart } from '../contexts/ShopContext';
import { useState } from 'react';
import Dialog from './Dialog.js';
import ImageSlider from './ImageSlider.js';

const Product = (props) => {
    const { id, productName, price, productImages } = props.data;
    const { addToCart } = useCart();
    const [showDialog, setShowDialog] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const addToCartText = () => {
        setIsAdding(true);

        setTimeout(() => {
            setIsAdding(false);
        }, 500);
    }

    return (
        <div className="product">
            <img src={productImages[0]} alt={productName} onClick={() => setShowDialog(true)}/>
            <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
                <div className="dialogProduct">
                    <h2><b>{productName}</b></h2>
                    <ImageSlider images={productImages} />
                    <p>${price.toFixed(2)}</p>
                    <button className="addToCartBttn" disabled={isAdding} onClick={() => {addToCart(id); addToCartText();}}>
                        {isAdding ? "Product Added to Cart" : "Add To Cart"}    
                    </button>    
                </div>
            </Dialog>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price.toFixed(2)}</p>
            </div>
        </div>
    )
};

export default Product;