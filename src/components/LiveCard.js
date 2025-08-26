import React from 'react';

const LiveCard = ({ title, image }) => {
  return (
    <div className="live-card">
      <div className="live-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" rx="6" fill="#f0f0f0"/>
            <path d="M15 40L25 30L35 40L45 25V50H15V40Z" fill="#ddd"/>
            <circle cx="25" cy="20" r="4" fill="#ddd"/>
          </svg>
        )}
      </div>
      <div className="live-badge">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="2" fill="red"/>
        </svg>
        直播团购
      </div>
      <div className="live-title">{title}</div>
      <div className="live-avatar">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="6" fill="rgba(255,255,255,0.3)"/>
          <circle cx="6" cy="4" r="2" fill="white"/>
          <path d="M6 8C4 8 2 9 2 10V11H10V10C10 9 8 8 6 8Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default LiveCard;
