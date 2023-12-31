---
category: Components
subtitle: 栅格
group: 布局
title: Grid
debug: true
---

24 栅格系统。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过 `row` 在水平方向建立一组 `column`（简写 col）。
- 你的内容应当放置于 `col` 内，并且，只有 `col` 可以作为 `row` 的直接元素。
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<Col span={8} />` 来创建。
- 如果一个 `row` 中的 `col` 总和超过 24，那么多余的 `col` 会作为一个整体另起一行排列。

基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基础栅格</code>
<code src="./demo/gutter.tsx">区块间隔</code>
<code src="./demo/offset.tsx">左右偏移</code>
<code src="./demo/sort.tsx">栅格排序</code>
<code src="./demo/flex.tsx">排版</code>
<code src="./demo/flex-align.tsx">对齐</code>
<code src="./demo/flex-order.tsx">排序</code>
<code src="./demo/flex-stretch.tsx">Flex 填充</code>
<code src="./demo/responsive.tsx">响应式布局</code>
<code src="./demo/responsive-more.tsx">其他属性的响应式</code>
<code src="./demo/playground.tsx">栅格配置器</code>
<code src="./demo/useBreakpoint.tsx">useBreakpoint Hook</code>

## API

### Row

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` \| `stretch` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'top' \| 'middle' \| 'bottom' \| 'stretch'}` | `top` |  |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array | 0 |  |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` \| `space-evenly` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'}` | `start` |  |
| wrap | 是否自动换行 | boolean | true |  |

### Col

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| flex | flex 布局属性 | string \| number | - |  |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |  |
| order | 栅格顺序 | number | 0 |  |
| pull | 栅格向左移动格数 | number | 0 |  |
| push | 栅格向右移动格数 | number | 0 |  |
| span | 栅格占位格数，为 0 时相当于 `display: none` | number | - |  |
| xs | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| sm | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| md | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| lg | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| xl | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| xxl | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |

## 主题变量（Design Token）

<ComponentTokenTable component="Grid"></ComponentTokenTable>

<style>
#components-grid-demo-playground [class~='ant-col'] {
  background: transparent;
  border: 0;
}
#components-grid-demo-playground [class~='ant-col'] > div {
  height: 120px;
  font-size: 14px;
  line-height: 120px;
  background: #0092ff;
  border-radius: 4px;
}
#components-grid-demo-playground pre {
  padding: 8px 16px;
  font-size: 13px;
  background: #f9f9f9;
  border-radius: 6px;
}
#components-grid-demo-playground pre.demo-code {
  direction: ltr;
}
#components-grid-demo-playground .ant-col {
  padding: 0;
}

.gutter-box {
  padding: 8px 0;
  background: #00a0e9;
}


#components-grid-demo-flex [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}

#components-grid-demo-flex-order [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}

#components-grid-demo-flex-align [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}

</style>
