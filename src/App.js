import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-background">
          <div className="header-content">
            <div className="background-images">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd2b69ef-039d-44ca-9417-c5ffb49ef1af" 
                alt="" 
                className="bg-image main-bg"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb28416f-e445-4f3c-a962-0c0cd2e00490" 
                alt="" 
                className="bg-image left-bottom"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/826c10f0-cf24-4728-b9a2-3843a18d4b65" 
                alt="" 
                className="bg-image left-bottom-overlay"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09a41c72-f78c-4334-b5b6-0b4cc20850e6" 
                alt="" 
                className="bg-image right-bottom"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e84c0b4-9aa1-438d-8e68-a0f2dc4d8c04" 
                alt="" 
                className="bg-image right-bottom-overlay"
              />
            </div>
            <div className="gradient-overlay"></div>
            <div className="title-text">超粉团召集令</div>
            <div className="title-text-gradient">超粉团召集令</div>
          </div>
        </div>
        <div className="header-gradient-bottom"></div>
      </div>

      {/* First Card */}
      <div className="card first-card">
        <div className="card-header">
          <div className="card-bg">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b2fdef7-5f90-4924-8ee4-d7172496f56a" 
              alt="" 
              className="card-bg-image"
            />
          </div>
          <div className="card-title-section">
            <div className="card-title-row">
              <div className="title-icon">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5b536cb-607e-43c6-b2fb-249ef4040345" 
                  alt="" 
                  className="heart-icon"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08534873-f1cb-468f-a251-eb62728fc31a" 
                  alt="" 
                  className="heart-icon-inner"
                />
              </div>
              <div className="card-title">这是一个标题</div>
              <div className="title-icon rotated">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e88db76b-e5e0-4c0f-a247-da6f1ecb16c1" 
                  alt="" 
                  className="heart-icon"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22517e95-474f-4fd8-86ef-711f5bec7d5b" 
                  alt="" 
                  className="heart-icon-inner"
                />
              </div>
            </div>
            <div className="card-subtitle">这是一个副标题描述描述描述描述描述</div>
          </div>
        </div>
        <div className="rewards-section">
          <div className="reward-item">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22ce40ed-e896-433f-aa1c-630f74d71a71" 
              alt="" 
              className="reward-icon"
            />
            <div className="reward-text">
              <div className="reward-title">1.2倍加成卡</div>
              <div className="reward-desc">获得5000积分可得</div>
            </div>
          </div>
          <div className="reward-item">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4a47589-bc27-4889-ab8b-20e59926f29c" 
              alt="" 
              className="reward-icon"
            />
            <div className="reward-text">
              <div className="reward-title">1.2倍加成卡</div>
              <div className="reward-desc">获得10000再得一张</div>
            </div>
          </div>
          <div className="reward-item">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/105c2b61-e34a-411a-8135-db4a675901fc" 
              alt="" 
              className="reward-icon"
            />
            <div className="reward-text">
              <div className="reward-title">双倍榜单积分</div>
              <div className="reward-desc">开通积分翻倍</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="card second-card">
        <div className="card-header">
          <div className="card-bg">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4a4eb24-b7a3-47ef-81ad-f704cc7368b8" 
              alt="" 
              className="card-bg-image"
            />
          </div>
          <div className="card-title-section">
            <div className="card-title-row">
              <div className="title-icon">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/136e07e7-e1a5-4dd3-aae2-61cb0569daf4" 
                  alt="" 
                  className="heart-icon"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5758d195-f804-4899-b1d1-fc079bb0f4d6" 
                  alt="" 
                  className="heart-icon-inner"
                />
              </div>
              <div className="card-title">这是一个标题</div>
              <div className="title-icon rotated">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df779bd3-d1ed-4845-b4d0-b9dbcde54b2d" 
                  alt="" 
                  className="heart-icon"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4560f0a3-c3f5-4a88-ac66-647180d7645c" 
                  alt="" 
                  className="heart-icon-inner"
                />
              </div>
            </div>
            <div className="card-subtitle">这是一个副标题描述描述描述描述描述</div>
          </div>
        </div>
        <div className="tasks-section">
          <div className="info-bar">
            <div className="info-left">
              <span className="info-text">今日已获得双倍积分:</span>
              <span className="info-highlight">10736</span>
            </div>
            <div className="info-right">
              <span className="info-text">查看榜单</span>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4e96e32-b8a0-41c0-b497-2630c065fc74" 
                alt="" 
                className="arrow-icon"
              />
            </div>
          </div>
          <div className="task-item completed">
            <div className="task-icon">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9ebefb8-e5c6-4181-b2e9-fad1dc86ec70" 
                alt="" 
                className="task-reward-icon"
              />
              <div className="task-icon-text">1.2倍加成卡</div>
            </div>
            <div className="task-content">
              <div className="task-info">
                <div className="task-title">超粉初阶任务</div>
                <div className="task-desc">榜单双倍积分+5382</div>
              </div>
              <button className="task-button completed-button">已完成</button>
            </div>
            <div className="progress-bar">
              <div className="progress-fill completed-progress">
                <span className="progress-text">5382/5000</span>
              </div>
            </div>
          </div>
          <div className="task-item">
            <div className="task-icon">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93b41a74-84be-4c21-a61d-23ed55d5b6ee" 
                alt="" 
                className="task-reward-icon"
              />
              <div className="task-icon-text">1.2倍加成卡</div>
            </div>
            <div className="task-content">
              <div className="task-info">
                <div className="task-title">超粉初阶任务</div>
                <div className="task-desc">榜单双倍积分+5382</div>
              </div>
              <button className="task-button primary-button" onClick={() => alert('去开通 click')}>
                <span>去开通</span>
              </button>
            </div>
            <div className="progress-bar">
              <div className="progress-fill partial-progress">
                <span className="progress-text">5382/10000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="bottom-text">
        <div className="bottom-text-bg"></div>
        <span className="bottom-text-content">成为金粉钻粉助主播赢加成卡</span>
      </div>
    </div>
  );
}

export default App;
