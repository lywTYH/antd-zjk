import { ConfigProvider, Input } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { controlHeight: 28 } }}>
    <Input placeholder="Basic usage" />
  </ConfigProvider>
);

export default App;
