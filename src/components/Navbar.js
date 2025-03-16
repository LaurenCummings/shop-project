import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart, List } from 'phosphor-react';
import logo from '../images/logo.png';
import { useCart } from '../contexts/ShopContext';

const Navbar = () => {
    const { getNumCartItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="navbar">
            {/* <img src={logo} alt="logo" /> */}
            <div className="logo">
                <h1>Annie's Handmade Pottery</h1>
            </div>
            <div className={`links ${isOpen ? "menuOpen" : ""}`}>
                <Link to="/about" onClick={isOpen ? toggleMenu : null}> About </Link>
                <Link to="/" onClick={isOpen ? toggleMenu : null}> Shop </Link>
                <Link to="/contact" onClick={isOpen ? toggleMenu : null}> Contact </Link>
                <Link to="/cart" onClick={isOpen ? toggleMenu : null}>
                    <ShoppingCart className="cartIcon" size={32} /> 
                    <p className="itemCount">({getNumCartItems()})</p>
                </Link>
            </div>
            <div>
                <button className="hamburgerMenu" onClick={toggleMenu}>
                   <List size={42} /> 
                </button>
            </div>
        </div>
    )
};

export default Navbar;