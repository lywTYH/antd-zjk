import type { DirectionType } from 'antd/es/config-provider';
import * as React from 'react';

export interface SiteContextProps {
  isMobile: boolean;
  direction: DirectionType;
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = React.createContext<SiteContextProps>({
  isMobile: false,
  direction: 'ltr',
  updateSiteConfig: () => {},
});

export default SiteContext;
