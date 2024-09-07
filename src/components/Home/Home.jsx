import React, { useContext, useState } from 'react';
import './Home.css';
import addedImage from '../../assets/Added.png';
import {ProductContext} from '../Context/ProductContext';
import CartContext from '../Context/CartContext';

const Store = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext); // Get addToCart from CartContext
  const [activeCategory, setActiveCategory] = useState(null);

  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <div className="store-container">
        {/* Sidebar for Categories */}
        <div className="sidebar">
          <ul className="category-list">
            <li
              className={`category-item ${activeCategory === null ? 'active' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </li>
            {uniqueCategories.map((category, index) => (
              <li
                key={index}
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Product Section */}
        <div className="product-list">
          {products
            .filter((product) => activeCategory === null || product.category === activeCategory)
            .map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  €{product.price.toFixed(2)}
                </p>
                <p className="product-description">{product.seller}</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  <img src={addedImage} alt="Added to cart" height={15} />
                  Add to cart
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Pagination (Optional) */}
      <div className="pagination">
        <button className="page-button">1</button>
        <button className="page-button">2</button>
        <button className="page-button">...</button>
        <button className="page-button">10</button>
      </div>
    </>
  );
};

export default Store;
