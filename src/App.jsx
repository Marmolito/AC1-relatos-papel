import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './views/landing';
import Home from './views/home';
import BookDetail from './views/booksdetail';
import { CartProvider } from './hooks/cartcontext';
import Checkout from "./views/checkout";
import Header from './components/header';
import { useState } from "react";
import Cart from "./components/cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);
   return (
    <CartProvider>
      <div className="app-layout">
        <BrowserRouter>
          <Header onCartClick={toggleCart} cartOpen={isCartOpen} />
          {isCartOpen && <Cart onClose={closeCart} />}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
