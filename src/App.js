import './App.css';

function App() {
  return (
    <div className="App">
      <div className="activity-card">
        {/* 加成动画区 */}
        <div className="animation-area">
          <div className="gradient-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* 主要内容区 */}
        <div className="main-content">
          {/* 状态信息区 */}
          <div className="status-section">
            <div className="user-info">
              <div className="avatar-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                  alt="用户头像" 
                  className="avatar"
                />
                <div className="live-badge">
                  <div className="live-dot"></div>
                </div>
              </div>
              
              <div className="ranking-data">
                <div className="rank-info">
                  <span className="rank-text">第</span>
                  <span className="rank-number">50+</span>
                  <span className="rank-text">名</span>
                </div>
                <div className="rank-detail">
                  <span className="detail-text">距上一名差</span>
                  <span className="detail-number">9990.99万</span>
                </div>
              </div>
              
              <div className="bonus-data">
                <div className="bonus-info">
                  <span className="bonus-sign">+</span>
                  <span className="bonus-percent">32%</span>
                  <div className="bonus-status">
                    <span className="bonus-text">加成中</span>
                    <svg className="arrow-icon" viewBox="0 0 10 10">
                      <path d="M3.25 1.5L6.75 5L3.25 8.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                </div>
                <div className="bonus-detail">
                  <span className="detail-text">额外获得</span>
                  <span className="detail-number">9999.99万盛典值</span>
                </div>
              </div>
            </div>
          </div>

          {/* 支线玩法区 */}
          <div className="gameplay-section">
            <div className="section-header">
              <div className="title-row">
                <h3 className="section-title">巅峰1V1对决</h3>
                <div className="timer-badge">05:20</div>
              </div>
              <div className="subtitle-row">
                <span className="subtitle">还剩x次加成获取机会</span>
                <svg className="arrow-icon" viewBox="0 0 10 10">
                  <path d="M3.25 1.5L6.75 5L3.25 8.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="vs-card">
              <div className="player-info">
                <div className="player-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="我方头像" 
                    className="avatar"
                  />
                  <div className="live-badge">
                    <div className="live-dot"></div>
                  </div>
                </div>
                <div className="player-names">
                  <span className="my-name">我方昵称</span>
                  <span className="opponent-name">对方的昵称...</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-track">
                    <div className="progress-left" style={{width: '50%'}}></div>
                  </div>
                  <div className="progress-values">
                    <span className="value-left">9999</span>
                    <span className="value-right">9999</span>
                  </div>
                </div>
              </div>
              
              <div className="player-info opponent">
                <div className="player-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                    alt="对方头像" 
                    className="avatar"
                  />
                  <div className="live-badge">
                    <div className="live-dot"></div>
                  </div>
                </div>
              </div>

              <div className="victory-banner">
                <div className="banner-bg"></div>
                <span className="banner-text">胜方将获得5%加成，败方扣除3%榜值</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
