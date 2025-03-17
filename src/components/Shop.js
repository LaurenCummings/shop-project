import './Shop.css';
import PRODUCTS from '../Products';
import Product from './Product';

const Shop = () => {

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Our Products</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
};

export default Shop;