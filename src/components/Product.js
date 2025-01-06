import './Product.css';
import { useCart } from '../contexts/ShopContext';
import { useState } from 'react';
import Dialog from './Dialog.js';
import ImageSlider from './ImageSlider.js';

const Product = (props) => {
    const { id, productName, price, productImages } = props.data;
    const { addToCart } = useCart();
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className="product">
            <img src={productImages[0]} alt={productName} onClick={() => setShowDialog(true)}/>
            <Dialog isOpen={showDialog} onClose={() => setShowDialog(false)}>
                <div className="dialogProduct">
                    <h2><b>{productName}</b></h2>
                    <ImageSlider images={productImages} />
                    <p>${price}</p>
                    <button className="addToCartBttn" onClick={() => addToCart(id)}>
                        Add To Cart    
                    </button>    
                </div>
            </Dialog>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart
            </button>
        </div>
    )
};

export default Product;