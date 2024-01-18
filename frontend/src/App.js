import './App.scss';
import { Routes, Route } from "react-router-dom"
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import { getProfile } from './services/api';
import { useEffect, useState } from 'react';

function App() {

  const [rootColors, setRootColors] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setRootColors(data.colorTheme)
      } catch (error) {
        console.log(error)
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    Object.keys(rootColors).map(key => {
      return htmlElement.style.setProperty(`--${key}`, rootColors[key])
    })
  }, [rootColors]);


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
