import React from 'react';
import './ScheduleCard.css';
import awardCeremony from '../assets/award-ceremony-4a118c.png';
import honorBadge from '../assets/honor-badge-1a7558.png';
import premiumSeat from '../assets/premium-seat.png';
import offlineViewing from '../assets/offline-viewing-465593.png';

const ScheduleCard = () => {
  const scheduleItems = [
    {
      id: 1,
      name: '地区赛',
      date: '12.14-12.17',
      icon: awardCeremony
    },
    {
      id: 2,
      name: '总决赛',
      date: '12.14-12.17',
      icon: honorBadge
    },
    {
      id: 3,
      name: '展示赛',
      date: '12.14-12.17',
      icon: premiumSeat
    },
    {
      id: 4,
      name: '战队赛',
      date: '12.14-12.17',
      icon: offlineViewing
    }
  ];

  return (
    <div className="schedule-card">
      {/* 头部区域 */}
      <div className="card-header">
        <div className="header-background">
          <div className="gradient-overlay"></div>
          <div className="decorative-elements">
            <div className="blur-circle blur-circle-1"></div>
            <div className="blur-circle blur-circle-2"></div>
            <div className="blur-circle blur-circle-3"></div>
            <div className="blur-circle blur-circle-4"></div>
            <div className="blur-circle blur-circle-5"></div>
            <div className="blur-circle blur-circle-6"></div>
            <div className="blur-circle blur-circle-7"></div>
            <div className="blur-circle blur-circle-8"></div>
            <div className="blur-circle blur-circle-9"></div>
            <div className="blur-circle blur-circle-10"></div>
            <div className="blur-circle blur-circle-11"></div>
          </div>
        </div>
        <div className="card-title">
          <h2>后续赛程安排</h2>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="card-content">
        <div className="schedule-list">
          {scheduleItems.map((item) => (
            <div key={item.id} className="schedule-item">
              <div className="item-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="item-text">
                <div className="item-name">{item.name}</div>
                <div className="item-date">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
