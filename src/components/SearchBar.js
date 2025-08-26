import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <button className="back-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="search-input-container">
        <input 
          type="text" 
          placeholder="美甲" 
          className="search-input"
          defaultValue="美甲"
        />
        <button className="clear-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="#C6C6C6" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <button className="search-button">搜索</button>
    </div>
  );
};

export default SearchBar;
