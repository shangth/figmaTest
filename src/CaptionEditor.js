import React from 'react';
import './CaptionEditor.css';

const CaptionEditor = () => {
  const captionData = [
    {
      speaker: "Speaker 1",
      time: "12:00:00-12:00:24",
      words: ["Hey,", "nice", "to", "meet", "you."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 1", 
      time: "12:00:00-12:00:24",
      words: ["My", "name", "is", "David."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 2",
      time: "12:00:00-12:00:24", 
      words: ["I'm", "the", "co-founder", "of", "CyberCut."],
      speakerColor: "#46DB39",
      isPlaying: true
    },
    {
      speaker: "Speaker 2",
      time: "12:00:00-12:00:24",
      words: ["Welcome", "on", "the", "product."],
      speakerColor: "#46DB39",
      isPlaying: true
    },
    {
      speaker: "Speaker 1",
      time: "12:00:00-12:00:24",
      words: ["So", "if", "you", "are", "watching", "this", "video", "is", "probably", "that", "you", "are."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 1",
      time: "12:00:00-12:00:24", 
      words: ["What", "kind", "of", "style", "of", "templates", "and", "style."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 1",
      time: "12:00:00-12:00:24",
      words: ["So", "a", "good", "test", "it."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 1",
      time: "12:00:00-12:00:24",
      words: ["Go", "on", "the", "section", "templates", "and", "style."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 1",
      time: "12:00:00-12:00:24",
      words: ["You", "can", "customize", "it", "and", "as", "well", "you", "can", "go", "on", "the", "B-Rolls."],
      speakerColor: "#B174FF"
    },
    {
      speaker: "Speaker 2",
      time: "12:00:00-12:00:24",
      words: ["Transitions,", "zoom", "effects,", "whatever", "you", "want."],
      speakerColor: "#46DB39"
    },
    {
      speaker: "Speaker 2", 
      time: "12:00:00-12:00:24",
      words: ["Feel", "free", "to", "use", "the", "product."],
      speakerColor: "#46DB39"
    },
    {
      speaker: "Speaker 2",
      time: "12:00:00-12:00:24",
      words: ["If", "you", "have", "any", "question,", "reach", "us", "on", "the", "bottom", "on", "the", "right", "to", "know", "more."],
      speakerColor: "#46DB39"
    }
  ];

  return (
    <div className="caption-editor">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item">
          <div className="sidebar-icon">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3af11e0b-d863-43ae-b61a-42361e981d31" alt="Trim" />
          </div>
          <div className="sidebar-label">Trim</div>
        </div>
        
        <div className="sidebar-item selected">
          <div className="sidebar-icon-container">
            <div className="sidebar-glow"></div>
            <div className="sidebar-icon">
              <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e74039-8b0b-4e5a-ad86-b4a1bea08a73" alt="Captions" />
            </div>
          </div>
          <div className="sidebar-label selected">Captions</div>
        </div>
        
        <div className="sidebar-item">
          <div className="sidebar-icon">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf15427b-50a6-4243-9b1c-5e5bb00a6871" alt="Music" />
          </div>
          <div className="sidebar-label">Music</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="tabs">
            <div className="tab active">
              <span>Captions</span>
              <div className="tab-indicator"></div>
            </div>
            <div className="tab">Preset</div>
            <div className="tab">Custom</div>
          </div>
          <div className="settings-icon">
            <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a351c9c9-c491-40f5-bbce-8afd01a98ce7" alt="Settings" />
          </div>
        </div>

        {/* Caption List */}
        <div className="caption-list">
          {captionData.map((caption, index) => (
            <div key={index} className="caption-item">
              <div className="caption-header">
                <div className="speaker-info">
                  <span className="speaker-name" style={{ color: caption.speakerColor }}>
                    {caption.speaker}
                  </span>
                </div>
                <div className="time-badge">
                  {caption.time}
                </div>
              </div>
              <div className="caption-words">
                {caption.words.map((word, wordIndex) => (
                  <span 
                    key={wordIndex} 
                    className={`word ${caption.isPlaying ? 'playing' : ''}`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Scrollbar */}
          <div className="scrollbar"></div>
        </div>
      </div>
    </div>
  );
};

export default CaptionEditor;