import React from 'react';
import './ConversationArea.css';
import ConversationItem from './ConversationItem';

const ConversationArea = () => {
  const conversations = [
    {
      id: 1,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['Hey,', 'nice', 'to', 'meet', 'you.'],
      isPlaying: false
    },
    {
      id: 2,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['My', 'name', 'is', 'David.'],
      isPlaying: false
    },
    {
      id: 3,
      speaker: 'Speaker 2',
      speakerColor: '#46DB39',
      timeRange: '12:00:00-12:00:24',
      words: ['I\'m', 'the', 'co-founder', 'of', 'CyberCut.'],
      isPlaying: true
    },
    {
      id: 4,
      speaker: 'Speaker 2',
      speakerColor: '#46DB39',
      timeRange: '12:00:00-12:00:24',
      words: ['Welcome', 'on', 'the', 'product.'],
      isPlaying: false
    },
    {
      id: 5,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['So', 'if', 'you', 'are', 'watching', 'this', 'video', 'is', 'probably', 'that', 'you', 'are.'],
      isPlaying: false
    },
    {
      id: 6,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['What', 'kind', 'of', 'style', 'of', 'templates', 'and', 'style.'],
      isPlaying: false
    },
    {
      id: 7,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['So', 'a', 'good', 'test', 'it.'],
      isPlaying: false
    },
    {
      id: 8,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['Go', 'on', 'the', 'section', 'templates', 'and', 'style.'],
      isPlaying: false
    },
    {
      id: 9,
      speaker: 'Speaker 1',
      speakerColor: '#B174FF',
      timeRange: '12:00:00-12:00:24',
      words: ['You', 'can', 'customize', 'it', 'and', 'as', 'well', 'you', 'can', 'go', 'on', 'the', 'B-Rolls.'],
      isPlaying: false
    },
    {
      id: 10,
      speaker: 'Speaker 2',
      speakerColor: '#46DB39',
      timeRange: '12:00:00-12:00:24',
      words: ['Transitions,', 'zoom', 'effects,', 'whatever', 'you', 'want.'],
      isPlaying: false
    },
    {
      id: 11,
      speaker: 'Speaker 2',
      speakerColor: '#46DB39',
      timeRange: '12:00:00-12:00:24',
      words: ['Feel', 'free', 'to', 'use', 'the', 'product.'],
      isPlaying: false
    },
    {
      id: 12,
      speaker: 'Speaker 2',
      speakerColor: '#46DB39',
      timeRange: '12:00:00-12:00:24',
      words: ['If', 'you', 'have', 'any', 'question,', 'reach', 'us', 'on', 'the', 'bottom', 'on', 'the', 'right', 'to', 'know', 'more.'],
      isPlaying: false
    }
  ];

  return (
    <div className="conversation-area">
      {conversations.map((conversation) => (
        <ConversationItem 
          key={conversation.id}
          conversation={conversation}
        />
      ))}
      <div className="conversation-area__indicator" />
    </div>
  );
};

export default ConversationArea;
