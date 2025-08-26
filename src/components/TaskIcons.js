import React from 'react';

export const HeatIcon = () => (
  <div className="task-icon">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#heatBg)" />
      <g transform="translate(12, 10)">
        <rect x="0" y="2" width="4" height="6" rx="2" fill="url(#heatBar1)" />
        <rect x="6" y="0" width="4" height="8" rx="2" fill="url(#heatBar2)" />
        <rect x="12" y="4" width="4" height="4" rx="2" fill="url(#heatBar3)" />
      </g>
      <defs>
        <linearGradient id="heatBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7E3" />
          <stop offset="100%" stopColor="#FFE4A3" />
        </linearGradient>
        <linearGradient id="heatBar1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7500" />
          <stop offset="100%" stopColor="#FFA24B" />
        </linearGradient>
        <linearGradient id="heatBar2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF5D00" />
          <stop offset="100%" stopColor="#FF8A00" />
        </linearGradient>
        <linearGradient id="heatBar3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7500" />
          <stop offset="100%" stopColor="#FFA24B" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const PKIcon = () => (
  <div className="task-icon">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#pkBg)" />
      <g transform="translate(10, 10)">
        <rect x="0" y="4" width="8" height="12" rx="4" fill="url(#pkLeft)" />
        <rect x="12" y="4" width="8" height="12" rx="4" fill="url(#pkRight)" />
        <text x="10" y="10" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">VS</text>
      </g>
      <defs>
        <linearGradient id="pkBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4A3" />
          <stop offset="100%" stopColor="#FFD1A3" />
        </linearGradient>
        <linearGradient id="pkLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B6EFF" />
          <stop offset="100%" stopColor="#8C88FF" />
        </linearGradient>
        <linearGradient id="pkRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5D73" />
          <stop offset="100%" stopColor="#FF8AAD" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const AudienceIcon = () => (
  <div className="task-icon">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#audienceBg)" />
      <g transform="translate(8, 8)">
        <circle cx="6" cy="6" r="4" fill="url(#audienceHead1)" />
        <circle cx="18" cy="6" r="4" fill="url(#audienceHead2)" />
        <circle cx="12" cy="12" r="4" fill="url(#audienceHead3)" />
        <path d="M2 16c0-4 4-6 8-6s8 2 8 6" stroke="url(#audienceBody)" strokeWidth="2" fill="none" />
      </g>
      <defs>
        <linearGradient id="audienceBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4A3" />
          <stop offset="100%" stopColor="#FFF7E3" />
        </linearGradient>
        <linearGradient id="audienceHead1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B6EFF" />
          <stop offset="100%" stopColor="#8C88FF" />
        </linearGradient>
        <linearGradient id="audienceHead2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5D73" />
          <stop offset="100%" stopColor="#FF8AAD" />
        </linearGradient>
        <linearGradient id="audienceHead3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB74D" />
          <stop offset="100%" stopColor="#FFA24B" />
        </linearGradient>
        <linearGradient id="audienceBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#666" />
          <stop offset="100%" stopColor="#999" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const DurationIcon = () => (
  <div className="task-icon">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="6" fill="url(#durationBg)" />
      <g transform="translate(8, 8)">
        <circle cx="12" cy="12" r="10" stroke="url(#durationRing)" strokeWidth="2" fill="none" />
        <path d="M12 6v6l4 4" stroke="url(#durationHand)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <linearGradient id="durationBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4A3" />
          <stop offset="100%" stopColor="#FFF7E3" />
        </linearGradient>
        <linearGradient id="durationRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4B6EFF" />
          <stop offset="100%" stopColor="#8C88FF" />
        </linearGradient>
        <linearGradient id="durationHand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5D73" />
          <stop offset="100%" stopColor="#FF8AAD" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
