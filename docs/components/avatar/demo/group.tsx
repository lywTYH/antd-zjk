import { UserOutlined } from '@ant-design/icons';
//@ts-ignore
import { Avatar, Divider, Logo, Tooltip } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <a href="#">
        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#008EE0' }} icon={<Logo />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#008EE0' }} icon={<Logo />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#008EE0' }} icon={<Logo />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      maxPopoverTrigger="click"
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#008EE0' }} icon={<Logo />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group shape="square">
      <Avatar style={{ backgroundColor: '#fde3cf' }}>A</Avatar>
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <Avatar style={{ backgroundColor: '#008EE0' }} icon={<Logo />} />
    </Avatar.Group>
  </>
);

export default App;
