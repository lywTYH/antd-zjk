import { Popover, QRCode } from 'antd';
import React from 'react';

const src = 'http://lc-DyybZHGL.cn-n1.lcfile.com/Ttt7VNdhE5LITG3aNIATPmHilFiogqWz/logo.svg';

const App: React.FC = () => (
  <Popover overlayInnerStyle={{ padding: 0 }} content={<QRCode value={src} bordered={false} />}>
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);

export default App;
