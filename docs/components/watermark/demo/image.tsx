import { Watermark } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Watermark
    height={30}
    width={130}
    image="http://lc-DyybZHGL.cn-n1.lcfile.com/pu1pR2SomxJOG0KcwVsWE9nAe2abA6tk/1701762218605.png
    "
  >
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
