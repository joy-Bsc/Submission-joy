import React, { useContext } from 'react';
import  CartContext  from '../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItemFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div><h2>An overview of your order</h2></div>
      <div className="checkout-container">
        {/* Order Overview */}
        <div className="order-overview">
          <div className="cart-container">
            <ul className="item-list">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <li key={item.id} className="item">
                    <div className="quantity-control">
                      <button 
                        className="quantity-button" 
                        onClick={() => decreaseQuantity(item.id)} 
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <img src={item.img} alt={item.name} className="item-image" />
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p className="item-price">€{item.price.toFixed(2)}</p>
                    </div>
                    <button className="remove-item" onClick={() => removeItemFromCart(item.id)}>×</button>
                  </li>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </ul>
          </div>
        </div>

        {/* Order Details */}
        <div className="order-details">
          <h2>Order details</h2>
          <div className="order-summary">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-item">
              <span>Estimated Tax</span>
              <span>€ -</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="checkout-button">GO TO CHECKOUT</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
