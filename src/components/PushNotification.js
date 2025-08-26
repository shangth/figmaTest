import React from 'react';
import './PushNotification.css';
import mainIcon from '../assets/main-icon.svg';
import backArrow from '../assets/back-arrow.svg';

const PushNotification = () => {
  return (
    <div className="push-notification">
      {/* 图标区域 */}
      <div className="icon-container">
        <div className="icon-frame">
          <img src={mainIcon} alt="icon" className="main-icon" />
        </div>
      </div>

      {/* 文本内容区域 */}
      <div className="content-container">
        <div className="main-text">现金打款已到账</div>
        <div className="sub-text">已入账1.2元，点击立即领取</div>
      </div>

      {/* 右侧控制区域 */}
      <div className="controls-container">
        {/* 数字徽章 */}
        <div className="badge-container">
          <div className="badge">
            <span className="badge-number">1</span>
          </div>
          {/* 返回按钮 */}
          <div className="back-button">
            <div className="back-icon-container">
              <img src={backArrow} alt="back" className="back-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
