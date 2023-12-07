import { Button, Empty } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Empty
    image="http://lc-DyybZHGL.cn-n1.lcfile.com/7shpovbLd1sjFvkdVY1mvzwPmdgxfj17/%E6%9A%82%E6%97%A0%E5%86%85%E5%AE%B9.svg"
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);

export default App;
