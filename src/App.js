import './App.css';

function App() {
  const handleButtonClick = (buttonText) => {
    console.log(buttonText + ' click');
  };

  return (
    <div className="App">
      <div className="order-card">
        {/* Header */}
        <div className="order-header">
          <div className="shop-info">
            <div className="shop-details">
              <div className="shop-badge">
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7c4580f-8157-4808-902e-0250b9aa0b4b" 
                  alt="shop background"
                  className="shop-badge-bg"
                />
                <img 
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e65ce1e-19cb-4d7e-82f8-0c2ca997aa57" 
                  alt="shop logo"
                  className="shop-badge-logo"
                />
              </div>
              <span className="shop-name">百媚服饰批发专营店</span>
              <div className="promotion-tag">
                <span>满40减5</span>
              </div>
            </div>
            <img 
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42a61af2-3ab8-4f58-b652-d4f708dfb599" 
              alt="arrow"
              className="arrow-icon"
            />
          </div>
          <div className="order-status">待发货</div>
        </div>

        {/* Product Info */}
        <div className="product-section">
          <img 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc1f5cd6-dadb-4a9e-90e6-0ae7e35c7e29" 
            alt="product"
            className="product-image"
          />
          <div className="product-details">
            <div className="product-title-row">
              <img 
                src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42bea0f2-67ca-4347-a74c-faf9075f7fcd" 
                alt="brand tag"
                className="brand-tag"
              />
              <span className="product-title">秋冬卫衣保暖时尚纯棉美式加绒加大码圆领运动休闲情侣内搭外穿</span>
            </div>
            <div className="product-info">
              <div className="product-specs">大码XL；白色大码XL；白色大码XL；白色</div>
              <div className="service-tags">
                <div className="service-tag">黑钻特权</div>
                <div className="service-tag">退货包运费</div>
                <div className="service-tag">极速退款</div>
                <div className="service-tag">专属客服</div>
              </div>
            </div>
          </div>
          <div className="price-quantity">
            <div className="price">
              <span className="currency">¥</span>
              <span className="price-main">99</span>
              <span className="price-decimal">.</span>
              <span className="price-cents">00</span>
            </div>
            <div className="quantity">x1</div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="shipping-info">
          <div className="shipping-text">现货 付款48小时后发货</div>
        </div>

        {/* Footer */}
        <div className="order-footer">
          <div className="footer-left">含运费险服务</div>
          <div className="footer-center">实付款</div>
          <div className="total-price">
            <span className="total-currency">¥</span>
            <span className="total-main">66</span>
            <span className="total-decimal">.</span>
            <span className="total-cents">66</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            className="action-btn"
            onClick={() => handleButtonClick('提醒发货')}
          >
            提醒发货
          </button>
          <button 
            className="action-btn"
            onClick={() => handleButtonClick('修改地址')}
          >
            修改地址
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
