import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
          <Link to="/shop" className="btn-secondary">
            Browse Shop
          </Link>
        </div>
      </div>
      <div className="error-illustration">
        <div className="error-icon">🛒</div>
        <p>Lost your way while shopping?</p>
      </div>
    </div>
  );
};

export default NotFound;