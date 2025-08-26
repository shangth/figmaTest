import React, { useState } from 'react';
import './CaptionEditor.css';
import FunctionPanel from './FunctionPanel';
import ChatPanel from './ChatPanel';

const CaptionEditor = () => {
  const [selectedFunction, setSelectedFunction] = useState('captions');
  const [activeTab, setActiveTab] = useState('captions');

  return (
    <div className="caption-editor">
      <div className="caption-editor__container">
        <FunctionPanel 
          selectedFunction={selectedFunction}
          onFunctionSelect={setSelectedFunction}
        />
        <ChatPanel 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default CaptionEditor;
