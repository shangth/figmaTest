import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ranking-card">
        {/* Background gradient overlay */}
        <div className="background-overlay"></div>
        
        {/* Top animated background */}
        <div className="top-animated-bg">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c68020f2-e0e1-4b96-bb10-55c4919cfb74" 
            alt="Background animation"
            className="animated-bg-image"
          />
        </div>

        {/* Main content */}
        <div className="card-content">
          {/* User info section */}
          <div className="user-info-section">
            <div className="user-info-container">
              {/* Avatar */}
              <div className="avatar-container">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2fd76bd-aa83-4c9e-abde-cbbc3f501100" 
                  alt="Default avatar"
                  className="avatar-bg"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ec8fd6d-6c5a-4ff5-83f9-879435d8f42a" 
                  alt="User avatar"
                  className="avatar-main"
                />
                <div className="live-indicator">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a22b6678-c22d-48cc-812c-204f704eedc7" 
                    alt="Live indicator bg"
                    className="live-bg"
                  />
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf3a5cfa-ef3d-4b42-9cd8-61d1d24a140e" 
                    alt="Live indicator"
                    className="live-icon"
                  />
                </div>
              </div>

              {/* Ranking info */}
              <div className="ranking-info">
                <div className="rank-text">
                  <span className="rank-prefix">第</span>
                  <span className="rank-number">50+</span>
                  <span className="rank-suffix">名</span>
                </div>
                <div className="rank-detail">
                  <span className="detail-text">距上一名差</span>
                  <span className="detail-number">9990.99万</span>
                </div>
              </div>

              {/* Bonus info */}
              <div className="bonus-info">
                <div className="bonus-text">
                  <span className="bonus-symbol">+</span>
                  <span className="bonus-percentage">32%</span>
                  <div className="bonus-status">
                    <span className="status-text">加成中</span>
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3163233-f58f-4abe-b415-4ec9b9710969" 
                      alt="Arrow"
                      className="arrow-icon"
                    />
                  </div>
                </div>
                <div className="bonus-detail">
                  <span className="bonus-detail-text">额外获得</span>
                  <span className="bonus-detail-number">9999.99万盛典值</span>
                </div>
              </div>
            </div>
          </div>

          {/* Battle section */}
          <div className="battle-section">
            <div className="battle-container">
              {/* Battle title */}
              <div className="battle-title-container">
                <div className="battle-title-content">
                  <span className="battle-title">巅峰1V1对决</span>
                  <div className="battle-timer">
                    <span className="timer-text">05:20</span>
                  </div>
                </div>
                <div className="battle-hint">
                  <span className="hint-text">还剩x次加成获取机会</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1528545-442b-4705-822d-5203fca9c58e" 
                    alt="Info icon"
                    className="info-icon"
                  />
                </div>
              </div>

              {/* Battle content */}
              <div className="battle-content">
                <div className="battle-players">
                  {/* Left player */}
                  <div className="player-avatar">
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/459c7952-ad16-4002-a56e-87050903bd00" 
                      alt="Player 1 avatar bg"
                      className="player-avatar-bg"
                    />
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bf8a25e-26a1-412e-a3cd-45d1da3e35c4" 
                      alt="Player 1 avatar"
                      className="player-avatar-main"
                    />
                    <div className="player-live-indicator">
                      <img 
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9606535d-0f4b-4af0-ae67-887b844e8a34" 
                        alt="Live bg"
                        className="player-live-bg"
                      />
                      <img 
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2db94ecc-1e19-4e33-a139-8f2c157a1963" 
                        alt="Live icon"
                        className="player-live-icon"
                      />
                    </div>
                  </div>

                  {/* Battle progress */}
                  <div className="battle-progress">
                    <div className="player-names">
                      <span className="left-player-name">我方昵称</span>
                      <span className="right-player-name">对方的昵称...</span>
                    </div>
                    <div className="progress-bar-container">
                      <img 
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44e12ed5-1180-462d-83e5-eecba9f4a4c7" 
                        alt="Progress bg right"
                        className="progress-bg-right"
                      />
                      <img 
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2bd1b0c-33d9-4564-9e64-0da42c0962db" 
                        alt="Progress bg left"
                        className="progress-bg-left"
                      />
                      <div className="progress-scores">
                        <span className="left-score">9999</span>
                        <span className="right-score">9999</span>
                      </div>
                    </div>
                  </div>

                  {/* Right player */}
                  <div className="player-avatar">
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2d7bb84-bf85-4add-96de-a6d23a499599" 
                      alt="Player 2 avatar bg"
                      className="player-avatar-bg"
                    />
                    <img 
                      src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0100ab5a-83c0-4e0b-9eeb-ec5777a6e3f1" 
                      alt="Player 2 avatar"
                      className="player-avatar-main"
                    />
                    <div className="player-live-indicator">
                      <img 
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b712e16-ba66-47d0-8dc3-75da1ca9ffa2" 
                        alt="Live bg"
                        className="player-live-bg"
                      />
                      <img 
                        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8d3b8dc-6251-4bce-a070-9652261b67c8" 
                        alt="Live icon"
                        className="player-live-icon"
                      />
                    </div>
                  </div>
                </div>

                {/* Battle info overlay */}
                <div className="battle-info-overlay">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15405a68-dba5-436c-afc4-7a6b2b06caa6" 
                    alt="Battle info bg"
                    className="battle-info-bg"
                  />
                  <div className="battle-info-text">
                    <span>胜方将获得5%加成，败方扣除3%榜值</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
