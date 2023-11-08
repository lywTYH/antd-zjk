import { createStyles } from 'antd-style';
import type { FC } from 'react';
import React from 'react';
import LiveEditor from '../slots/LiveEditor';
import LiveError from '../slots/LiveError';

const useStyle = createStyles(({ token, css }) => {
  const { colorPrimaryBorder, colorIcon, colorPrimary } = token;

  return {
    editor: css`
      .npm__react-simple-code-editor__textarea {
        outline: none;

        &:hover {
          box-shadow: inset 0 0 0 1px ${colorPrimaryBorder} !important;
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colorPrimary} !important;
        }
      }
    `,

    editableIcon: css`
      position: absolute;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: ${colorIcon};
    `,
  };
});

const LiveCode: FC = () => {
  const { styles } = useStyle();
  return (
    <>
      <div className={styles.editor}>
        <LiveEditor />
        <LiveError />
      </div>
    </>
  );
};

export default LiveCode;
