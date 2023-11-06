import { ConfigProvider, Pagination } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { wireframe: true } }}>
    <Pagination showSizeChanger defaultCurrent={3} total={500} />
    <br />
    <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
    <br />
    <Pagination size="small" defaultCurrent={50} total={500} />
    <br />
    <Pagination disabled size="small" defaultCurrent={50} total={500} />
  </ConfigProvider>
);

export default App;
