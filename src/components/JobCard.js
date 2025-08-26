import React from 'react';
import './JobCard.css';
import womanWorkerImg from '../images/woman-worker.png';
import wechatImg from '../images/wechat-image.png';

const JobCard = () => {
  return (
    <div className="job-card-container">
      {/* 背景图片层 */}
      <div className="background-images">
        <img src={womanWorkerImg} alt="女工" className="woman-worker-bg" />
        <img src={wechatImg} alt="微信图片" className="wechat-bg" />
      </div>
      
      {/* 渐变叠加层 */}
      <div className="gradient-overlay-top"></div>
      <div className="gradient-overlay-bottom"></div>
      <div className="gradient-overlay-final"></div>
      
      {/* 招聘标题 */}
      <div className="job-titles">
        <h1 className="main-title">招保安</h1>
        <h2 className="sub-title">电子厂急招普工保安</h2>
      </div>
      
      {/* 毛玻璃信息卡片 */}
      <div className="info-card">
        {/* 薪资信息 */}
        <div className="salary-section">
          <span className="salary-amount">3000-5000</span>
          <span className="salary-unit">元/月</span>
        </div>
        
        {/* 详细信息 */}
        <div className="details-section">
          <div className="detail-item">
            <div className="detail-title">岗位描述</div>
            <div className="detail-content">
              1、工作内容是安装各种水电器零件<br/>
              2、企业直招/无中介费押金
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-title">福利待遇</div>
            <div className="detail-content">
              1、工作内容是安装各种水电器零件<br/>
              2、企业直招/无中介费押金
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-title">工作地址</div>
            <div className="detail-content">
              北京·昌平区，北京·大兴区
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
