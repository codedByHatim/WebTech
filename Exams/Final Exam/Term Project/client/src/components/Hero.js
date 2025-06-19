import React from 'react';
import './Hero.css';

const Hero = () => (
  <header>
    <div className="nav-top">HANDMADE IN ENGLAND | MAKERS OF FINE SHOES | EST 1879</div>
    <nav className="main-nav">
      <ul>
        <li><a href="#">MEN'S SHOES</a></li>
        <li><a href="#">WOMEN'S SHOES</a></li>
        <li><a href="#">ACCESSORIES</a></li>
        <li><a href="#">STORES</a></li>
        <li className="logo">CROCKETT & JONES</li>
        <li><a href="#">SHOE CARE</a></li>
        <li><a href="#">GUIDES</a></li>
        <li><a href="#">MAKING & REPAIR</a></li>
        <li><a href="#">THE ARTICLE</a></li>
      </ul>
    </nav>
    <section className="hero">
      <img src="/hero.jpg" alt="Hero Banner" className="hero-img" />
      <div className="hero-text">
        <h1>SALCOMBE 2</h1>
        <p>Pistachio Suede</p>
      </div>
    </section>
  </header>
);

export default Hero;
