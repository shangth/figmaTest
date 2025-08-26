import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('商城');
  
  const tabs = ['商城', '关注', '发现', '同城', '直播'];

  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="nav-left">
          <div className="menu-icon">☰</div>
        </div>
        <div className="nav-center">
          <div className="nav-tabs">
            {tabs.map((tab) => (
              <div 
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab}</span>
                {activeTab === tab && <div className="tab-line"></div>}
              </div>
            ))}
          </div>
        </div>
        <div className="nav-right">
          <div className="search-icon">🔍</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
