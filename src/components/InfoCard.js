import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="info-content">
        <span className="info-text-start">今日已获得双倍积分:</span>
        <span className="info-text-highlight">10736</span>
      </div>
      <div className="info-button">
        <span className="button-text">查看榜单</span>
        <div className="arrow-down">
          <svg width="7" height="3.5" viewBox="0 0 7 3.5" fill="none">
            <path d="M3.5 3.5L0 0H7L3.5 3.5Z" fill="#32296b" opacity="0.6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
