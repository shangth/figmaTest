import React from 'react';
import './LiveRankingDashboard.css';

const LiveRankingDashboard = () => {
  // 小卡片数据
  const smallCards = [
    {
      title: '热度值',
      current: '2330',
      total: '120000',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fbaee2c-c944-468d-b695-043ef769471e'
    },
    {
      title: '完成X次PK',
      current: '1',
      total: '5次',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab51a8d0-b69d-4a00-82a4-1ffb888b96dd'
    },
    {
      title: '评论观众数',
      current: '1',
      total: '5人',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2eeeb96-3d19-45b4-8f3f-01ef114b9901'
    },
    {
      title: '直播时长',
      current: '2',
      total: '5分钟',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91b0778b-3db8-48b0-9013-ab7c5f47b541'
    }
  ];

  // 大卡片数据
  const largeCards = [
    {
      title: '热度值',
      current: '2330',
      total: '12000',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cf699b1-e72c-4a77-ac07-3c2c3ab3bf2c'
    },
    {
      title: '完成X次PK',
      current: '1',
      total: '5次',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99f0e57d-58e2-4515-ab64-865f793bb6e7'
    },
    {
      title: '评论观众数',
      current: '1',
      total: '5人',
      icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11eaccfb-65ed-4047-a54d-417419562599'
    }
  ];

  // 用户排行榜数据
  const userRankings = [
    {
      avatar: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7df6b892-3803-44c3-9fd4-4cd3def2a132',
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: true
    },
    {
      avatar: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e149ea78-2491-4eaa-8ab1-891a134fca41',
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: false
    },
    {
      avatar: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5b15d71-309e-46e8-a0b9-1dfea027b764',
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: false
    },
    {
      avatar: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86b21d74-ea8e-4523-be19-4b88ce76127b',
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: false
    }
  ];

  return (
    <div className="live-ranking-dashboard">
      {/* 小卡片区域 */}
      <div className="small-cards-container">
        {smallCards.map((card, index) => (
          <div key={index} className="small-card">
            <div className="card-content">
              <div className="card-info">
                <div className="card-title">{card.title}</div>
                <div className="card-stats">
                  <span className="current-value">{card.current}</span>
                  <span className="total-value">/{card.total}</span>
                </div>
              </div>
              <div className="card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 大卡片区域 */}
      <div className="large-cards-container">
        {largeCards.map((card, index) => (
          <div key={index} className="large-card">
            <div className="large-card-content">
              <div className="large-card-info">
                <div className="large-card-header">
                  <span className="large-card-title">{card.title}</span>
                  <div className="large-card-stats">
                    <span className="large-current-value">{card.current}</span>
                    <span className="large-total-value">/{card.total}</span>
                  </div>
                </div>
                <div className="large-progress-bar">
                  <div className="large-progress-fill"></div>
                </div>
              </div>
              <div className="large-card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 用户排行榜区域 */}
      <div className="user-rankings-container">
        {userRankings.map((user, index) => (
          <div key={index} className="user-ranking-item">
            <div className="user-info">
              <div className="avatar-container">
                <div className="avatar-wrapper">
                  <img src={user.avatar} alt="avatar" className="avatar" />
                  <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bddd118-b483-47a6-a1b4-2c35fb56a79c" alt="frame" className="avatar-frame" />
                  {user.isLive && (
                    <div className="live-badge">
                      <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75a4507a-a122-453e-a3f2-6b58d20a47c5" alt="live-bg" className="live-bg" />
                      <span className="live-text">直播中</span>
                    </div>
                  )}
                  <div className="follow-icon">
                    <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c5fff52-7a3c-4058-82e7-88f5a9aeefe9" alt="follow" />
                  </div>
                </div>
              </div>
              <div className="user-details">
                <div className="nickname">{user.nickname}</div>
                <div className="fire-value">
                  <span className="fire-label">火力值：</span>
                  <span className="fire-number">{user.fireValue}</span>
                </div>
              </div>
            </div>
            <div className="user-stats">
              <div className="stat-item">
                <div className="stat-number">{user.basicScore}</div>
                <div className="stat-label">基础分</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{user.performanceScore}</div>
                <div className="stat-label">公演分</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{user.ranking}</div>
                <div className="stat-label">排名</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveRankingDashboard;