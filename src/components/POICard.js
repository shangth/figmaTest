import React from 'react';

const POICard = ({ 
  name, 
  category, 
  location, 
  priceRange, 
  tags, 
  distance,
  ranking,
  views,
  isPurchased = false,
  reviews 
}) => {
  return (
    <div className="poi-item">
      <div className="poi-image">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="4" fill="#f0f0f0"/>
          <path d="M8 20L14 14L18 18L24 12V24H8V20Z" fill="#ddd"/>
          <circle cx="12" cy="10" r="2" fill="#ddd"/>
        </svg>
      </div>
      <div className="poi-info">
        <h3 className="poi-name">{name}</h3>
        <div className="poi-tags">
          <span className="tag">{category}</span>
          <span className="tag">{location}</span>
          {priceRange && <span className="tag">{priceRange}</span>}
        </div>
        <div className="poi-meta">
          {ranking && (
            <span className="ranking-tag">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z" fill="#B09163"/>
              </svg>
              {ranking}
            </span>
          )}
          {isPurchased && <span className="purchased-tag">购买过</span>}
          {views && <span className="views-tag">{views}</span>}
          {reviews && <span className="review-tag">"{reviews}"</span>}
          <span className="distance">{distance}</span>
        </div>
      </div>
    </div>
  );
};

export default POICard;
