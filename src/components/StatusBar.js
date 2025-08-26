import React from 'react';
import './StatusBar.css';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-bar-time">9:41</div>
      <div className="status-bar-indicators">
        <div className="signal-bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="wifi-icon">📶</div>
        <div className="battery">
          <div className="battery-level"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
