import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <section className="product-section">
      <h2 className="section-title">Featured Collection</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="/products/salcombe1.jpeg" alt="Shoe 1" />
          <h3>SALCOMBE 2</h3>
          <p>Pistachio Suede</p>
        </div>
        <div className="product-card">
          <img src="/products/salcombe2.jpeg" alt="Shoe 2" />
          <h3>SALCOMBE 2</h3>
          <p>Desert Suede</p>
        </div>
        <div className="product-card">
          <img src="/products/salcombe3.jpeg" alt="Shoe 3" />
          <h3>SALCOMBE 2</h3>
          <p>Snuff Suede</p>
        </div>
        <div className="product-card">
          <img src="/products/salcombe4.jpeg" alt="Shoe 4" />
          <h3>SALCOMBE 2</h3>
          <p>Pistachio Suede</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
