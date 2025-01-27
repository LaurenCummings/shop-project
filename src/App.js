import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ThankYou from './components/ThankYou';
import About from './components/About';
import { ShopContextProvider } from './contexts/ShopContext';

function App() {
  return (
    <div className="App">
        <ShopContextProvider>
            <Router>
                <Navbar />
                <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/shop-project" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/thankYou" element={<ThankYou />} />
                <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;