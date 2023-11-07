import {
  StyleProvider,
  createCache,
  extractStyle,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
} from '@ant-design/cssinjs';
import { getSandpackCssText } from '@codesandbox/sandpack-react';
import { App } from 'antd';
import type { DirectionType } from 'antd/es/config-provider';
import { useOutlet, useSearchParams, useServerInsertedHTML } from 'dumi';
import React, { useCallback, useEffect, useMemo } from 'react';

import useLayoutState from '../../hooks/useLayoutState';
import useLocation from '../../hooks/useLocation';
import SiteThemeProvider from '../SiteThemeProvider';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;

const RESPONSIVE_MOBILE = 768;
export const ANT_DESIGN_NOT_SHOW_BANNER = 'ANT_DESIGN_NOT_SHOW_BANNER';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ direction, isMobile }, setSiteState] = useLayoutState<SiteState>({
    isMobile: false,
    direction: 'ltr',
  });

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState((prev) => ({ ...prev, ...props }));

      // updating `searchParams` will clear the hash
      const oldSearchStr = searchParams.toString();

      let nextSearchParams: URLSearchParams = searchParams;
      (Object.entries(props) as Entries<SiteContextProps>).forEach(([key, value]) => {
        if (key === 'direction') {
          if (value === 'rtl') {
            nextSearchParams.set('direction', 'rtl');
          } else {
            nextSearchParams.delete('direction');
          }
        }
      });

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const updateMobileMode = () => {
    updateSiteConfig({ isMobile: window.innerWidth < RESPONSIVE_MOBILE });
  };

  useEffect(() => {
    const _direction = searchParams.get('direction') as DirectionType;
    setSiteState({
      direction: _direction === 'rtl' ? 'rtl' : 'ltr',
    });
    // Handle isMobile
    updateMobileMode();

    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, []);

  const siteContextValue = useMemo(
    () => ({
      direction,
      updateSiteConfig,
      isMobile: isMobile!,
    }),
    [isMobile, direction, updateSiteConfig],
  );

  const [styleCache] = React.useState(() => createCache());

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, true);
    return <style data-type="antd-cssinjs" dangerouslySetInnerHTML={{ __html: styleText }} />;
  });

  useServerInsertedHTML(() => (
    <style
      data-sandpack="true"
      id="sandpack"
      dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
    />
  ));

  const demoPage = pathname.startsWith('/~demos');

  // ============================ Render ============================
  let content: React.ReactNode = outlet;

  // Demo page should not contain App component
  if (!demoPage) {
    content = <App>{outlet}</App>;
  }

  return (
    <StyleProvider
      cache={styleCache}
      linters={[logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter]}
    >
      <SiteContext.Provider value={siteContextValue}>
        <SiteThemeProvider>{content}</SiteThemeProvider>
      </SiteContext.Provider>
    </StyleProvider>
  );
};

export default GlobalLayout;
