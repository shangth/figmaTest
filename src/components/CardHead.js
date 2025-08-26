import React from 'react';
import './CardHead.css';

const CardHead = () => {
  return (
    <div className="card-head">
      <div className="card-background">
        <div className="background-gradient">
          <div className="gradient-overlay"></div>
          <div className="blur-circle blur-circle-1"></div>
          <div className="blur-circle blur-circle-2"></div>
        </div>
      </div>
      <div className="card-title">
        <div className="title-row">
          <div className="heart-icons-left">
            <div className="heart-icon"></div>
            <div className="heart-icon small"></div>
          </div>
          <h1 className="main-title">这是一个标题</h1>
          <div className="heart-icons-right">
            <div className="heart-icon"></div>
            <div className="heart-icon small"></div>
          </div>
        </div>
        <p className="subtitle">这是一个副标题描述描述描述描述描述</p>
      </div>
    </div>
  );
};

export default CardHead;
