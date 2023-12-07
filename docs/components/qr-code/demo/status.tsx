import { QRCode, Space } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <QRCode value="#/" status="loading" />
    <QRCode value="#/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);

export default App;
