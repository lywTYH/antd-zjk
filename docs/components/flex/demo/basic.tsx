/* eslint-disable react/no-array-index-key */
import { Flex, Radio } from 'antd';
import React from 'react';

const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 54,
};

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('horizontal');
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#008EE0' : '#1677ffbf' }} />
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
