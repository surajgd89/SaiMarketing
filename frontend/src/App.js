import './App.scss';
import { Routes, Route } from "react-router-dom"
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
