import React, { useState } from 'react';
import './BottomNav.css';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'featured', label: '精选' },
    { id: 'add', label: '+', isSpecial: true },
    { id: 'message', label: '消息' },
    { id: 'profile', label: '我' }
  ];

  return (
    <div className="bottom-nav">
      <div className="bottom-nav-content">
        {navItems.map((item) => (
          <div 
            key={item.id} 
            className={`bottom-nav-item ${activeTab === item.id ? 'active' : ''} ${item.isSpecial ? 'special' : ''}`}
            onClick={() => !item.isSpecial && setActiveTab(item.id)}
          >
            {item.isSpecial ? (
              <div className="add-button">
                <div className="add-button-circle">
                  <span className="add-icon">+</span>
                </div>
              </div>
            ) : (
              <span className="nav-label">{item.label}</span>
            )}
          </div>
        ))}
      </div>
      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </div>
  );
};

export default BottomNav;
