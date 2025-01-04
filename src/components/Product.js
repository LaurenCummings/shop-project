import './Product.css';
import { useCart } from '../contexts/ShopContext';

const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart } = useCart();

    return (
        <div className="product">
            <img src={productImage} alt={productName}/>
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