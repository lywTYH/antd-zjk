---
category: Components
subtitle: 图标
description: 语义化的矢量图形。
group: 通用
title: Icon
toc: false
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*PdAYS7anRpoAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*xEDOTJx2DEkAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 图标列表

<IconSearch></IconSearch>

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本用法</code>
<code src="./demo/two-tone.tsx">多色图标</code>
<code src="./demo/custom.tsx">自定义图标</code>
<code src="./demo/iconfont.tsx">使用 iconfont.cn</code>
<code src="./demo/scriptUrl.tsx">使用 iconfont.cn 的多个资源</code>

## API

### 通用图标

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 设置图标的样式名 | string | - |  |
| rotate | 图标旋转角度（IE9 无效） | number | - |  |
| spin | 是否有旋转动画 | boolean | false |  |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |  |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - |  |

其中我们提供了三种主题的图标，不同主题的 Icon 组件名为图标名加主题做为后缀。

### 自定义 Icon

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | ComponentType&lt;CustomIconComponentProps> | - |  |
| rotate | 图标旋转角度（IE9 无效） | number | - |  |
| spin | 是否有旋转动画 | boolean | false |  |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |  |

## 主题变量（Design Token）

<ComponentTokenTable component="Icon"></ComponentTokenTable>
