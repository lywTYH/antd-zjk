import classNames from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useNavigate } from 'dumi';
import React, { useContext, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { ConfigProvider } from '../../../../dist';
import zhCN from '../../../../dist/antd/locale/zh_CN';
//@ts-ignore
import { Helmet, useOutlet, useSiteData } from 'dumi';

import useLocale from '../../../hooks/useLocale';
import useLocation from '../../../hooks/useLocation';
import GlobalStyles from '../../common/GlobalStyles';
import { locales } from '../../constance';

import SiteContext from '../../slots/SiteContext';
import '../../static/style';
import SidebarLayout from '../SidebarLayout';

function DocLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash } = location;
  const [locale, lang] = useLocale(locales);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { direction } = useContext(SiteContext);
  const { loading } = useSiteData();

  useLayoutEffect(() => {
    if (lang === 'cn') {
      dayjs.locale('zh-cn');
    } else {
      dayjs.locale('en');
    }
  }, []);

  useEffect(() => {
    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      timerRef.current = setTimeout(() => {
        nprogressHiddenStyle.parentNode?.removeChild(nprogressHiddenStyle);
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      navigate('/components/overview');
    }
  }, [pathname]);

  // handle hash change or visit page hash from Link component, and jump after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');
    if (id) document.getElementById(decodeURIComponent(id))?.scrollIntoView();
  }, [loading, hash]);

  const content = useMemo(() => {
    if (
      ['', '/'].some((path) => path === pathname) ||
      ['/index'].some((path) => pathname.startsWith(path))
    ) {
      return;
      // return (
      //   <IndexLayout title={locale.title} desc={locale.description}>
      //     {outlet}
      //   </IndexLayout>
      // );
    }
    if (pathname.startsWith('/theme-editor')) {
      return outlet;
    }
    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html
          lang={lang === 'cn' ? 'zh-CN' : lang}
          data-direction={direction}
          className={classNames({ rtl: direction === 'rtl' })}
        />
        <meta property="og:description" content={locale.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"
        />
      </Helmet>
      <ConfigProvider direction={direction} locale={lang === 'cn' ? zhCN : undefined}>
        <GlobalStyles />
        {content}
      </ConfigProvider>
    </>
  );
}

export default DocLayout;
