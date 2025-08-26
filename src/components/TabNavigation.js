import React, { useState } from 'react';
import './TabNavigation.css';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('团购');
  
  const tabs = ['综合', '智能', '视频', '直播', '团购', '用户', '商品'];

  return (
    <div className="tab-navigation">
      <div className="tab-container">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="tab-text">{tab}</span>
            {activeTab === tab && <div className="tab-indicator" />}
          </div>
        ))}
      </div>
      <div className="tab-divider"></div>
    </div>
  );
};

export default TabNavigation;
