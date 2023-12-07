import { Space, Typography } from 'antd';
import React from 'react';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>Csces (default)</Text>
    <Text type="secondary">Csces (secondary)</Text>
    <Text type="success">Csces (success)</Text>
    <Text type="warning">Csces (warning)</Text>
    <Text type="danger">Csces (danger)</Text>
    <Text disabled>Csces (disabled)</Text>
    <Text mark>Csces (mark)</Text>
    <Text code>Csces (code)</Text>
    <Text keyboard>Csces (keyboard)</Text>
    <Text underline>Csces (underline)</Text>
    <Text delete>Csces (delete)</Text>
    <Text strong>Csces (strong)</Text>
    <Text italic>Csces (italic)</Text>
    <Link href="#" target="_blank">
      Csces (Link)
    </Link>
  </Space>
);

export default App;
