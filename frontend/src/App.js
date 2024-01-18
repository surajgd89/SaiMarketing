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

  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rootColors, setRootColors] = useState({});

  useEffect(() => {
    const initData = async () => {

      try {
        setIsLoading(false);
        const data = await fetchData();
        setProfile(data.getProfile);

      } catch (error) {
        console.error('Error fetching data:', error.message);
        setIsLoading(true);
      }

    };
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

    isLoading ? <Loader /> :
      <>
        < Hero />
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
