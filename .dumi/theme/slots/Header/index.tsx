import { MenuOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import { useLocation } from 'dumi';
import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Col, Popover, Row } from '../../../../dist';

import useLocale from '../../../hooks/useLocale';
import * as utils from '../../utils';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import type { SharedProps } from './interface';
import Logo from './Logo';
import Navigation from './Navigation';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

const locales = {
  cn: {
    message:
      '语雀公益计划：大学生认证教育邮箱，即可免费获得语雀会员。语雀，支付宝匠心打造的在线文档平台。',
    shortMessage: '支付宝语雀 · 大学生公益计划火热进行中！',
    more: '了解更多',
  },
  en: {
    message: '',
    shortMessage: '',
    more: '',
  },
};

const useStyle = createStyles(({ token, css }) => {
  const searchIconColor = '#ced4d9';

  return {
    header: css`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowTertiary};
      backdrop-filter: blur(8px);

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${searchIconColor};
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `,
    dataDirectionIcon: css`
      width: 16px;
    `,
    popoverMenu: {
      width: 300,

      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
      },
    },
    banner: css`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `,
    link: css`
      margin-left: 10px;

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        margin-left: 0;
      }
    `,
    icon: css`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `,
  };
});

interface HeaderState {
  menuVisible: boolean;
  windowWidth: number;
  searching: boolean;
}

// ================================= Header =================================
const Header: React.FC = () => {
  const [, lang] = useLocale(locales);
  const [headerState, setHeaderState] = useState<HeaderState>({
    menuVisible: false,
    windowWidth: 1400,
    searching: false,
  });
  const { direction, isMobile, updateSiteConfig } = useContext<SiteContextProps>(SiteContext);
  const pingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const { pathname, search } = location;

  const { styles } = useStyle();

  const handleHideMenu = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, menuVisible: false }));
  }, []);
  const onWindowResize = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, windowWidth: window.innerWidth }));
  }, []);
  const handleShowMenu = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, menuVisible: true }));
  }, []);
  const onMenuVisibleChange = useCallback((visible: boolean) => {
    setHeaderState((prev) => ({ ...prev, menuVisible: visible }));
  }, []);
  const onDirectionChange = () => {
    updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  };

  useEffect(() => {
    handleHideMenu();
  }, [location]);

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (pingTimer.current) {
        clearTimeout(pingTimer.current);
      }
    };
  }, []);

  // eslint-disable-next-line class-methods-use-this
  const handleVersionChange = useCallback((url: string) => {
    const currentUrl = window.location.href;
    const currentPathname = window.location.pathname;
    if (/overview/.test(currentPathname) && /0?[1-39][0-3]?x/.test(url)) {
      window.location.href = currentUrl
        .replace(window.location.origin, url)
        .replace(/\/components\/overview/, `/docs${/0(9|10)x/.test(url) ? '' : '/react'}/introduce`)
        .replace(/\/$/, '');
      return;
    }
    // Mirror url must have `/`, we add this for compatible
    const urlObj = new URL(currentUrl.replace(window.location.origin, url));
    if (urlObj.host.includes('antgroup')) {
      window.location.href = `${urlObj.href.replace(/\/$/, '')}/`;
    }
    window.location.href = urlObj.href.replace(/\/$/, '');
  }, []);

  const onLangChange = useCallback(() => {
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.slice(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search).pathname,
      );
  }, [location]);

  const nextDirectionText = useMemo<string>(
    () => (direction !== 'rtl' ? 'RTL' : 'LTR'),
    [direction],
  );

  const { menuVisible, windowWidth, searching } = headerState;

  const isHome = ['', 'index', 'index-cn'].includes(pathname);
  const isZhCN = lang === 'cn';
  const isRTL = direction === 'rtl';
  let responsive: null | 'narrow' | 'crowded' = null;
  if (windowWidth < RESPONSIVE_XS) {
    responsive = 'crowded';
  } else if (windowWidth < RESPONSIVE_SM) {
    responsive = 'narrow';
  }

  const headerClassName = classNames(styles.header, 'clearfix', {
    'home-header': isHome,
  });

  const sharedProps: SharedProps = {
    isZhCN,
    isRTL,
  };

  const navigationNode = (
    <Navigation
      key="nav"
      {...sharedProps}
      responsive={responsive}
      isMobile={isMobile}
      directionText={nextDirectionText}
      onLangChange={onLangChange}
      onDirectionChange={onDirectionChange}
    />
  );

  let menu = [navigationNode];

  if (windowWidth < RESPONSIVE_XS) {
    menu = searching ? [] : [navigationNode];
  } else if (windowWidth < RESPONSIVE_SM) {
    menu = searching ? [] : menu;
  }

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];

  return (
    <header className={headerClassName}>
      {isMobile && (
        <Popover
          overlayClassName={styles.popoverMenu}
          placement="bottomRight"
          content={menu}
          trigger="click"
          open={menuVisible}
          arrow={{ arrowPointAtCenter: true }}
          onOpenChange={onMenuVisibleChange}
        >
          <MenuOutlined className="nav-phone-icon" onClick={handleShowMenu} />
        </Popover>
      )}
      <Row style={{ flexFlow: 'nowrap', height: 64 }}>
        <Col {...colProps[0]}>
          <Logo {...sharedProps} location={location} />
        </Col>
        <Col {...colProps[1]} className={styles.menuRow}>
          <div className="nav-search-wrapper">
            <DumiSearchBar />
          </div>
          {!isMobile && menu}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
