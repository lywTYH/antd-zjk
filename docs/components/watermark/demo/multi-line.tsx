import { Watermark } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Watermark content={['Csces Design', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
