import React from 'react';
import './Tag.css';

const Tag = ({ text, type = 'default', small = false }) => {
  const getTagClass = () => {
    let className = 'tag';
    if (small) className += ' tag-small';
    
    switch (type) {
      case 'hot':
        className += ' tag-hot';
        break;
      case 'rating':
        className += ' tag-rating';
        break;
      case 'discount':
        className += ' tag-discount';
        break;
      case 'group':
        className += ' tag-group';
        break;
      case 'live':
        className += ' tag-live';
        break;
      case 'seckill':
        className += ' tag-seckill';
        break;
      case 'gray':
        className += ' tag-gray';
        break;
      case 'badge':
        className += ' tag-badge';
        break;
      default:
        className += ' tag-default';
    }
    
    return className;
  };

  return (
    <div className={getTagClass()}>
      <span className="tag-text">{text}</span>
    </div>
  );
};

export default Tag;
