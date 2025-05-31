import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Category from './Components/Category';
import FeaturedProducts from './Components/FeaturedProducts';
import Template from './Components/Template';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
