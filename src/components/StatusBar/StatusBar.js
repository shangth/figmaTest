import React from 'react';
import './StatusBar.css';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="status-bar-content">
        <div className="status-bar-left">
          <div className="time">9:41</div>
          <div className="location-icon">📍</div>
        </div>
        <div className="status-bar-center"></div>
        <div className="status-bar-right">
          <div className="signal-indicator">
            <div className="signal-bar signal-1"></div>
            <div className="signal-bar signal-2"></div>
            <div className="signal-bar signal-3"></div>
            <div className="signal-bar signal-4"></div>
          </div>
          <div className="wifi-indicator">📶</div>
          <div className="battery-indicator">🔋</div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
