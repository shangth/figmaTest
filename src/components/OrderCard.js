import React from 'react';
import './OrderCard.css';
import productImage from '../assets/images/product-image-70f399.png';
import brandLogo from '../assets/images/brand-logo-f0923a.png';

const OrderCard = () => {
  return (
    <div className="order-card">
      {/* 店铺信息区域 */}
      <div className="store-info">
        <div className="store-header">
          <div className="store-name-section">
            <div className="store-badge">
              <div className="store-badge-bg">
                <div className="store-badge-icon">福利购</div>
              </div>
            </div>
            <span className="store-name">百媚服饰批发专营店</span>
            <div className="discount-badge">满40减5</div>
          </div>
          <div className="arrow-icon">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5.5 4L9.5 7.5L5.5 11" stroke="#C9C9C9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="order-status">待发货</div>
      </div>

      {/* 商品信息区域 */}
      <div className="product-section">
        <div className="product-image-wrapper">
          <img src={productImage} alt="商品图片" className="product-image" />
        </div>
        <div className="product-details">
          <div className="product-title-section">
            <img src={brandLogo} alt="品牌标志" className="brand-logo" />
            <h3 className="product-title">秋冬卫衣保暖时尚纯棉美式加绒加大码圆领运动休闲情侣内搭外穿</h3>
          </div>
          <div className="product-specs">
            <div className="product-variant">大码XL；白色大码XL；白色大码XL；白色</div>
            <div className="service-tags">
              <span className="service-tag green">黑钻特权</span>
              <span className="service-tag green">退货包运费</span>
              <span className="service-tag yellow">极速退款</span>
              <span className="service-tag yellow">专属客服</span>
            </div>
          </div>
        </div>
        <div className="price-section">
          <div className="price-display">
            <span className="currency">¥</span>
            <span className="price-main">99</span>
            <span className="price-decimal">.00</span>
          </div>
          <div className="quantity">x1</div>
        </div>
      </div>

      {/* 发货状态区域 */}
      <div className="shipping-status">
        <div className="shipping-text">
          <span className="status-indicator"></span>
          现货 付款48小时后发货
        </div>
      </div>

      {/* 实付款区域 */}
      <div className="payment-section">
        <div className="insurance-text">含运费险服务</div>
        <div className="payment-label">实付款</div>
        <div className="final-price">
          <span className="final-currency">¥</span>
          <span className="final-price-main">66</span>
          <span className="final-price-decimal">.66</span>
        </div>
      </div>

      {/* 底部按钮区域 */}
      <div className="action-buttons">
        <button className="action-btn outline">提醒发货</button>
        <button className="action-btn outline">修改地址</button>
      </div>
    </div>
  );
};

export default OrderCard;
