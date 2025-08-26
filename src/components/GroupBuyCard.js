import React from 'react';
import Tag from './Tag';
import './GroupBuyCard.css';

const GroupBuyCard = ({ 
  title, 
  price, 
  originalPrice, 
  discount,
  description,
  type = 'group' // group, seckill
}) => {
  return (
    <div className="group-buy-card">
      <div className="card-header">
        <Tag 
          text={type === 'seckill' ? '秒' : '团'} 
          type={type === 'seckill' ? 'seckill' : 'group'} 
        />
        {type === 'seckill' && (
          <div className="seckill-bg"></div>
        )}
      </div>
      
      <div className="card-content">
        <div className="price-section">
          <span className="current-price">{price}</span>
          {originalPrice && (
            <div className="original-price">
              <span className="price-text">{originalPrice}</span>
              <div className="strikethrough"></div>
            </div>
          )}
        </div>
        
        {discount && (
          <Tag text={discount} type="discount" />
        )}
        
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default GroupBuyCard;
