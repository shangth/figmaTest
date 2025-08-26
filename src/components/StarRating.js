import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      <div className="stars">
        {/* 满星 */}
        {Array(fullStars).fill().map((_, index) => (
          <svg key={`full-${index}`} width="16" height="16" viewBox="0 0 16 16" className="star full">
            <path d="M8 1.72L9.57 6.14H14.18L10.3 9.28L11.87 13.5L8 10.36L4.13 13.5L5.7 9.28L1.82 6.14H6.43L8 1.72Z" fill="#FE3666"/>
          </svg>
        ))}
        
        {/* 半星 */}
        {hasHalfStar && (
          <svg width="16" height="16" viewBox="0 0 16 16" className="star half">
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stopColor="#FE3666" />
                <stop offset="50%" stopColor="rgba(254, 54, 102, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M8 1.72L9.57 6.14H14.18L10.3 9.28L11.87 13.5L8 10.36L4.13 13.5L5.7 9.28L1.82 6.14H6.43L8 1.72Z" fill="url(#half-star)"/>
          </svg>
        )}
        
        {/* 空星 */}
        {Array(emptyStars).fill().map((_, index) => (
          <svg key={`empty-${index}`} width="16" height="16" viewBox="0 0 16 16" className="star empty">
            <path d="M8 1.72L9.57 6.14H14.18L10.3 9.28L11.87 13.5L8 10.36L4.13 13.5L5.7 9.28L1.82 6.14H6.43L8 1.72Z" fill="rgba(254, 54, 102, 0.3)"/>
          </svg>
        ))}
      </div>
      <span className="rating-text">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
