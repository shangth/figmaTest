import React from 'react';
import './TaskCard.css';
import taskIcon from '../assets/task-icon.png';

const TaskCard = ({ 
  title = "超粉初阶任务", 
  description = "榜单双倍积分+5382", 
  progress = "5382/5000", 
  buttonText = "去开通", 
  isCompleted = false,
  progressPercentage = 100 
}) => {
  return (
    <div className="task-card">
      <div className={`task-icon ${isCompleted ? 'completed' : ''}`}>
        <img src={taskIcon} alt="任务图标" />
        <span className="task-icon-text">1.2倍加成卡</span>
      </div>
      <div className="task-content">
        <div className="task-main-info">
          <div className={`task-details ${isCompleted ? 'completed' : ''}`}>
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
          </div>
          <button className={`task-button ${isCompleted ? 'completed' : 'primary'}`}>
            {isCompleted ? '已完成' : buttonText}
          </button>
        </div>
        <div className={`task-progress ${isCompleted ? 'completed' : ''}`}>
          <div className="progress-bar" style={{width: `${Math.min(progressPercentage, 100)}%`}}>
            <span className="progress-text">{progress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
