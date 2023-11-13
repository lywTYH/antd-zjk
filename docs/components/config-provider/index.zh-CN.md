---
category: Components
subtitle: 全局化配置
group: 其他
title: ConfigProvider
---

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 React 的 [context](https://facebook.github.io/react/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

```tsx
import { ConfigProvider } from 'antd';
import React from 'react';

// ...
const Demo: React.FC = () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);

export default Demo;
```

### Content Security Policy

部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 `csp` 属性来进行配置：

```tsx
<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>
```

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/locale.tsx">国际化</code>
<code src="./demo/direction.tsx">方向</code>
<code src="./demo/size.tsx">组件尺寸</code>
<code src="./demo/theme.tsx">主题</code>
<code src="./demo/wave.tsx">自定义波纹</code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | 设置为 `false` 时，移除按钮中 2 个汉字之间的空格 | boolean | true |  |
| componentDisabled | 设置 antd 组件禁用状态 | boolean | - |  |
| componentSize | 设置 antd 组件大小 | `small` \| `middle` \| `large` | - |  |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置 | { nonce: string } | - |  |
| direction | 设置文本展示方向。 [示例](#components-config-provider-demo-direction) | `ltr` \| `rtl` | `ltr` |  |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | function(triggerNode) | () => document.body |  |
| getTargetContainer | 配置 Affix、Anchor 滚动监听容器。 | () => HTMLElement | () => window |  |
| iconPrefixCls | 设置图标统一样式前缀 | string | `anticon` |  |
| locale | 语言包配置 | object | - |  |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean \| number | - |  |
| popupOverflow | Select 类组件弹层展示逻辑，默认为可视区域滚动，可配置成滚动区域滚动 | 'viewport' \| 'scroll' <InlinePopover previewURL="https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png"></InlinePopover> | 'viewport' |  |
| prefixCls | 设置统一样式前缀 | string | `ant` |  |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty-cn) | function(componentName: string): ReactNode | - |  |
| theme | 设置主题 | [Theme] | - |  |
| virtual | 设置 `false` 时关闭虚拟滚动 | boolean | - |  |
| warning | 设置警告等级，`strict` 为 `false` 时会将废弃相关信息聚合为单条信息 | { strict: boolean } | - |  |

### ConfigProvider.config()

设置 `Modal`、`Message`、`Notification` 静态方法配置，只会对非 hooks 的静态方法调用生效。

```ts
ConfigProvider.config({
  prefixCls: 'ant',
  iconPrefixCls: 'anticon',
  theme: { token: { colorPrimary: 'red' } },
});
```

### ConfigProvider.useConfig() `+`

获取父级 `Provider` 的值。如 `DisabledContextProvider`、`SizeContextProvider`。

```jsx
const { componentDisabled, componentSize } = ConfigProvider.useConfig();
```

<!-- prettier-ignore -->
| 返回值 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| componentDisabled | antd 组件禁用状态 | boolean | - |  |
| componentSize | antd 组件大小状态 | `small` \| `middle` \| `large` | - |  |

### 组件配置

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alert | 设置 Alert 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| anchor | 设置 Anchor 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| avatar | 设置 Avatar 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| badge | 设置 Badge 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: { count?: string, indicator?: string }, styles?: { count?: React.CSSProperties, indicator?: React.CSSProperties } } | - |  |
| breadcrumb | 设置 Breadcrumb 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| button | 设置 Button 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: { icon: string }, styles?: { icon: React.CSSProperties } } | - |  |
| calendar | 设置 Calendar 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| card | 设置 Card 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| carousel | 设置 Carousel 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| cascader | 设置 Cascader 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| checkbox | 设置 Checkbox 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| collapse | 设置 Collapse 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| colorPicker | 设置 ColorPicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| datePicker | 设置 DatePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| descriptions | 设置 Descriptions 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| divider | 设置 Divider 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| drawer | 设置 Drawer 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: [DrawerProps\["classNames"\]](/components/drawer-cn#api), styles?: [DrawerProps\["styles"\]](/components/drawer-cn#api) } | - |  |
| empty | 设置 Empty 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| flex | 设置 Flex 组件的通用属性 | { className?: string, style?: React.CSSProperties, vertical?: boolean } | - |  |
| form | 设置 Form 组件的通用属性 | { className?: string, style?: React.CSSProperties, validateMessages?: [ValidateMessages](/components/form-cn#validatemessages), requiredMark?: boolean \| `optional`, colon?: boolean, scrollToFirstError?: boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)} | - |  |
| image | 设置 Image 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| input | 设置 Input 组件的通用属性 | { autoComplete?: string, className?: string, style?: React.CSSProperties } | - |  |
| layout | 设置 Layout 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| list | 设置 List 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| menu | 设置 Menu 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| mentions | 设置 Mentions 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| message | 设置 Message 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| modal | 设置 Modal 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: [ModalProps\["classNames"\]](/components/modal-cn#api), styles?: [ModalProps\["styles"\]](/components/modal-cn#api) } | - |  |
| notification | 设置 Notification 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| pagination | 设置 Pagination 组件的通用属性 | { showSizeChanger?: boolean, className?: string, style?: React.CSSProperties } | - |  |
| progress | 设置 Progress 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| radio | 设置 Radio 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| rate | 设置 Rate 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| result | 设置 Result 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| skeleton | 设置 Skeleton 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| segmented | 设置 Segmented 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| select | 设置 Select 组件的通用属性 | { className?: string, showSearch?: boolean, style?: React.CSSProperties } | - |  |
| slider | 设置 Slider 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| switch | 设置 Switch 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| space | 设置 Space 的通用属性，参考 [Space](/components/space-cn) | { size: `small` \| `middle` \| `large` \| `number`, className?: string, style?: React.CSSProperties, classNames?: { item: string }, styles?: { item: React.CSSProperties } } | - |  |
| spin | 设置 Spin 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| statistic | 设置 Statistic 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| steps | 设置 Steps 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| table | 设置 Table 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| tabs | 设置 Tabs 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| tag | 设置 Tag 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| timeline | 设置 Timeline 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| timePicker | 设置 TimePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| transfer | 设置 Transfer 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| tree | 设置 Tree 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| typography | 设置 Typography 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| upload | 设置 Upload 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - |  |
| wave | 设置水波纹特效 | { disabled?: boolean, showEffect?: (node: HTMLElement, info: { className, token, component }) => void } | - |  |
