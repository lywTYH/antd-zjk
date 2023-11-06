import { HomeOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Result } from '../../../dist';
//@ts-ignore
import { Link, useLocation } from 'dumi';
import * as utils from '../../theme/utils';
export interface NotFoundProps {
  router: {
    push: (pathname: string) => void;
    replace: (pathname: string) => void;
  };
}

const NotFoundPage: React.FC<NotFoundProps> = () => {
  const { pathname } = useLocation();
  const isZhCN = utils.isZhCN(pathname);
  return (
    <Result
      status="404"
      title="404"
      subTitle={isZhCN ? '你访问的页面貌似不存在？' : 'Sorry, the page you visited does not exist.'}
      extra={
        <Link to={utils.getLocalizedPathname('/', isZhCN)}>
          <Button type="primary" icon={<HomeOutlined />}>
            {isZhCN ? '返回首页' : 'Back to home page'}
          </Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
