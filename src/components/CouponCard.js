import React from 'react';
import './CouponCard.css';
import productImage from '../assets/product-image.png';

const CouponCard = () => {
  return (
    <div className="coupon-card">
      {/* 头部区域 */}
      <div className="card-header">
        <div className="title-section">
          <div className="orange-tag">
            <div className="tag-bg"></div>
            <div className="tag-icon"></div>
          </div>
          <span className="store-name">奈雪的茶(和盈中心PRO店)等多店</span>
          <div className="arrow-icon">
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <path d="M2 2L8 7L2 12" stroke="#666666" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="status">待使用</div>
      </div>

      {/* 商品信息区域 */}
      <div className="product-section">
        <div className="product-image">
          <img src={productImage} alt="商品图片" />
          <div className="image-mask"></div>
        </div>
        <div className="product-info">
          <h3 className="product-title">原叶鲜奶茶多选1</h3>
          <p className="expiry-date">有效期至：2023-12-31</p>
          <div className="tags">
            <span className="tag">今日不可用</span>
            <span className="tag">需预约</span>
          </div>
        </div>
        <div className="price-section">
          <div className="price">¥ 178.98</div>
          <div className="quantity">×1</div>
        </div>
      </div>

      {/* 提醒区域 */}
      <div className="reminder">
        请提醒商家使用【门店POS机】核销
      </div>

      {/* 总价区域 */}
      <div className="total-section">
        <div className="total-price">
          <span className="label">实付</span>
          <span className="amount">¥ 178.98</span>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="button-section">
        <button className="btn-secondary">申请退款</button>
        <button className="btn-secondary">再来一单</button>
        <button className="btn-primary">去使用</button>
      </div>
    </div>
  );
};

export default CouponCard;
