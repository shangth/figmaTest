import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="product-card" onClick={() => console.log('Product clicked:', product.title)}>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        {product.liveReplay && (
          <div className="live-replay-badge">
            <div className="replay-icon">▶</div>
            <span>讲解回放</span>
          </div>
        )}
        <div 
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          {isLiked ? '❤️' : '🤍'}
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-header">
          {product.tags.map((tag, index) => (
            <span key={index} className={`product-tag ${tag.type}`}>
              {tag.text}
            </span>
          ))}
          <h3 className="product-title">{product.title}</h3>
        </div>
        
        <div className="product-badges">
          {product.badges.map((badge, index) => (
            <span key={index} className={`product-badge ${badge.type}`}>
              {badge.text}
            </span>
          ))}
        </div>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="currency">￥</span>
            <span className="price-integer">{product.price.integer}</span>
            <span className="price-dot">.</span>
            <span className="price-decimal">{product.price.decimal}</span>
          </div>
          <div className="product-sales">
            <span>已售{product.sales}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
