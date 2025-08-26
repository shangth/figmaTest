import React from 'react';
import './FunctionNav.css';

const FunctionNav = () => {
  const navItems = [
    {
      id: 'orders',
      title: '我的订单',
      icon: '📋',
      bgColor: '#FFFFFF'
    },
    {
      id: 'vip',
      title: '黑钻买家',
      icon: '💎',
      bgColor: '#FFFFFF'
    },
    {
      id: 'bargain',
      title: '砍价购',
      icon: '🔪',
      bgColor: '#FFFFFF'
    },
    {
      id: 'cart',
      title: '购物车',
      icon: '🛒',
      bgColor: '#FFFFFF'
    },
    {
      id: 'live',
      title: '直播爆款',
      icon: '💥',
      bgColor: '#FFFFFF'
    }
  ];

  return (
    <div className="function-nav">
      <div className="function-nav-container">
        {navItems.map((item) => (
          <div key={item.id} className="function-nav-item">
            <div className="function-nav-icon" style={{ background: item.bgColor }}>
              <span className="icon">{item.icon}</span>
            </div>
            <span className="function-nav-title">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress-bg">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default FunctionNav;
