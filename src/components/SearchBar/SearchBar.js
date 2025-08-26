import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <div className="search-icon-wrapper">
          <span className="search-icon">🔍</span>
        </div>
        <span className="search-text">女士外套冬季</span>
      </div>
      <div className="search-button">
        <span>搜索</span>
      </div>
    </div>
  );
};

export default SearchBar;
