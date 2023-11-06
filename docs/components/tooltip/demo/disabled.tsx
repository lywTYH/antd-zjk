import { Button, Checkbox, Input, InputNumber, Select, Space, Tooltip } from 'antd';
import React from 'react';

const WrapperTooltip: React.FC<{ children?: React.ReactNode }> = (props) => (
  <Tooltip title="Thanks for using antd. Have a nice day!" {...props} />
);

const App: React.FC = () => (
  <Space>
    <WrapperTooltip>
      <Button disabled>Disabled</Button>
    </WrapperTooltip>
    <WrapperTooltip>
      <Input disabled placeholder="disabled" />
    </WrapperTooltip>
    <WrapperTooltip>
      <InputNumber disabled />
    </WrapperTooltip>
    <WrapperTooltip>
      <Checkbox disabled />
    </WrapperTooltip>
    <WrapperTooltip>
      <Select disabled />
    </WrapperTooltip>
  </Space>
);

export default App;