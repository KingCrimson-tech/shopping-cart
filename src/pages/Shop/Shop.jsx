import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../services/api';
import '../../styles/Shop.css';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="shop">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Our Products</h1>
        <p>Discover our amazing collection</p>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Shop;