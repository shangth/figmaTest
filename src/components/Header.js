import React from 'react';
import './Header.css';
import headerBg from '../assets/header-bg.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <img src={headerBg} alt="header background" className="header-bg-image" />
        <div className="header-overlay"></div>
      </div>
      <div className="header-content">
        <h1 className="header-title">
          <span className="header-title-shadow">超粉团召集令</span>
          <span className="header-title-main">超粉团召集令</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
