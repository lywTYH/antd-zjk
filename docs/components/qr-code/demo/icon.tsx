import { QRCode } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="http://lc-DyybZHGL.cn-n1.lcfile.com/Ttt7VNdhE5LITG3aNIATPmHilFiogqWz/logo.svg
    "
  />
);

export default App;
