import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="newsletter">
          <h3>Newsletter Sign Up</h3>
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">SIGN UP</button>
          </form>
        </div>

        <div className="footer-logo-text">
          <img src="/emblem.png" alt="Emblem" />
          <p>
            BY APPOINTMENT TO<br />
            HIS MAJESTY THE KING<br />
            MANUFACTURER AND SUPPLIER OF FOOTWEAR<br />
            CROCKETT & JONES LIMITED, NORTHAMPTON
          </p>
        </div>

        <div className="social-payment">
          <h3>#MadeToBeWorn</h3>
          <div className="icons">
            <span>📷</span>
            <span>📌</span>
            <span>✖️</span>
          </div>
          <div className="payments">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/MasterCard_Logo.svg" alt="MasterCard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Apple_Pay_logo.svg" alt="Apple Pay" />
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">My Collection</a></li>
          <li><a href="#">Delivery & Returns</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Site Credits</a></li>
          <li><a href="#">2025 © Crockett & Jones</a></li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
