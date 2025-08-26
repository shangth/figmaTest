import React from 'react';
import './RankItem.css';

const RankItem = ({ 
  avatar,
  nickname,
  fireValue,
  basicScore,
  performanceScore,
  ranking,
  isLive = false 
}) => {
  return (
    <div className="rank-item">
      <div className="rank-item__content">
        <div className="rank-item__avatar-section">
          <div className="avatar-container">
            <div className="avatar">
              {avatar ? (
                <img src={avatar} alt={nickname} />
              ) : (
                <div className="avatar-placeholder">
                  <div className="avatar-default"></div>
                </div>
              )}
            </div>
            {isLive && (
              <div className="live-badge">
                <span>直播中</span>
              </div>
            )}
            <div className="follow-button">
              <div className="follow-icon">
                <div className="plus-horizontal"></div>
                <div className="plus-vertical"></div>
              </div>
            </div>
          </div>
          
          <div className="rank-item__info">
            <div className="nickname">{nickname}</div>
            <div className="fire-info">
              <span className="fire-label">火力值：</span>
              <span className="fire-value">{fireValue}</span>
            </div>
          </div>
        </div>
        
        <div className="rank-item__stats">
          <div className="stat-item">
            <div className="stat-value">{basicScore}</div>
            <div className="stat-label">基础分</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{performanceScore}</div>
            <div className="stat-label">公演分</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{ranking}</div>
            <div className="stat-label">排名</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankItem;
