import { QRCode, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <QRCode type="canvas" value="#/" />
    <QRCode type="svg" value="#/" />
  </Space>
);

export default App;
