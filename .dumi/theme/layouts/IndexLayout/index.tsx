import type { PropsWithChildren } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const IndexLayout: React.FC<PropsWithChildren<{ title: string; desc: string }>> = ({
  children,
  ...restProps
}) => (
  <>
    <Helmet>
      <title>{restProps.title}</title>
      <meta property="og:title" content={restProps.title} />
      {restProps.desc && <meta name="description" content={restProps.desc} />}
    </Helmet>
    <div style={{ minHeight: '100vh' }}>{children}</div>
  </>
);

export default IndexLayout;
