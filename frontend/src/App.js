import './App.scss';
import { Routes, Route } from "react-router-dom"
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import { fetchData } from './services/api';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  const [rootColors, setRootColors] = useState({});


  const initData = async () => {
    try {
      const data = await fetchData();
      setProfile(data.getProfile);
      setBrands(data.getBrands);
      setProducts(data.getProducts);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setIsLoading(true);
    }
  };


  useEffect(() => {
    initData();
  }, []);


  useEffect(() => {

    if (profile) {
      setRootColors(profile.colorTheme);
    }

    if (rootColors) {
      const htmlElement = document.documentElement;
      Object.keys(rootColors).map(key => {
        return htmlElement.style.setProperty(`--${key}`, rootColors[key])
      })
    }

  }, [profile, rootColors]);




  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero profile={profile} />
          <Header profile={profile} />
          <Routes>
            <Route path="/" element={<About profile={profile} brands={brands} />} />
            <Route path="product" element={<Product profile={profile} brands={brands} products={products} />} />
            <Route path="contact" element={<Contact profile={profile} />} />
          </Routes>
          <Footer profile={profile} />
        </>
      )}
    </>
  );
}

export default App;
