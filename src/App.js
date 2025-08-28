import React from 'react';
import './App.css';
import productImage from './assets/images/product-image-70f399.png';
import brandLogo from './assets/images/brand-logo-f0923a.png';

function App() {
  return (
    <div className="App">
      <div className="order-card">
        {/* 店铺名称部分 */}
        <div className="shop-header">
          <div className="shop-info">
            <div className="shop-main">
              <div className="shop-brand">
                <div className="brand-badge">
                  <div className="brand-badge-bg">
                    <div className="brand-gradient"></div>
                  </div>
                  <div className="brand-logo">
                    <img src={brandLogo} alt="福利购" />
                  </div>
                </div>
                <span className="shop-name">百媚服饰批发专营店</span>
                <div className="promotion-tag">
                  <span>满40减5</span>
                </div>
              </div>
              <div className="arrow-icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.19 2L12.97 7.78L7.19 13.56" stroke="#C9C9C9" strokeWidth="0.2"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="order-status">
            <span>待发货</span>
          </div>
        </div>

        {/* 商品信息部分 */}
        <div className="product-section">
          <div className="product-image">
            <img src={productImage} alt="商品图片" />
          </div>
          <div className="product-info">
            <div className="product-header">
              <div className="product-brand-small">
                <img src={brandLogo} alt="品牌" />
              </div>
              <div className="product-title">
                <span>秋冬卫衣保暖时尚纯棉美式加绒加大码圆领运动休闲情侣内搭外穿</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product-specs">
                <span>大码XL；白色大码XL；白色大码XL；白色</span>
              </div>
              <div className="service-tags">
                <div className="service-tag green">
                  <span>黑钻特权</span>
                </div>
                <div className="service-tag green">
                  <span>退货包运费</span>
                </div>
                <div className="service-tag orange">
                  <span>极速退款</span>
                </div>
                <div className="service-tag orange">
                  <span>专属客服</span>
                </div>
              </div>
            </div>
          </div>
          <div className="price-section">
            <div className="price-main">
              <div className="currency">¥</div>
              <div className="price-parts">
                <span className="price-major">99</span>
                <span className="price-dot">.</span>
                <span className="price-minor">00</span>
              </div>
            </div>
            <div className="quantity">
              <span>x1</span>
            </div>
          </div>
        </div>

        {/* 发货信息部分 */}
        <div className="shipping-info">
          <div className="shipping-notice">
            <div className="shipping-text">
              <div className="shipping-indicator"></div>
              <span>现货 付款48小时后发货</span>
            </div>
          </div>
        </div>

        {/* 实付款信息 */}
        <div className="payment-info">
          <div className="payment-details">
            <div className="insurance-text">含运费险服务</div>
            <div className="payment-label">实付款</div>
            <div className="final-price">
              <div className="final-currency">¥</div>
              <div className="final-amount">
                <span className="final-major">66</span>
                <span className="final-dot">.</span>
                <span className="final-minor">66</span>
              </div>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="action-buttons">
          <button className="action-btn">
            <span>提醒发货</span>
          </button>
          <button className="action-btn">
            <span>修改地址</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
