import React, { useState } from 'react';
import './EditRuleModal.css';

const EditRuleModal = ({ isOpen, onClose, onSave, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    content: initialData.content || ''
  });
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // 清除对应字段的错误
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = '规则标题不能为空';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = '规则内容不能为空';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({
      title: initialData.title || '',
      content: initialData.content || ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <div className="header-balancer"></div>
          <h2 className="modal-title">编辑规则</h2>
          <button 
            className="close-button"
            onClick={handleCancel}
            aria-label="关闭"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M12 4L4 12M4 4L12 12" 
                stroke="#4E5969" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <form className="form">
            {/* 规则标题 */}
            <div className="form-item">
              <div className="label-item">
                <span className="required-asterisk">*</span>
                <label className="form-label">规则标题</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  className={`form-input ${errors.title ? 'error' : ''}`}
                  placeholder="Please enter"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              {errors.title && <span className="error-text">{errors.title}</span>}
            </div>

            {/* 规则内容 */}
            <div className="form-item">
              <div className="label-item">
                <span className="required-asterisk">*</span>
                <label className="form-label">规则内容</label>
                <button type="button" className="help-button" title="帮助信息">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="#C9CDD4" strokeWidth="1"/>
                    <path d="M7 3.5C6.17 3.5 5.5 4.17 5.5 5H6.5C6.5 4.72 6.72 4.5 7 4.5S7.5 4.72 7.5 5C7.5 5.5 7 5.75 7 6.5H8C8 5.5 8.5 5.25 8.5 4.5C8.5 3.67 7.83 3 7 3V3.5Z" fill="#C9CDD4"/>
                    <circle cx="7" cy="9.5" r="0.5" fill="#C9CDD4"/>
                  </svg>
                </button>
              </div>
              <div className="textarea-wrapper">
                <textarea
                  className={`form-textarea ${errors.content ? 'error' : ''}`}
                  placeholder="Please enter..."
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  rows={5}
                />
                <div className="textarea-resizer">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect width="8" height="8" fill="#606A78" opacity="0.3"/>
                    <rect x="4" y="4" width="3.64" height="3.64" fill="#606A78" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              {errors.content && <span className="error-text">{errors.content}</span>}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="footer-content">
            <div className="button-group">
              <button 
                className="button button-secondary"
                onClick={handleCancel}
              >
                取消
              </button>
              <button 
                className="button button-primary"
                onClick={handleSave}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRuleModal;
