import { Avatar, List } from 'antd';
import React from 'react';

const data = [
  {
    title: 'Csces Title 1',
  },
  {
    title: 'Csces Title 2',
  },
  {
    title: 'Csces Title 3',
  },
  {
    title: 'Csces Title 4',
  },
];

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="#">{item.title}</a>}
          description="Csces, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

export default App;
