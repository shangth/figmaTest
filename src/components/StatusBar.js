import React from 'react';

const StatusBar = () => {
  return (
    <div className="status-bar">
      <div className="time">9:41</div>
      <div className="status-icons">
        <div className="signal-bars">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
          <span className="bar bar-4"></span>
        </div>
        <div className="wifi-icon">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M1.5 8.5C4 6 11 6 13.5 8.5M3 6C5.5 4 9.5 4 12 6M4.5 3.5C6.5 2 8.5 2 10.5 3.5" 
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="battery">
          <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
            <rect x="1" y="1" width="20" height="9" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
            <path d="M22 4v3" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
            <rect x="2" y="2" width="18" height="7" rx="1" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
