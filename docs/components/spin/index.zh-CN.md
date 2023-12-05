---
category: Components
group: 反馈
title: Spin
subtitle: 加载中
demo:
  cols: 2
---

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本用法</code>
<code src="./demo/size.tsx">各种大小</code>
<code src="./demo/inside.tsx">容器</code>
<code src="./demo/nested.tsx">卡片加载中</code>
<code src="./demo/tip.tsx">自定义描述文案</code>
<code src="./demo/delayAndDebounce.tsx">延迟</code>
<code src="./demo/custom-indicator.tsx">自定义指示符</code>

## API

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）           | number (毫秒) | -         |
| indicator        | 加载指示符                                   | ReactNode     | -         |
| size             | 组件大小，可选值为 `small` `default` `large` | string        | `default` |
| spinning         | 是否为加载中状态                             | boolean       | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案         | ReactNode     | -         |
| wrapperClassName | 包装器的类属性                               | string        | -         |

## 主题变量（Design Token）

<ComponentTokenTable component="Spin"></ComponentTokenTable>

<style>
.content {
  padding: 50px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
</style>
