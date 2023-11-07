// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import nprogress from '/home/lyw/work-space/cscec-antd/node_modules/nprogress';
import './nprogress.css';
import React, { useLayoutEffect, type FC } from 'react';
import { useSiteData } from 'dumi';

const DumiLoading: FC = () => {
  const { setLoading } = useSiteData();

  useLayoutEffect(() => {
    setLoading(true);
    nprogress.start();

    return () => {
      setLoading(false);
      nprogress.done();
    }
  }, []);

  return null;
}

export default DumiLoading;
