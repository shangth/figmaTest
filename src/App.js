import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation-container">
        {/* 我的订单 */}
        <div className="nav-item">
          <div className="nav-icon">
            <div className="icon-wrapper">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cc1b646-c10e-4230-9836-8e9ab67ac1aa" 
                alt="order icon 1"
                className="order-icon-1"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c64fae9-8528-4357-a148-f7ab10429f27" 
                alt="order icon 2"
                className="order-icon-2"
              />
            </div>
          </div>
          <span className="nav-text">我的订单</span>
        </div>

        {/* 购物车 */}
        <div className="nav-item">
          <div className="nav-icon">
            <div className="cart-icon-wrapper">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57ca85cf-ed16-4ec2-afa8-cd8b95bc3a07" 
                alt="cart wheel 1"
                className="cart-wheel-1"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c49068c7-dbd9-4f8c-a39b-554150def3e4" 
                alt="cart wheel 2"
                className="cart-wheel-2"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/022c7df6-029a-4984-973a-689f3de4b1fb" 
                alt="cart handle"
                className="cart-handle"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2335fd41-2e0a-4e92-bb20-a0ec9f69c984" 
                alt="cart body"
                className="cart-body"
              />
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/284a3a2e-02db-4fe8-a167-7430777c5427" 
                alt="cart detail"
                className="cart-detail"
              />
            </div>
          </div>
          <span className="nav-text">购物车</span>
        </div>

        {/* 黑钻买家 */}
        <div className="nav-item">
          <div className="nav-icon">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66e1dbb5-7613-49d7-b9b1-606373f291b6" 
              alt="diamond buyer"
              className="diamond-icon"
            />
          </div>
          <span className="nav-text">黑钻买家</span>
        </div>

        {/* 砍价购 */}
        <div className="nav-item">
          <div className="nav-icon">
            <div className="bargain-icon-wrapper">
              <div className="bargain-background">
                <span className="bargain-text">砍</span>
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8e1e818-430c-402e-8dde-fada34fb8095" 
                  alt="bargain bg"
                  className="bargain-bg"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92d045a6-0214-4d18-ac50-02b979a6d00f" 
                  alt="bargain detail"
                  className="bargain-detail"
                />
              </div>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/832a96f8-3a6c-42f8-805b-7bab5d9daa15" 
                alt="bargain overlay"
                className="bargain-overlay"
              />
            </div>
          </div>
          <span className="nav-text">砍价购</span>
        </div>

        {/* 直播爆款 */}
        <div className="nav-item">
          <div className="nav-icon">
            <div className="live-icon-wrapper">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d117695-ec30-49a5-b7b6-0cd2c0ac5cbe" 
                alt="live bg"
                className="live-bg"
              />
              <span className="live-text">爆</span>
            </div>
          </div>
          <span className="nav-text">直播爆款</span>
        </div>

        {/* 进度条 */}
        <div className="progress-bar">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5c45632-8161-474d-b040-fbd75e690a30" 
            alt="progress indicator"
            className="progress-indicator"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
