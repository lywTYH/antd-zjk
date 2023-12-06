import { useLocale } from 'antd/es/locale';
import { getConfirmLocale } from 'antd/es/modal/locale';
import React from 'react';
import { Button, ModalProps } from '../index';

export type FooterProps = {
  onOk?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Pick<
  ModalProps,
  'okText' | 'okType' | 'cancelText' | 'confirmLoading' | 'okButtonProps' | 'cancelButtonProps'
>;
const Footer: React.FC<FooterProps> = ({
  confirmLoading,
  okButtonProps,
  okType,
  okText,
  onOk,
  cancelText,
  onCancel,
  cancelButtonProps,
}) => {
  const [locale] = useLocale('Modal', getConfirmLocale());
  const okTextLocale = okText || locale?.okText;
  const cancelTextLocale = cancelText || locale?.cancelText;
  const isDanger = okType === 'danger';
  return (
    <>
      <Button onClick={onCancel} {...cancelButtonProps}>
        {cancelTextLocale}
      </Button>
      <Button
        type={isDanger ? undefined : okType}
        danger={isDanger}
        loading={confirmLoading}
        onClick={onOk}
        {...okButtonProps}
      >
        {okTextLocale}
      </Button>
    </>
  );
};
export default Footer;
