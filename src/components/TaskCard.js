import React from 'react';
import './TaskCard.css';

const TaskCard = ({ 
  title, 
  currentValue, 
  targetValue, 
  unit = '',
  icon,
  progress = 0.5,
  large = false 
}) => {
  const progressPercentage = (currentValue / targetValue) * 100;

  return (
    <div className={`task-card ${large ? 'task-card--large' : ''}`}>
      <div className="task-card__header">
        <div className="task-card__content">
          <div className="task-card__title">{title}</div>
          <div className="task-card__progress-text">
            <span className="task-card__current">{currentValue}</span>
            <span className="task-card__target">/{targetValue}{unit}</span>
          </div>
        </div>
        {!large && (
          <div className="task-card__icon">
            {icon}
          </div>
        )}
      </div>
      
      {large && (
        <div className="task-card__icon task-card__icon--large">
          {icon}
        </div>
      )}
      
      <div className="task-card__progress-bar">
        <div className="task-card__progress-track">
          <div 
            className="task-card__progress-fill"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
