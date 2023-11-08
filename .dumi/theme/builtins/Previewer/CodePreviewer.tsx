import { UpOutlined } from '@ant-design/icons';
import { Alert, Space, Tooltip } from 'antd';
import { createStyles, css } from 'antd-style';
import classNames from 'classnames';
import { FormattedMessage, LiveContext } from 'dumi';
import React, { useContext, useEffect, useRef, useState } from 'react';

import useLocation from '../../../hooks/useLocation';
import BrowserFrame from '../../common/BrowserFrame';
import type { AntdPreviewerProps } from './Previewer';

import LiveDemo from 'dumi/theme-default/slots/LiveDemo';
import ClientOnly from '../../common/ClientOnly';
import CodePreview from '../../common/CodePreview';
import ExternalLinkIcon from '../../common/ExternalLinkIcon';

const { ErrorBoundary } = Alert;

const useStyle = createStyles(({ token }) => {
  const { borderRadius } = token;
  return {
    codeHideBtn: css`
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
      border-top: 1px solid ${token.colorSplit};
      color: ${token.colorTextSecondary};
      transition: all 0.2s ease-in-out;
      background-color: ${token.colorBgElevated};
      cursor: pointer;
      &:hover {
        color: ${token.colorPrimary};
      }
      span {
        margin-right: ${token.marginXXS}px;
      }
    `,
  };
});

const CodePreviewer: React.FC<AntdPreviewerProps> = (props) => {
  const {
    asset,
    expand,
    iframe,
    demoUrl,
    children,
    title,
    description,
    originDebug,
    jsx,
    style,
    compact,
    background,
    clientOnly,
  } = props;

  const location = useLocation();
  const { enabled: liveEnabled } = useContext(LiveContext);
  const { styles } = useStyle();
  const entryCode = asset.dependencies['index.tsx'].value;
  const liveDemo = useRef<React.ReactNode>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const [codeExpand, setCodeExpand] = useState<boolean>(false);
  const [codeType, setCodeType] = useState<string>('tsx');

  const { hash } = location;

  const handleCodeExpand = (demo: string) => {
    setCodeExpand((prev) => !prev);
  };

  useEffect(() => {
    if (asset.id === hash.slice(1)) {
      anchorRef.current?.click();
    }
  }, []);

  useEffect(() => {
    setCodeExpand(expand);
  }, [expand]);

  const mergedChildren = !iframe && clientOnly ? <ClientOnly>{children}</ClientOnly> : children;

  if (!liveDemo.current) {
    liveDemo.current = iframe ? (
      <BrowserFrame>
        <iframe
          src={demoUrl}
          height={iframe === true ? undefined : iframe}
          title="demo"
          className="iframe-demo"
        />
      </BrowserFrame>
    ) : (
      mergedChildren
    );
  }

  const codeBoxClass = classNames('code-box', {
    expand: codeExpand,
    'code-box-debug': originDebug,
  });

  const localizedTitle = title;
  const highlightClass = classNames('highlight-wrapper', {
    'highlight-wrapper-expand': codeExpand,
  });

  const backgroundGrey = '#f0f2f5';
  const codeBoxDemoStyle: React.CSSProperties = {
    padding: iframe || compact ? 0 : undefined,
    overflow: iframe || compact ? 'hidden' : undefined,
    backgroundColor: background === 'grey' ? backgroundGrey : undefined,
  };

  const codeBox: React.ReactNode = (
    <section className={codeBoxClass} id={asset.id}>
      <section className="code-box-demo" style={codeBoxDemoStyle}>
        {!liveEnabled ? (
          <ErrorBoundary>
            <React.StrictMode>{liveDemo.current}</React.StrictMode>
          </ErrorBoundary>
        ) : (
          <LiveDemo />
        )}
      </section>
      <section className="code-box-meta markdown">
        <div className="code-box-title">
          <Tooltip title={originDebug ? <FormattedMessage id="app.demo.debug" /> : ''}>
            <a href={`#${asset.id}`} ref={anchorRef}>
              {localizedTitle}
            </a>
          </Tooltip>
        </div>
        {description && (
          <div className="code-box-description" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <Space wrap size="middle" className="code-box-actions">
          <Tooltip title={<FormattedMessage id="app.demo.separate" />}>
            <a
              className="code-box-code-action"
              aria-label="open in new tab"
              target="_blank"
              rel="noreferrer"
              href={demoUrl}
            >
              <ExternalLinkIcon className="code-box-separate" />
            </a>
          </Tooltip>
          <Tooltip
            title={<FormattedMessage id={`app.demo.code.${codeExpand ? 'hide' : 'show'}`} />}
          >
            <div className="code-expand-icon code-box-code-action">
              <img
                alt="expand code"
                src={'https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg'}
                className={codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'}
                onClick={() => handleCodeExpand(asset.id)}
              />
              <img
                alt="expand code"
                src={'https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg'}
                className={codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}
                onClick={() => handleCodeExpand(asset.id)}
              />
            </div>
          </Tooltip>
        </Space>
      </section>
      {codeExpand && (
        <section className={highlightClass} key="code">
          <CodePreview
            sourceCode={entryCode}
            jsxCode={jsx}
            styleCode={style}
            onCodeTypeChange={setCodeType}
          />
          <div
            tabIndex={0}
            role="button"
            className={styles.codeHideBtn}
            onClick={() => setCodeExpand(false)}
          >
            <UpOutlined />
            <FormattedMessage id="app.demo.code.hide.simplify" />
          </div>
        </section>
      )}
    </section>
  );

  useEffect(() => {
    // In Safari, if style tag be inserted into non-head tag,
    // it will affect the rendering ability of the browser,
    // resulting in some response delays like following issue:
    // https://github.com/ant-design/ant-design/issues/39995
    // So we insert style tag into head tag.
    if (!style) {
      return;
    }
    const styleTag = document.createElement('style') as HTMLStyleElement;
    styleTag.type = 'text/css';
    styleTag.innerHTML = style;
    (styleTag as any)['data-demo-url'] = demoUrl;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [style, demoUrl]);

  return codeBox;
};

export default CodePreviewer;
