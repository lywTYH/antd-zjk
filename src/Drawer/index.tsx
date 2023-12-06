import { Drawer as OriginDrawer, DrawerProps as OriginDrawerProps } from 'antd';
import React from 'react';
import Footer, { FooterProps } from './Footer';
import './style.css';

export type DrawerProps = OriginDrawerProps & {
  footProps: FooterProps;
};
const Drawer: React.FC<DrawerProps> = ({ footProps, ...rest }) => (
  <OriginDrawer
    footer={<Footer onCancel={rest.onClose} okType="primary" {...footProps} />}
    {...rest}
  />
);

export default Drawer;
