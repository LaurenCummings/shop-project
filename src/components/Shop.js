import './Shop.css';
import PRODUCTS from '../Products';
import Product from './Product';
import { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

const Shop = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [displayedProducts, setDisplayedProducts] = useState(PRODUCTS);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const searchProducts = () => {
        let selectedProducts = [];
        for(let i = 1; i < PRODUCTS.length; i++) {
            if (PRODUCTS[i].tags.includes(searchTerm)) {
                selectedProducts.push(PRODUCTS[i]);
            }
        }
        setDisplayedProducts(selectedProducts);
    };

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Our Products</h1>
            </div>
            <div className="searchBar">
                <input 
                    placeholder="Search for products" 
                    type="text" 
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button onClick={searchProducts}>
                    <MagnifyingGlass size={22}></MagnifyingGlass>
                </button>
            </div>
            <div className="products">
                {displayedProducts.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
};

export default Shop;