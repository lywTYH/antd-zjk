import { Anchor, Col, Space, Typography } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import classNames from 'classnames';
import { useRouteMeta, useTabMeta } from 'dumi';
import type { ReactNode } from 'react';
import React, { useLayoutEffect, useMemo } from 'react';
import useLayoutState from '../../../hooks/useLayoutState';
import useLocation from '../../../hooks/useLocation';
import PrevAndNext from '../../common/PrevAndNext';
import type { DemoContextProps } from '../DemoContext';
import DemoContext from '../DemoContext';

const useStyle = createStyles(({ token, css }) => {
  const { antCls } = token;
  return {
    contributorsList: css`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      ${antCls}-avatar + ${antCls}-avatar {
        transition: all ${token.motionDurationSlow};
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        ${antCls}-avatar {
          margin-inline-end: 0;
        }
      }
    `,
    listMobile: css`
      margin: 1em 0 !important;
    `,
    toc: css`
      ${antCls}-anchor {
        ${antCls}-anchor-link-title {
          font-size: 12px;
        }
      }
    `,
    // top: ${token.headerHeight + token.contentMarginTop}px;
    tocWrapper: css`
      position: fixed;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: ${token.borderRadius}px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: ${token.purple6};

        &:hover {
          color: ${token.purple5};
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        display: none;
      }
    `,
    articleWrapper: css`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `,
  };
});

type AnchorItem = {
  id: string;
  title: string;
  children?: AnchorItem[];
};

const Content: React.FC<{ children: ReactNode }> = ({ children }) => {
  const meta = useRouteMeta();
  const tab = useTabMeta();
  const { hash } = useLocation();
  const { styles } = useStyle();
  const token = useTheme();

  const [showDebug, setShowDebug] = useLayoutState(false);
  const debugDemos = useMemo(
    () => meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
    [meta],
  );

  const isDebugDemo = debugDemos.includes(hash.slice(1));

  useLayoutEffect(() => {
    setShowDebug(process.env.NODE_ENV === 'development' || isDebugDemo);
  }, []);

  const contextValue = useMemo<DemoContextProps>(
    () => ({ showDebug, setShowDebug }),
    [showDebug, debugDemos],
  );

  const anchorItems = useMemo(
    () =>
      (tab?.toc || meta.toc).reduce<AnchorItem[]>((result, item) => {
        if (item.depth === 2) {
          result.push({ ...item });
        } else if (item.depth === 3) {
          const parent = result[result.length - 1];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push({ ...item });
          }
        }
        return result;
      }, []),
    [tab?.toc, meta.toc],
  );
  return (
    <DemoContext.Provider value={contextValue}>
      <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
        {!!meta.frontmatter.toc && (
          <section className={styles.tocWrapper}>
            <Anchor
              className={styles.toc}
              affix={false}
              targetOffset={token.anchorTop}
              showInkInFixed
              items={anchorItems.map((item) => ({
                href: `#${item.id}`,
                title: item.title,
                key: item.id,
                children: item.children
                  ?.filter((child) => showDebug || !debugDemos.includes(child.id))
                  .map((child) => ({
                    key: child.id,
                    href: `#${child.id}`,
                    title: (
                      <span className={classNames(debugDemos.includes(child.id) && 'toc-debug')}>
                        {child?.title}
                      </span>
                    ),
                  })),
              }))}
            />
          </section>
        )}
        <article className={classNames(styles.articleWrapper, { rtl: false })}>
          {meta.frontmatter?.title ? (
            <Typography.Title style={{ fontSize: 30, position: 'relative' }}>
              <Space size="small">
                {meta.frontmatter?.title}
                {meta.frontmatter?.subtitle}
              </Space>
            </Typography.Title>
          ) : null}
          <div style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</div>
        </article>
        <PrevAndNext />
      </Col>
    </DemoContext.Provider>
  );
};

export default Content;
