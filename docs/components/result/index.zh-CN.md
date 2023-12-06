---
group: 反馈
category: Components
title: Result
subtitle: 结果
---

用于反馈一系列操作任务的处理结果。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/success.tsx">Success</code>
<code src="./demo/info.tsx">Info</code>
<code src="./demo/warning.tsx">Warning</code>
<code src="./demo/403.tsx">403</code>
<code src="./demo/404.tsx">404</code>
<code src="./demo/500.tsx">500</code>
<code src="./demo/error.tsx">Error</code>
<code src="./demo/inProgress.tsx">建设中</code>
<code src="./demo/loadingError.tsx">加载失败</code>
<code src="./demo/noContent.tsx">暂无内容</code>
<code src="./demo/noData.tsx">暂无数据</code>
<code src="./demo/noNotification.tsx">暂无通知公告</code>
<code src="./demo/noSearchData.tsx">暂无搜索结果</code>
<code src="./demo/noTask.tsx">暂无任务</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` \| `info` \| `inProgress` \| `loadingError` \| `noContent` \| `noData` \| `noNotification` \| `noSearchData` \| `noTask` | - |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |

## 主题变量（Design Token）

<ComponentTokenTable component="Result"></ComponentTokenTable>

<style>
.site-result-demo-error-icon {
  color: red;
}
</style>
