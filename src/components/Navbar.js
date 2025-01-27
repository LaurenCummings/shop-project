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
        setIsOpen((open) => !open);
        console.log("Toggled");
    }

    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <div className={`links ${isOpen ? "menuOpen" : ""}`}>
                <Link to="/about"> About </Link>
                <Link to="/"> Shop </Link>
                <Link to="/cart">
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