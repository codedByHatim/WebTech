import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Products from './components/Products';
import Season from './components/Season';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Products />
      <Season />
      <Footer />
    </div>
  );
}

export default App;
