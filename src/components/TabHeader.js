import React from 'react';
import './TabHeader.css';

const TabHeader = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'captions', label: 'Captions' },
    { id: 'preset', label: 'Preset' },
    { id: 'custom', label: 'Custom' }
  ];

  return (
    <div className="tab-header">
      <div className="tab-header__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-header__tab ${
              activeTab === tab.id ? 'tab-header__tab--active' : ''
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && <div className="tab-header__indicator" />}
          </button>
        ))}
      </div>
      <div className="tab-header__collapse">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="2.5" width="15" height="15" fill="currentColor"/>
          <path d="M0 0.62H1.88V14.37H0V0.62Z" fill="currentColor"/>
          <path d="M3.12 1.7H15V13.3H3.12V1.7Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

export default TabHeader;
