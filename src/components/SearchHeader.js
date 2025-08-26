import React from 'react';

const SearchHeader = () => {
  return (
    <div className="search-header">
      <button className="back-btn">
        <svg width="8" height="15" viewBox="0 0 8 15" fill="none">
          <path d="M7 1L1 7.5L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="一点点"
          className="search-input"
        />
        <button className="clear-btn">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 1L12 12M12 1L1 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <div className="search-btn-container">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7.5" cy="7.5" r="6" stroke="white" strokeWidth="1.5"/>
          <path d="M13 13L15.5 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>搜索</span>
      </div>
    </div>
  );
};

export default SearchHeader;
