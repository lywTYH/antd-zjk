import { QRCode, Space, theme } from 'antd';
import React from 'react';

const { useToken } = theme;

const App: React.FC = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode value="#/" color={token.colorSuccessText} />
      <QRCode value="#/" color={token.colorInfoText} bgColor={token.colorBgLayout} />
    </Space>
  );
};

export default App;
