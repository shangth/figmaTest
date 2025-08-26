import './App.css';

function App() {
  return (
    <div className="App">
      <div className="coin-reward-modal">
        <div className="modal-panel">
          <div className="gradient-background">
            <div className="gradient-mask"></div>
            <div className="gradient-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-6"></div>
            </div>
          </div>
          
          <div className="modal-content">
            <div className="header-section">
              <h1 className="title">「拍作品赚金币」收益</h1>
              <p className="subtitle">token - 感谢你6月8日-6月9日的努力</p>
            </div>
            
            <div className="content-area">
              <div className="total-coins">
                <span className="plus-sign">+</span>
                <span className="coin-amount">704</span>
                <span className="coin-text">金币</span>
              </div>
              
              <div className="coin-icon-container">
                <div className="coin-icon">
                  <svg viewBox="0 0 47 26" fill="none">
                    <path d="M23.5 13C23.5 6.1 18.4 0.5 12 0.5C5.6 0.5 0.5 6.1 0.5 13C0.5 19.9 5.6 25.5 12 25.5C18.4 25.5 23.5 19.9 23.5 13Z" fill="#F8F8F8"/>
                  </svg>
                </div>
              </div>
              
              <div className="rewards-breakdown">
                <div className="reward-item">
                  <div className="reward-amount">
                    <span className="plus">+</span>
                    <span className="number">300</span>
                    <span className="unit">金币</span>
                  </div>
                  <div className="reward-label">发布奖励</div>
                </div>
                
                <div className="reward-item">
                  <div className="reward-amount">
                    <span className="plus">+</span>
                    <span className="number">100</span>
                    <span className="unit">金币</span>
                  </div>
                  <div className="reward-label">播放奖励</div>
                </div>
                
                <div className="reward-item">
                  <div className="reward-amount">
                    <span className="plus">+</span>
                    <span className="number">276</span>
                    <span className="unit">金币</span>
                  </div>
                  <div className="reward-label">点赞奖励</div>
                </div>
                
                <div className="reward-item">
                  <div className="reward-amount">
                    <span className="plus">+</span>
                    <span className="number">28</span>
                    <span className="unit">金币</span>
                  </div>
                  <div className="reward-label">评论奖励</div>
                </div>
              </div>
            </div>
            
            <button className="action-button">
              开启新一轮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
