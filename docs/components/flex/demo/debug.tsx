/* eslint-disable react/no-array-index-key */
import { Flex } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Flex vertical>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 60,
            backgroundColor: i % 2 ? '#008EE0' : '#1677ffbf',
          }}
        />
      ))}
    </Flex>
    <Flex style={{ marginTop: 20 }}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '25%',
            height: i % 2 ? 60 : 40,
            backgroundColor: i % 2 ? '#008EE0' : '#1677ffbf',
          }}
        />
      ))}
    </Flex>
  </>
);

export default App;
