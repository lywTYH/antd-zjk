---
category: Components
subtitle: 包裹组件
group: 其他
title: App
demo:
  cols: 2
---

新的包裹组件，提供重置样式和提供消费上下文的默认环境。

## 何时使用

- 提供可消费 React context 的 `message.xxx`、`Modal.xxx`、`notification.xxx` 的静态方法，可以简化 useMessage 等方法需要手动植入 `contextHolder` 的问题。
- 提供基于 `.ant-app` 的默认重置样式，解决原生元素没有 antd 规范样式的问题。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本用法</code>
<code src="./demo/config.tsx">Hooks 配置</code>

## 如何使用

### 基础用法

App 组件通过 `Context` 提供上下文方法调用，因而 useApp 需要作为子组件才能使用，我们推荐在应用中顶层包裹 App。

```tsx
import { App } from 'antd';
import React from 'react';

const MyPage: React.FC = () => {
  const { message, notification, modal } = App.useApp();
  message.success('Good!');
  notification.info({ message: 'Good' });
  modal.warning({ title: 'Good' });
  // ....
  // other message, notification, modal static function
  return <div>Hello word</div>;
};

const MyApp: React.FC = () => (
  <App>
    <MyPage />
  </App>
);

export default MyApp;
```

注意：App.useApp 必须在 App 之下方可使用。

### 与 ConfigProvider 先后顺序

App 组件只能在 `ConfigProvider` 之下才能使用 Design Token， 如果需要使用其样式重置能力，则 ConfigProvider 与 App 组件必须成对出现。

```tsx
<ConfigProvider theme={{ ... }}>
  <App>
    ...
  </App>
</ConfigProvider>
```

### 内嵌使用场景（如无必要，尽量不做嵌套）

```tsx
<App>
  <Space>
    ...
    <App>...</App>
  </Space>
</App>
```

## API

### App

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| message | App 内 Message 的全局配置 | [MessageConfig](/components/message-cn/#messageconfig) | - |  |
| notification | App 内 Notification 的全局配置 | [NotificationConfig](/components/notification-cn/#notificationconfig) | - |  |

## 主题变量（Design Token）

<ComponentTokenTable component="App"></ComponentTokenTable>
