import { Button, Modal, Space } from 'antd';
import React, { useState } from 'react';

//
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('default');

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setType('default');
            showModal();
          }}
        >
          Open Modal (default)
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setType('primary');
            showModal();
          }}
        >
          Open Modal (primary)
        </Button>
      </Space>
      {/* @ts-ignore */}
      <Modal
        type={type}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default App;
