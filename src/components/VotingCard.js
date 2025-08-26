import React, { useState } from 'react';
import './VotingCard.css';

const VotingCard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [likeCount, setLikeCount] = useState(426);
  const [isLiked, setIsLiked] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="voting-card">
      {/* 上半部分 - 投票区域 */}
      <div className="voting-section">
        <div className="background-blur"></div>
        
        <div className="voting-content">
          <div className="question-section">
            <h2 className="main-question">唐薇今日定榜榜值能否突破100万?</h2>
            <p className="sub-text">猜对即可瓜分总奖池</p>
          </div>
          
          <div className="options-container">
            {/* 能 - 选项 */}
            <div 
              className={`option-card yes-option ${selectedOption === 'yes' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('yes')}
            >
              <div className="option-background"></div>
              <div className="option-content">
                <div className="option-text">能</div>
                <div className="option-details">
                  <span className="return-text">回报</span>
                  <div className="multiplier-container">
                    <div className="close-icon">×</div>
                    <span className="multiplier">1.19</span>
                    <span className="times-text">倍</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* VS 图标 */}
            <div className="vs-section">
              <div className="vs-icon">
                <svg width="28" height="21" viewBox="0 0 28 21" fill="none">
                  <rect width="28" height="21" rx="4" fill="url(#gradient)"/>
                  <text x="14" y="13" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VS</text>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b6b"/>
                      <stop offset="100%" stopColor="#4ecdc4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* 不能 - 选项 */}
            <div 
              className={`option-card no-option ${selectedOption === 'no' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('no')}
            >
              <div className="option-background"></div>
              <div className="option-content">
                <div className="option-text">不能</div>
                <div className="option-details">
                  <span className="return-text">回报</span>
                  <div className="multiplier-container">
                    <div className="close-icon">×</div>
                    <span className="multiplier">6.22</span>
                    <span className="times-text">倍</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 下半部分 - 热评区域 */}
      <div className="comments-section">
        <div className="background-blur"></div>
        
        <div className="comments-content">
          <div className="comment-header">
            <div className="hot-tag">热评</div>
            <div className="user-info">
              <div className="avatar">
                <div className="avatar-placeholder"></div>
              </div>
              <div className="user-comment">
                <span className="username">用户昵称：</span>
                <span className="comment-text">你看看我没错…</span>
              </div>
            </div>
            <div className="comment-actions">
              <div className="like-section" onClick={handleLikeClick}>
                <div className={`heart-icon ${isLiked ? 'liked' : ''}`}>
                  {isLiked ? '♥' : '♡'}
                </div>
                <span className="like-count">{likeCount}</span>
              </div>
              <div className="join-discussion">
                <span>参与讨论</span>
                <div className="arrow-right">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingCard;
