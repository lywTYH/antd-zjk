import { Alert, ConfigProvider, Input, Typography } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Typography.Title level={4}>Open single page to check the console</Typography.Title>
    <ConfigProvider warning={{ strict: false }}>
      <Alert closeText="deprecated" />
      <Input.Group />
    </ConfigProvider>
  </>
);

export default App;
