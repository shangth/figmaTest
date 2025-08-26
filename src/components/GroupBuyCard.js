import React from 'react';

const GroupBuyCard = ({
  image,
  currentPrice,
  originalPrice,
  discount,
  title,
  subtitle,
  soldCount,
  specialTag,
  subsidyType,
  priceGuarantee,
  isLarge = false
}) => {
  return (
    <div className={`group-buy-item ${isLarge ? 'large' : ''}`}>
      <div className="product-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="4" fill="#f0f0f0"/>
            <path d="M12 32L20 24L26 30L36 20V36H12V32Z" fill="#ddd"/>
            <circle cx="18" cy="16" r="3" fill="#ddd"/>
          </svg>
        )}
        {soldCount && <div className="sold-tag">{soldCount}</div>}
        {specialTag && (
          <div className={`special-tag ${specialTag.type || ''}`}>
            {specialTag.text}
          </div>
        )}
        {subsidyType && (
          <div className={`subsidy-tag ${subsidyType}`}>
            {subsidyType === 'kuaishou' ? '快手补贴' : '美团补贴'}
          </div>
        )}
      </div>
      <div className="product-info">
        <div className="price-section">
          <span className="current-price">{currentPrice}</span>
          {originalPrice && <span className="original-price">{originalPrice}</span>}
          {discount && <span className="discount">{discount}</span>}
        </div>
        <div className="product-name">{title}</div>
        {subtitle && <div className="product-desc">{subtitle}</div>}
        {priceGuarantee && (
          <div className="price-guarantee">{priceGuarantee}</div>
        )}
      </div>
    </div>
  );
};

export default GroupBuyCard;
