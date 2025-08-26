import React, { useState } from 'react';
import { Modal, Input, Button, Form } from '@arco-design/web-react';
import { IconClose, IconQuestionCircle } from '@arco-design/web-react/icon';
import '@arco-design/web-react/dist/css/arco.css';
import './EditRuleDialog.css';

const EditRuleDialog = ({ visible, onCancel, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validate().then((values) => {
      onSave(values);
    });
  };

  return (
    <Modal
      title={null}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={480}
      className="edit-rule-dialog"
      maskClosable={false}
    >
      <div className="dialog-container">
        {/* Header */}
        <div className="dialog-header">
          <div className="dialog-title">编辑规则</div>
          <IconClose className="close-icon" onClick={onCancel} />
        </div>

        {/* Content */}
        <div className="dialog-content">
          <Form form={form} layout="vertical">
            {/* Rule Title Field */}
            <Form.Item
              label={
                <div className="form-label">
                  <span className="required-dot"></span>
                  <span>规则标题</span>
                </div>
              }
              field="title"
              rules={[{ required: true, message: '请输入规则标题' }]}
            >
              <Input
                placeholder="Please enter"
                className="form-input"
              />
            </Form.Item>

            {/* Rule Content Field */}
            <Form.Item
              label={
                <div className="form-label">
                  <span className="required-dot"></span>
                  <span>规则内容</span>
                  <IconQuestionCircle className="help-icon" />
                </div>
              }
              field="content"
              rules={[{ required: true, message: '请输入规则内容' }]}
            >
              <Input.TextArea
                placeholder="Please enter..."
                className="form-textarea"
                rows={5}
              />
            </Form.Item>
          </Form>
        </div>

        {/* Footer */}
        <div className="dialog-footer">
          <div className="button-group">
            <Button className="cancel-button" onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" className="save-button" onClick={handleSave}>
              保存
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditRuleDialog;