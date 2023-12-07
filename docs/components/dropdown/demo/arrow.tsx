import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import React from 'react';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        3rd menu item
      </a>
    ),
  },
];

const App: React.FC = () => (
  <div id="components-dropdown-demo-arrow">
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown menu={{ items }} placement="topLeft" arrow>
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown menu={{ items }} placement="top" arrow>
      <Button>top</Button>
    </Dropdown>
    <Dropdown menu={{ items }} placement="topRight" arrow>
      <Button>topRight</Button>
    </Dropdown>
  </div>
);

export default App;
