import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import Season from './components/Season';
import Footer from './components/Footer';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <Router>
      <div>
        {/* Always visible components */}
        <Hero />
        
        {/* Routing */}
        <Routes>
          {/* Homepage route - can load homepage components here if needed */}
          <Route path="/" element={
            <>
              <Products />
              <Season />
            </>
          } />

          {/* Public vehicles list */}
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
