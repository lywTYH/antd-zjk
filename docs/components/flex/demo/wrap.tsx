import { Button, Flex } from 'antd';
import React from 'react';

const Demo: React.FC = () => (
  <Flex wrap="wrap" gap="small">
    {Array.from({ length: 24 }, (_, i) => (
      <Button key={i} type="primary">
        Button
      </Button>
    ))}
  </Flex>
);

export default Demo;
