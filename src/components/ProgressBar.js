import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress = 50 }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-track">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
