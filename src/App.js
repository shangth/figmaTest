import React from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import RankItem from './components/RankItem';
import { HeatIcon, PKIcon, AudienceIcon, DurationIcon } from './components/TaskIcons';

function App() {
  const taskData = [
    {
      title: '热度值',
      currentValue: 2330,
      targetValue: 120000,
      icon: <HeatIcon />,
      progress: 2330 / 120000
    },
    {
      title: '完成X次PK',
      currentValue: 1,
      targetValue: 5,
      unit: '次',
      icon: <PKIcon />,
      progress: 1 / 5
    },
    {
      title: '评论观众数',
      currentValue: 1,
      targetValue: 5,
      unit: '人',
      icon: <AudienceIcon />,
      progress: 1 / 5
    },
    {
      title: '直播时长',
      currentValue: 2,
      targetValue: 5,
      unit: '分钟',
      icon: <DurationIcon />,
      progress: 2 / 5
    }
  ];

  const largeTaskData = [
    {
      title: '热度值',
      currentValue: 2330,
      targetValue: 12000,
      icon: <HeatIcon />,
      progress: 2330 / 12000
    },
    {
      title: '完成X次PK',
      currentValue: 1,
      targetValue: 5,
      unit: '次',
      icon: <PKIcon />,
      progress: 1 / 5
    },
    {
      title: '评论观众数',
      currentValue: 1,
      targetValue: 5,
      unit: '人',
      icon: <AudienceIcon />,
      progress: 1 / 5
    }
  ];

  const rankData = [
    {
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: true
    },
    {
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: false
    },
    {
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: false
    },
    {
      nickname: '这是个昵称',
      fireValue: '1344555',
      basicScore: '11111',
      performanceScore: '99',
      ranking: '36',
      isLive: false
    }
  ];

  return (
    <div className="App">
      <div className="challenge-section">
        <div className="task-group">
          {taskData.map((task, index) => (
            <TaskCard key={index} {...task} />
          ))}
        </div>
        
        <div className="task-group-large">
          {largeTaskData.map((task, index) => (
            <TaskCard key={index} {...task} large />
          ))}
        </div>
      </div>

      <div className="rank-list">
        {rankData.map((rank, index) => (
          <RankItem key={index} {...rank} />
        ))}
      </div>
    </div>
  );
}

export default App;
