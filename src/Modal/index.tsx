import { Modal as OriginModal, ModalProps as OriginModalProps } from 'antd';
import React from 'react';
import './style.css';

export type ModalProps = OriginModalProps & {
  type?: 'default' | 'primary';
};
const ModalComponent: React.FC<ModalProps> = ({ type = 'default', className, ...rest }) => {
  return (
    <OriginModal
      className={`ant-modal-theme-${type}${className ? ' ' + className : ''}`}
      {...rest}
    />
  );
};

const Modal = Object.assign(ModalComponent, OriginModal);
export default Modal;
