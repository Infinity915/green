import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './assets/Header';
import Home from './assets/Home';
import About from './assets/About';
import Services from './assets/Services';
import Portfolio from './assets/Portfolio';
import Team from './assets/Team';
import Contact from './assets/Contact';
import Cart from './assets/Cart';
import Footer from './assets/Footer';
import { CartProvider } from './assets/CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
