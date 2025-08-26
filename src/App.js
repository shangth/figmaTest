import React, { useState } from 'react';
import './App.css';
import EditRuleModal from './components/EditRuleModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ruleData, setRuleData] = useState({
    title: '',
    content: ''
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveRule = (data) => {
    setRuleData(data);
    console.log('保存规则数据:', data);
    // 这里可以添加保存到后端的逻辑
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>编辑规则 Demo</h1>
        <p>点击下方按钮打开编辑规则模态框</p>
        
        <button 
          className="demo-button"
          onClick={handleOpenModal}
        >
          打开编辑规则
        </button>

        {ruleData.title && (
          <div className="rule-display">
            <h3>当前规则:</h3>
            <p><strong>标题:</strong> {ruleData.title}</p>
            <p><strong>内容:</strong> {ruleData.content}</p>
          </div>
        )}
      </header>

      <EditRuleModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveRule}
        initialData={ruleData}
      />
    </div>
  );
}

export default App;
