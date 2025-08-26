import React from 'react';
import IconCard from './IconCard';
import ProgressBar from './ProgressBar';
import OrderIcon from './icons/OrderIcon';
import DiamondIcon from './icons/DiamondIcon';
import BargainIcon from './icons/BargainIcon';
import CartIcon from './icons/CartIcon';
import LiveIcon from './icons/LiveIcon';
import './MainContainer.css';

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="icon-grid">
        <IconCard title="我的订单" icon={<OrderIcon />} />
        <IconCard title="黑钻买家" icon={<DiamondIcon />} />
        <IconCard title="砍价购" icon={<BargainIcon />} />
        <IconCard title="购物车" icon={<CartIcon />} />
        <IconCard title="直播爆款" icon={<LiveIcon />} />
      </div>
      <ProgressBar progress={50} />
    </div>
  );
};

export default MainContainer;
