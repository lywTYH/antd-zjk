import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title>h1. Csces</Title>
    <Title level={2}>h2. Csces</Title>
    <Title level={3}>h3. Csces</Title>
    <Title level={4}>h4. Csces</Title>
    <Title level={5}>h5. Csces</Title>
  </>
);

export default App;
