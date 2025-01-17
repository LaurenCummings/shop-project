import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import logo from '../images/logo.png';
import { useCart } from '../contexts/ShopContext';

const Navbar = () => {
    const { getNumCartItems } = useCart();

    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart className="cartIcon" size={32} /> 
                    <p className="itemCount">({getNumCartItems()})</p>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;