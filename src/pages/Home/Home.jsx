import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopCart</h1>
          <p className="hero-subtitle">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/shop" className="cta-button">
            Start Shopping
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop" 
            alt="Shopping"
          />
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>We offer only the highest quality items from trusted brands.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly and safely to your doorstep.</p>
          </div>
          <div className="feature-card">
            <h3>Great Prices</h3>
            <p>Competitive pricing with regular discounts and special offers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;