---
category: Components
group: 反馈
noinstant: true
title: Notification
subtitle: 通知提醒框
demo:
  cols: 2
---

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/hooks.tsx">Hooks 调用（推荐）</code>
<code src="./demo/duration.tsx">自动关闭的延时</code>
<code src="./demo/with-icon.tsx">带有图标的通知提醒框</code>
<code src="./demo/with-btn.tsx">自定义按钮</code>
<code src="./demo/custom-icon.tsx">自定义图标</code>
<code src="./demo/placement.tsx">位置</code>
<code src="./demo/custom-style.tsx">自定义样式</code>
<code src="./demo/update.tsx">更新消息内容</code>
<code src="./demo/stack.tsx" >堆叠</code>
<code src="./demo/basic.tsx">静态方法（不推荐）</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>

## API

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.destroy(key?: String)`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| btn | 自定义关闭按钮 | ReactNode | - | - |
| className | 自定义 CSS class | string | - | - |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true |  |
| description | 通知提醒内容，必选 | ReactNode | - | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | 4.5 | - |
| icon | 自定义图标 | ReactNode | - | - |
| key | 当前通知唯一标志 | string | - | - |
| message | 通知提醒标题，必选 | ReactNode | - | - |
| placement | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | `topRight` | - |
| style | 自定义内联样式 | CSSProperties | - | - |
| role | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容 | `alert \| status` | `alert` |  |
| onClick | 点击通知时触发的回调函数 | function | - | - |
| onClose | 当通知关闭时触发 | function | - | - |
| props | 透传至通知 `div` 上的 props 对象，支持传入 `data-*` `aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 | Object | - | - |

- `notification.useNotification(config)`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |  |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true |  |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |  |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |  |
| rtl | 是否开启 RTL 模式 | boolean | false |  |
| stack | 堆叠模式，超过阈值时会将所有消息收起 | boolean \| `{ threshold: number }` | `{ threshold: 3 }` |  |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |  |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |  |

### 全局配置

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

`notification.config(options)`

```js
notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
  rtl: true,
});
```

## 主题变量（Design Token）

<ComponentTokenTable component="Notification"></ComponentTokenTable>
