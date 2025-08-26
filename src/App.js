import React from 'react';
import './App.css';
import { CardHead, InfoCard, TaskCard } from './components';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <CardHead />
        <div className="content-section">
          <InfoCard />
          <TaskCard 
            title="超粉初阶任务"
            description="榜单双倍积分+5382"
            progress="5382/5000"
            buttonText="已完成"
            isCompleted={true}
            progressPercentage={100}
          />
          <TaskCard 
            title="超粉初阶任务"
            description="榜单双倍积分+5382"
            progress="5382/10000"
            buttonText="去开通"
            isCompleted={false}
            progressPercentage={54}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
