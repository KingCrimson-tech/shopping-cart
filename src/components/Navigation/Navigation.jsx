import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/Navigation.css';

const Navigation = ({ totalItems }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Shop Cart
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link cart-link">
              Cart
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  totalItems: PropTypes.number.isRequired,
};

export default Navigation;