import React from 'react';
import './ConversationItem.css';

const ConversationItem = ({ conversation }) => {
  const { speaker, speakerColor, timeRange, words, isPlaying } = conversation;

  return (
    <div className="conversation-item">
      <div className="conversation-item__header">
        <div className="conversation-item__speaker" style={{ color: speakerColor }}>
          {speaker}
        </div>
        <div className="conversation-item__time">
          {timeRange}
        </div>
      </div>
      <div className="conversation-item__content">
        <div className="conversation-item__text">
          {words.map((word, index) => (
            <span
              key={index}
              className={`conversation-item__word ${
                isPlaying ? 'conversation-item__word--playing' : ''
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
