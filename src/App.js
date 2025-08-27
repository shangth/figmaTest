import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background gradient */}
      <div className="background-gradient"></div>
      
      {/* Background decoration image */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55f85db6-c1e7-4b92-a582-129af37112a7" 
        alt="" 
        className="background-decoration"
      />
      
      {/* Status bar */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9e60e36-c713-49bd-8d06-c60b546490bc" 
        alt="Status bar" 
        className="status-bar"
      />
      
      {/* Navigation header */}
      <div className="nav-header">
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d219a3c2-8f62-4286-869c-b959862393df" 
          alt="Back" 
          className="nav-back"
        />
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd62bf1a-1dbb-4ecf-aaa0-400994f78fa8" 
          alt="Title" 
          className="nav-title"
        />
        <div className="nav-right">
          <div className="nav-item">
            <div className="nav-item-content">
              <span className="nav-item-text">客服</span>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3560ce60-a28d-4c71-a5f7-e66dd70fa305" 
                alt="Customer service" 
                className="nav-item-icon"
              />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-content">
              <span className="nav-item-text">规则</span>
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d23bf38-ee53-4268-8629-1230177fdefb" 
                alt="Rules" 
                className="nav-item-icon"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* User card */}
      <div className="user-card">
        <div className="user-card-background"></div>
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a90d738-9e7f-489c-a478-d95d9334ed2d" 
          alt="Decoration" 
          className="user-card-decoration"
        />
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2c8b3e2-ca04-49f5-b004-e72adb77f9f6" 
          alt="Avatar" 
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">美羊羊</span>
          <span className="user-expire">特权有效期至：2024.08.31</span>
        </div>
        <div className="user-badge">
          <div className="user-badge-background"></div>
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f9ed8c2-1c90-441d-ae05-d5d5067578ef" 
            alt="Badge icon" 
            className="user-badge-icon"
          />
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d31e87c-ba68-4a08-aedc-7104b0083bb9" 
            alt="Badge text" 
            className="user-badge-text"
          />
        </div>
        <div className="user-status">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a9737e4-6312-40cc-868c-b26b51d9ad42" 
            alt="Status icon" 
            className="user-status-icon"
          />
          <span className="user-status-text">特权生效中·服务您的购物之旅</span>
        </div>
      </div>
      
      {/* Decoration image */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba017a00-20b8-4338-8f52-1f13a2ca9a78" 
        alt="Decoration" 
        className="section-decoration"
      />
      
      {/* Section title */}
      <h2 className="section-title">尊享5大黑钻特权</h2>
      
      {/* Privilege cards */}
      {/* 1. 退货包运费 */}
      <div className="privilege-card privilege-card-1">
        <div className="privilege-icon-container">
          <div className="privilege-icon-bg"></div>
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a61c13b8-fc33-44cc-b62f-d7d46a83e4a9" 
            alt="Return shipping" 
            className="privilege-icon"
          />
        </div>
        <div className="privilege-content privilege-content-1">
          <h3 className="privilege-title">退货包运费</h3>
          <div className="privilege-badge">
            <span className="privilege-badge-text">本月剩余1次</span>
          </div>
          <p className="privilege-desc">每月6次，上门取件、到站寄使用均可使用</p>
        </div>
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f38cce11-463f-411c-9ff4-832d9b7b347b" 
          alt="Arrow" 
          className="privilege-arrow"
        />
      </div>
      
      {/* 2. 极速退款 */}
      <div className="privilege-card privilege-card-2">
        <div className="privilege-icon-container">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7cc707d-f950-4f3d-9d20-e121b40dae1d" 
            alt="Fast refund bg" 
            className="privilege-icon-bg-img"
          />
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19ef46aa-4c42-4b38-a7ff-da94bcfec5e7" 
            alt="Fast refund" 
            className="privilege-icon"
          />
        </div>
        <div className="privilege-content privilege-content-2">
          <h3 className="privilege-title">极速退款</h3>
          <p className="privilege-desc">每月不限次数享受极速退款权益</p>
        </div>
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d23c02a-5499-410e-b451-581458bb6a03" 
          alt="Arrow" 
          className="privilege-arrow"
        />
      </div>
      
      {/* 3. 专属客服 */}
      <div className="privilege-card privilege-card-3">
        <div className="privilege-icon-container">
          <div className="privilege-icon-bg"></div>
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26e2aee2-ae5a-4022-a41b-6e6a89a6d25c" 
            alt="Customer service" 
            className="privilege-icon"
          />
        </div>
        <div className="privilege-content privilege-content-3">
          <h3 className="privilege-title">专属客服</h3>
          <p className="privilege-desc">优先解答疑问，1v1全程跟进快速处理</p>
        </div>
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b010eaea-4c09-43d2-a8fb-11a205f3850e" 
          alt="Arrow" 
          className="privilege-arrow"
        />
      </div>
      
      {/* 4. 优质取件 */}
      <div className="privilege-card privilege-card-4">
        <div className="privilege-icon-container">
          <div className="privilege-icon-bg"></div>
          <div className="privilege-icon-wrapper">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52d2d138-18b2-4ecc-88db-fe46a1257c10" 
              alt="Quality pickup" 
              className="privilege-icon"
            />
          </div>
        </div>
        <div className="privilege-content privilege-content-4">
          <h3 className="privilege-title">优质取件</h3>
          <p className="privilege-desc">平台补贴，退货取件服务升级</p>
        </div>
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b4220e5-7d02-44d0-9556-1900e2e0d38e" 
          alt="Arrow" 
          className="privilege-arrow"
        />
      </div>
      
      {/* 5. 专属勋章 */}
      <div className="privilege-card privilege-card-5">
        <div className="privilege-icon-container">
          <div className="privilege-icon-bg"></div>
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a3d1b9b-647b-42a1-bc37-bc855f95d0ca" 
            alt="Exclusive badge" 
            className="privilege-icon"
          />
        </div>
        <div className="privilege-content privilege-content-5">
          <h3 className="privilege-title">专属勋章</h3>
          <p className="privilege-desc">自动开启，彰显您的尊贵身份</p>
        </div>
        <img 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f57e0014-ed7a-450d-9ac0-f1745da23739" 
          alt="Arrow" 
          className="privilege-arrow"
        />
      </div>
      
      {/* Bottom decoration */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/320fe28f-8ced-46e3-9579-4ca719e9a0cc" 
        alt="Bottom decoration" 
        className="bottom-decoration"
      />
      
      {/* Bottom bar */}
      <img 
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bff085d5-8f3a-4dc9-a3af-bab921148585" 
        alt="Bottom bar" 
        className="bottom-bar"
      />
    </div>
  );
}

export default App;
