import React, { useState } from 'react';
import EditRuleDialog from './components/EditRuleDialog';
import './App.css';

function App() {
  const [dialogVisible, setDialogVisible] = useState(true);

  const handleSave = (values) => {
    console.log('保存的数据:', values);
    setDialogVisible(false);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const showDialog = () => {
    setDialogVisible(true);
  };

  return (
    <div className="App">
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>编辑规则对话框演示</h1>
        <button onClick={showDialog} style={{ 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#165DFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          打开编辑规则对话框
        </button>
      </div>
      
      <EditRuleDialog
        visible={dialogVisible}
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;