import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    )
};

export default Navbar;