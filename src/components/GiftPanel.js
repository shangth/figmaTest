import React from 'react';
import './GiftPanel.css';
import giftIcon1 from '../assets/gift-icon-1.png';
import giftIcon2 from '../assets/gift-icon-2.png';

const GiftPanel = () => {
  const gifts = [
    {
      id: 1,
      icon: giftIcon1,
      title: '1.2倍加成卡',
      description: '获得5000积分可得',
    },
    {
      id: 2,
      icon: giftIcon1,
      title: '1.2倍加成卡',
      description: '获得10000再得一张',
    },
    {
      id: 3,
      icon: giftIcon2,
      title: '双倍榜单积分',
      description: '开通积分翻倍',
    },
  ];

  return (
    <div className="gift-panel">
      <div className="card-header">
        <h2 className="card-title">这是一个标题</h2>
        <p className="card-subtitle">这是一个副标题描述描述描述描述描述</p>
      </div>
      <div className="gift-content">
        {gifts.map((gift) => (
          <div key={gift.id} className="gift-item">
            <img src={gift.icon} alt={gift.title} className="gift-icon" />
            <div className="gift-text">
              <h3 className="gift-title">{gift.title}</h3>
              <p className="gift-description">{gift.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftPanel;
