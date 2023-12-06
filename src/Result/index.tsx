import { Result as OriginResult, ResultProps as OriginResultProps } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import React from 'react';
import inProgress from './inProgress';
import loadingError from './loadingError';
import noContent from './noContent';
import noData from './noData';
import noFound from './noFound';
import noNotification from './noNotification';
import noSearchData from './noSearchData';
import noTask from './noTask';
import serverError from './serverError';
import './style.css';
import unauthorized from './unauthorized';
export const ExceptionMap = {
  '403': unauthorized,
  '404': noFound,
  '500': serverError,
  unauthorized: unauthorized,
  serverError: serverError,
  noFound: noFound,
  inProgress: inProgress,
  loadingError: loadingError,
  noContent: noContent,
  noData: noData,
  noNotification: noNotification,
  noSearchData: noSearchData,
  noTask: noTask,
};

const ExceptionStatus = Object.keys(ExceptionMap);
type ExceptionType = keyof typeof ExceptionMap;
export type ExceptionStatusType = ResultStatusType | ExceptionType;
export type ResultProps = OriginResultProps & { status: ExceptionStatusType };
export interface ResultType extends React.FC<ResultProps> {
  PRESENTED_IMAGE_404: React.FC;
  PRESENTED_IMAGE_403: React.FC;
  PRESENTED_IMAGE_500: React.FC;
}

const ExceptionDefaultProps: Record<ExceptionType, Partial<ResultProps>> = {
  '403': {
    title: '403',
    subTitle: '抱歉，您没有权限访问此页面',
  },
  '404': {
    title: '404',
    subTitle: '抱歉，您访问的页面不存在······',
  },
  '500': {
    title: '500',
    subTitle: '无网络或者服务器异常',
  },
  unauthorized: {
    subTitle: '暂无权限',
  },
  serverError: {
    subTitle: '无网络或者服务器异常',
  },
  noFound: {
    subTitle: '抱歉，您访问的页面不存在······',
  },
  inProgress: {
    subTitle: '建设中',
  },
  loadingError: {
    subTitle: '加载失败',
  },
  noContent: {
    subTitle: '暂无内容',
  },
  noData: {
    subTitle: '暂无数据',
  },
  noNotification: {
    subTitle: '暂无通知公告',
  },
  noSearchData: {
    subTitle: '暂无搜索结果',
  },
  noTask: {
    subTitle: '暂无待办任务',
  },
};

const useResultProps = (status: ResultProps['status']) => {
  if (ExceptionStatus.includes(`${status}`)) {
    const SVGComponent = ExceptionMap[status as ExceptionStatusType];
    const defaultProps = ExceptionDefaultProps[status as ExceptionStatusType];
    return {
      icon: (
        <div className={`ant-result-image`}>
          <SVGComponent />
        </div>
      ),
      className: 'result-exception',
      ...defaultProps,
    };
  } else {
    return {
      status,
    } as {
      status: OriginResultProps['status'];
    };
  }
};
const Result: ResultType = ({ status, ...rest }: ResultProps) => {
  const props = useResultProps(status);
  return <OriginResult {...props} {...rest} />;
};
Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];
Result.displayName = 'Result';

export default Result;
