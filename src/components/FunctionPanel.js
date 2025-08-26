import React from 'react';
import './FunctionPanel.css';

const FunctionPanel = ({ selectedFunction, onFunctionSelect }) => {
  const functions = [
    {
      id: 'trim',
      name: 'Trim',
      icon: (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path d="M20.17 16.29H0V0H20.17V16.29Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'captions',
      name: 'Captions',
      icon: (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <rect x="4" y="6" width="12" height="6" fill="currentColor"/>
          <rect x="0" y="0" width="20" height="16" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'music',
      name: 'Music',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M20 0V19.59H0V0H20Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="function-panel">
      <div className="function-panel__list">
        {functions.map((func) => (
          <button
            key={func.id}
            className={`function-panel__item ${
              selectedFunction === func.id ? 'function-panel__item--selected' : ''
            }`}
            onClick={() => onFunctionSelect(func.id)}
          >
            <div className="function-panel__icon">
              {func.icon}
            </div>
            <div className="function-panel__label">
              {func.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FunctionPanel;
