import './App.css';
import './AppStyles.css';

function App() {
  const handleButtonClick = (buttonText) => {
    console.log(buttonText + " click");
  };

  return (
    <div className="app-container">
      {/* Main Container */}
      <div className="main-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-background">
            <div className="hero-content">
              <div className="hero-image-container">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa5703a5-d44c-4471-a9f9-ab739ce69ec9" 
                  alt="Hero" 
                  className="hero-image"
                />
              </div>
            </div>
            <div className="hero-gradient-overlay"></div>
          </div>
        </div>

        {/* Progress and Avatar Section */}
        <div className="progress-avatar-section">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bd9d7d1-7290-4e70-8ad0-09c62fdcb808" 
            alt="Progress" 
            className="progress-icon"
          />
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e56146ce-4cf4-48af-a364-648def07ee02" 
            alt="Avatar" 
            className="avatar-image"
          />
        </div>

        {/* Rewards Grid */}
        <div className="rewards-grid">
          {/* Reward Item 1 */}
          <div className="reward-item active">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9add126-2437-455a-8783-9011682d1078" 
              alt="Reward 1" 
              className="reward-icon"
            />
            <div className="reward-name">名称名称名称</div>
            <div className="reward-exchange-btn">
              <div className="exchange-content">
                <div className="exchange-info">
                  <span className="exchange-number">430</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c21cacbf-2b5f-4190-b4fe-d2db2c21bf82" 
                    alt="Star" 
                    className="star-icon"
                  />
                </div>
                <span className="exchange-text">兑换</span>
              </div>
            </div>
          </div>

          {/* Reward Item 2 */}
          <div className="reward-item active">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fd8b8ce-1ba2-4daa-8b2c-d032469c411e" 
              alt="Reward 2" 
              className="reward-icon"
            />
            <div className="reward-name">名称名称名称</div>
            <div className="reward-exchange-btn">
              <div className="exchange-content">
                <div className="exchange-info">
                  <span className="exchange-number">255</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae82ba05-ed4e-4cc7-b2ba-5fcf072f754b" 
                    alt="Star" 
                    className="star-icon"
                  />
                </div>
                <span className="exchange-text">兑换</span>
              </div>
            </div>
          </div>

          {/* Reward Item 3 */}
          <div className="reward-item inactive">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/698f0d2b-422a-4a73-86d4-4df85885f82a" 
              alt="Reward 3" 
              className="reward-icon"
            />
            <div className="reward-name">春季之星礼物</div>
            <div className="reward-exchange-btn inactive">
              <div className="exchange-content">
                <div className="exchange-info">
                  <span className="exchange-number">40</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ebba0ab-54ec-401f-af78-ded319c41b19" 
                    alt="Star" 
                    className="star-icon"
                  />
                </div>
                <span className="exchange-text">兑换</span>
              </div>
            </div>
          </div>

          {/* Reward Item 4 */}
          <div className="reward-item inactive">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e415efe3-2d18-4dce-9790-c40e24409dfc" 
              alt="Reward 4" 
              className="reward-icon"
            />
            <div className="reward-name">1%加成</div>
            <div className="reward-exchange-btn inactive">
              <div className="exchange-content">
                <div className="exchange-info">
                  <span className="exchange-number">40</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bf89da6-d94a-46a3-ab5b-ea2ad468557f" 
                    alt="Star" 
                    className="star-icon"
                  />
                </div>
                <span className="exchange-text">兑换</span>
              </div>
            </div>
          </div>
        </div>

        {/* Red Packets Section */}
        <div className="red-packets-section">
          <div className="red-packets-container">
            <div className="red-packet-group">
              <div className="red-packet-item">
                <div className="red-packet-bg">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08e78a10-db9d-4e6e-9a12-8d17fdb83338" 
                    alt="Red Packet 1" 
                    className="red-packet-image"
                  />
                </div>
                <div className="red-packet-btn">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/582397a5-6477-4155-a29c-46549406e7eb" 
                    alt="Button BG" 
                    className="btn-bg"
                  />
                  <span className="btn-text">立即抢</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c900e21d-cf47-4598-ad7e-c8874682c04e" 
                    alt="Icon" 
                    className="btn-icon"
                  />
                </div>
                <div className="red-packet-text">开</div>
              </div>

              <div className="red-packet-item">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/daa58e65-d879-4834-83cb-888be17bf34c" 
                  alt="Red Packet 2" 
                  className="red-packet-image"
                />
                <div className="red-packet-btn">
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b455331b-d870-4ac9-a5b5-4f465f35ac00" 
                    alt="Button BG" 
                    className="btn-bg"
                  />
                  <span className="btn-text">立即抢</span>
                  <img 
                    src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84c45bfa-ebf0-4141-90c3-e5bbb2ede7d3" 
                    alt="Icon" 
                    className="btn-icon"
                  />
                </div>
                <div className="red-packet-text">开</div>
              </div>
            </div>

            <div className="special-red-packet">
              <div className="special-packet-bg">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b0767ef-0751-4d9e-81a4-0922ea0322bd" 
                  alt="Special Packet" 
                  className="special-packet-image"
                />
                <div className="special-packet-text">盛典<br/>状元</div>
              </div>
              <div className="special-packet-btn">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62002ee5-c367-4477-86a9-388dea065a7d" 
                  alt="Button BG" 
                  className="btn-bg"
                />
                <span className="btn-text">领复活卡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="info-banner">
          <div className="info-content">
            <span className="info-text">集星兑豪礼 钻石主播得额外流量</span>
            <div className="info-action">
              <span className="action-text">去签约</span>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86a6f5b8-27b1-42c5-b574-39f27cc03f71" 
                alt="Arrow" 
                className="action-arrow"
              />
            </div>
          </div>
        </div>

        {/* Progress Badge */}
        <div className="progress-badge">
          <span className="progress-number">600</span>
          <span className="progress-text">/100星领取</span>
          <span className="progress-note">不消耗</span>
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a421085-aca2-473d-8561-169845869175" 
            alt="Star" 
            className="progress-star"
          />
        </div>

        {/* Navigation Icon */}
        <div className="nav-icon">
          <div className="nav-icon-container">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bc8ee55-119c-4506-a75d-81d1071bba4d" 
              alt="Nav Icon" 
              className="nav-icon-bg"
            />
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/819a8b3f-6647-4cda-8e3c-3ba6027b54f2" 
              alt="Nav Icon Top" 
              className="nav-icon-top"
            />
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/667c668c-a873-4fa7-97ff-5ebf7efab6a1" 
              alt="Nav Icon Bottom" 
              className="nav-icon-bottom"
            />
            <div className="nav-icon-text">集星规则</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;