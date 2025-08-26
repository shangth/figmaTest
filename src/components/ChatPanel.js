import React from 'react';
import './ChatPanel.css';
import TabHeader from './TabHeader';
import ConversationArea from './ConversationArea';

const ChatPanel = ({ activeTab, onTabChange }) => {
  return (
    <div className="chat-panel">
      <TabHeader activeTab={activeTab} onTabChange={onTabChange} />
      <ConversationArea />
    </div>
  );
};

export default ChatPanel;
