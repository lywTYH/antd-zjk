---
category: Components
group: 布局
subtitle: 间距
title: Space
debug: true
---

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。
- 需要表单组件之间紧凑连接且合并边框时，使用 Space.Compact。

### 与 Flex 组件的区别

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/base.tsx">基本用法</code>
<code src="./demo/vertical.tsx">垂直间距</code>
<code src="./demo/size.tsx">间距大小</code>
<code src="./demo/align.tsx">对齐</code>
<code src="./demo/wrap.tsx">自动换行</code>
<code src="./demo/split.tsx">分隔符</code>
<code src="./demo/compact.tsx">紧凑布局组合</code>
<code src="./demo/compact-buttons.tsx">Button 紧凑布局</code>
<code src="./demo/compact-button-vertical.tsx">垂直方向紧凑布局</code>

## API

### Space

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `start` `end` `center` `baseline` | - |
| direction | 间距方向 | `vertical` or `horizontal` | `horizontal` |
| size | 间距大小 | Size | `small` |
| split | 设置拆分 | ReactNode | - |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false |

### Size

`'small' | 'middle' | 'large' | number`

### Space.Compact

需要表单组件之间紧凑连接且合并边框时，使用 Space.Compact。支持的组件有：

- Button
- AutoComplete
- Cascader
- DatePicker
- Input/Input.Search
- InputNumber
- Select
- TimePicker
- TreeSelect

| 参数      | 说明                         | 类型                           | 默认值       | 版本 |
| --------- | ---------------------------- | ------------------------------ | ------------ | ---- |
| block     | 将宽度调整为父元素宽度的选项 | boolean                        | false        |      |
| direction | 指定排列方向                 | `vertical` \| `horizontal`     | `horizontal` |      |
| size      | 子组件大小                   | `large` \| `middle` \| `small` | `middle`     |      |

### `styles` 和 `classNames` 属性

<!-- prettier-ignore -->
| 名称 | 说明  | 版本  |
| ---- | --------------------- | ----- |
| item | 设置 `Space` 包裹的子组件 |   |

## 主题变量（Design Token）

<ComponentTokenTable component="Space"></ComponentTokenTable>

<style>
.space-align-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.space-align-block {
  flex: none;
  margin: 8px 4px;
  padding: 4px;
  border: 1px solid #40a9ff;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}

.site-space-compact-wrapper .site-input-split {
  background-color: #fff;
}

.site-space-compact-wrapper .site-input-right:not(.ant-input-rtl) {
  border-left-width: 0;
}

.site-space-compact-wrapper .site-input-right:not(.ant-input-rtl):hover,
.site-space-compact-wrapper .site-input-right:not(.ant-input-rtl):focus {
  border-left-width: 1px;
}

.site-space-compact-wrapper .site-input-right.ant-input-rtl {
  border-right-width: 0;
}

.site-space-compact-wrapper .site-input-right.ant-input-rtl:hover,
.site-space-compact-wrapper .site-input-right.ant-input-rtl:focus {
  border-right-width: 1px;
}

.select-before {
  width: 90px;
}

.select-after {
  width: 80px;
}
</style>
