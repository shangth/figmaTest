import React from 'react';

const DiamondIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <g transform="translate(7, 8.79)">
      <path d="M0 0L30 0L22.5 26.5L7.5 26.5Z" fill="url(#diamondGradient)" rx="7.5"/>
      <path d="M11.25 10.4L18.75 10.4L15 14.15Z" stroke="#FEEBC9" strokeWidth="4"/>
    </g>
    <defs>
      <linearGradient id="diamondGradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="6%" stopColor="rgba(117, 76, 0, 1)"/>
        <stop offset="86%" stopColor="rgba(93, 55, 0, 1)"/>
      </linearGradient>
    </defs>
  </svg>
);

export default DiamondIcon;
