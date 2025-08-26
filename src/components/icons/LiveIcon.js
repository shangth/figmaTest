import React from 'react';

const LiveIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <g transform="translate(8, 6)">
      {/* 主要形状 */}
      <path d="M0 5.54L24.6 0L28 32L3.4 26.46Z" fill="#FE364D"/>
      <path d="M0 0L28 0L28 32L0 32Z" fill="#D1423D"/>
      
      {/* 小圆形装饰 */}
      <circle cx="23.71" cy="12.38" r="3.31" fill="#FD8D8D"/>
      
      {/* 文字 */}
      <text x="14" y="20" textAnchor="middle" fill="white" fontSize="13" fontWeight="500" opacity="0.95">爆</text>
    </g>
  </svg>
);

export default LiveIcon;
