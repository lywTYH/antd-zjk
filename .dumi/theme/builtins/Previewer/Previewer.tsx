import type { IPreviewerProps } from 'dumi';
import { LiveProvider } from 'dumi';
import React from 'react';
import CodePreviewer from './CodePreviewer';

export interface AntdPreviewerProps extends IPreviewerProps {
  originDebug?: IPreviewerProps['debug'];
}

const Previewer: React.FC<AntdPreviewerProps> = (props) => {
  const codePreviewer = <CodePreviewer {...props} />;
  if (props.live === false || props.iframe) {
    return codePreviewer;
  }
  return (
    <LiveProvider
      initialCode={
        Object.entries(props.asset.dependencies).filter(([, { type }]) => type === 'FILE')[0][1]
          .value
      }
      demoId={props.asset.id}
    >
      {codePreviewer}
    </LiveProvider>
  );
};

export default Previewer;
