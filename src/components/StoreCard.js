import React from 'react';
import StarRating from './StarRating';
import Tag from './Tag';
import './StoreCard.css';

const StoreCard = ({ 
  storeName, 
  storeImage, 
  category, 
  district, 
  distance, 
  rating, 
  commentCount,
  tags = [],
  isLive = false,
  badges = []
}) => {
  return (
    <div className="store-card">
      <div className="store-image-container">
        <img src={storeImage} alt={storeName} className="store-image" />
        {isLive && (
          <div className="live-indicator">
            <Tag text="直播中" type="live" />
          </div>
        )}
      </div>
      
      <div className="store-info">
        <h3 className="store-name">{storeName}</h3>
        
        <div className="store-meta">
          <div className="category-district">
            <span className="category">{category}</span>
            <span className="district">{district}</span>
          </div>
          <span className="distance">{distance}</span>
        </div>
        
        <div className="rating-section">
          <StarRating rating={rating} />
          {commentCount && (
            <span className="comment-count">{commentCount}条评论</span>
          )}
        </div>
        
        {tags.length > 0 && (
          <div className="store-tags">
            {tags.map((tag, index) => (
              <Tag 
                key={index} 
                text={tag.text} 
                type={tag.type} 
              />
            ))}
          </div>
        )}
        
        {badges.length > 0 && (
          <div className="store-badges">
            {badges.map((badge, index) => (
              <Tag 
                key={index} 
                text={badge.text} 
                type="badge" 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreCard;
