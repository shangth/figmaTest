import React from 'react';
import './BrandSection.css';

const BrandSection = () => {
  const brandProducts = [
    {
      id: 1,
      price: { currency: '￥', integer: '224', decimal: '' },
      image: 'https://via.placeholder.com/64x64/FFC3C3/000000?text=🏷️',
      badge: '砍价抄底',
      badgeColor: '#FE364D'
    },
    {
      id: 2,
      price: { currency: '￥', integer: '54', decimal: '3' },
      image: 'https://via.placeholder.com/64x64/E8F4FD/000000?text=🎯',
      badge: '已补2.5元',
      badgeColor: '#FE364D'
    },
    {
      id: 3,
      price: { currency: '￥', integer: '108', decimal: '' },
      image: 'https://via.placeholder.com/64x64/F0F9FF/000000?text=📱',
      badge: '已补5元',
      badgeColor: '#FE364D'
    },
    {
      id: 4,
      price: { currency: '￥', integer: '999', decimal: '' },
      image: 'https://via.placeholder.com/64x64/FFF8E1/000000?text=💎',
      badge: '已补288元',
      badgeColor: '#FE364D'
    }
  ];

  return (
    <div className="brand-section">
      <div className="brand-header">
        <div className="brand-icon">🏷️</div>
        <h2 className="brand-title">大牌大补</h2>
        <p className="brand-subtitle">正品保障</p>
      </div>
      
      <div className="brand-products">
        {brandProducts.map((product) => (
          <div key={product.id} className="brand-product">
            <div className="brand-product-image-container">
              <img 
                src={product.image} 
                alt={`Brand product ${product.id}`}
                className="brand-product-image"
              />
              <div className="brand-product-badge" style={{ background: '#FFF1F3' }}>
                <span style={{ color: product.badgeColor }}>{product.badge}</span>
              </div>
            </div>
            <div className="brand-product-price">
              <span className="brand-currency">{product.price.currency}</span>
              <span className="brand-price-integer">{product.price.integer}</span>
              {product.price.decimal && (
                <>
                  <span className="brand-price-dot">.</span>
                  <span className="brand-price-decimal">{product.price.decimal}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
