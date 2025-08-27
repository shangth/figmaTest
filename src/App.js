import './App.css';

function App() {
  const handleButtonClick = (buttonText) => {
    console.log(`${buttonText} click`);
  };

  return (
    <div className="App">
      <div className="order-card">
        {/* Header section with store info and status */}
        <div className="header-section">
          <div className="store-info">
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b2ca962-2d68-4b6e-a451-37244aa602de" 
              alt="store-icon" 
              className="store-icon"
            />
            <span className="store-name">
              奈雪的茶(和盈中心<span className="pro-text">PRO</span>店)等多店
            </span>
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59fb7bb8-20c1-408e-b92b-ce133d0b72b9" 
              alt="arrow" 
              className="arrow-icon"
            />
          </div>
          <div className="status-text">待使用</div>
        </div>

        {/* Product section */}
        <div className="product-section">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39d01c16-fa1b-4a74-9f0d-109da60e73a2" 
            alt="product" 
            className="product-image"
          />
          <div className="product-info">
            <div className="product-name">原叶鲜奶茶多选1</div>
            <div className="expiry-date">有效期至：2023-12-31</div>
            <div className="tags-container">
              <div className="tag">今日不可用</div>
              <div className="tag">需预约</div>
            </div>
          </div>
          <div className="price-section">
            <div className="price">¥178.98</div>
            <div className="quantity">×1</div>
          </div>
        </div>

        {/* Notice section */}
        <div className="notice-section">
          <span className="notice-text">
            请提醒商家使用<span className="highlight">【门店POS机】</span>核销
          </span>
        </div>

        {/* Total section */}
        <div className="total-section">
          <span className="total-label">实付</span>
          <span className="total-price">¥178.98</span>
        </div>

        {/* Action buttons */}
        <div className="action-buttons">
          <button 
            className="action-btn secondary"
            onClick={() => handleButtonClick('申请退款')}
          >
            申请退款
          </button>
          <button 
            className="action-btn secondary"
            onClick={() => handleButtonClick('再来一单')}
          >
            再来一单
          </button>
          <button 
            className="action-btn primary"
            onClick={() => handleButtonClick('去使用')}
          >
            去使用
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
