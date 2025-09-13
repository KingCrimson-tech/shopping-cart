import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Cartitem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 1;
    onUpdateQuantity(item.id, Math.max(1, newQuantity));
  };

  const incrementQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)} each</p>
        
        <div className="cart-item-controls">
          <div className="quantity-controls">
            <button 
              type="button"
              onClick={decrementQuantity}
              className="quantity-btn"
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
            <button 
              type="button"
              onClick={incrementQuantity}
              className="quantity-btn"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleRemove}
            className="remove-btn"
            aria-label="Remove item from cart"
          >
            Remove
          </button>
        </div>
        
        <div className="cart-item-total">
          <strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;