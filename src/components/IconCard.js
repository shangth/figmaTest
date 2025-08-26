import React from 'react';
import './IconCard.css';

const IconCard = ({ title, icon, className = '' }) => {
  return (
    <div className={`icon-card ${className}`}>
      <div className="icon-container">
        {icon}
      </div>
      <span className="icon-title">{title}</span>
    </div>
  );
};

export default IconCard;
