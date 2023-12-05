import type { QRCodeProps } from 'antd';
import { QRCode, Segmented } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [level, setLevel] = useState<string | number>('L');
  return (
    <>
      <QRCode
        style={{ marginBottom: 16 }}
        errorLevel={level as QRCodeProps['errorLevel']}
        value="http://lc-DyybZHGL.cn-n1.lcfile.com/Ttt7VNdhE5LITG3aNIATPmHilFiogqWz/logo.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};

export default App;
