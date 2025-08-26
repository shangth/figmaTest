import React from 'react';
import './TaskPanel.css';
import giftIcon1 from '../assets/gift-icon-1.png';

const TaskPanel = () => {
  const tasks = [
    {
      id: 1,
      icon: giftIcon1,
      title: '超粉初阶任务',
      description: '榜单双倍积分+5382',
      progress: '5382/5000',
      isCompleted: true,
      buttonText: '已完成',
    },
    {
      id: 2,
      icon: giftIcon1,
      title: '超粉初阶任务',
      description: '榜单双倍积分+5382',
      progress: '5382/10000',
      isCompleted: false,
      buttonText: '去开通',
    },
  ];

  return (
    <div className="task-panel">
      <div className="card-header">
        <h2 className="card-title">这是一个标题</h2>
        <p className="card-subtitle">这是一个副标题描述描述描述描述描述</p>
      </div>
      <div className="task-content">
        <div className="task-info">
          <span className="task-info-text">今日已获得双倍积分:</span>
          <span className="task-info-highlight">10736</span>
          <span className="task-info-action">查看榜单 ▼</span>
        </div>
        {tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
            <div className="task-icon-wrapper">
              <img src={task.icon} alt={task.title} className="task-icon" />
              <div className="task-icon-label">1.2倍加成卡</div>
            </div>
            <div className="task-info-wrapper">
              <div className="task-main">
                <div className="task-text">
                  <h3 className="task-title">{task.title}</h3>
                  <p className="task-description">{task.description}</p>
                </div>
                <button className={`task-button ${task.isCompleted ? 'completed' : 'active'}`}>
                  {task.buttonText}
                </button>
              </div>
              <div className="task-progress">
                <span className="progress-text">{task.progress}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPanel;
