---
category: Components
subtitle: 标签页
group: 数据展示
title: Tabs
---

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Csces 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本</code>
<code src="./demo/disabled.tsx">禁用</code>
<code src="./demo/centered.tsx">居中</code>
<code src="./demo/icon.tsx">图标</code>
<code src="./demo/custom-indicator.tsx">指示条</code>
<code src="./demo/slide.tsx">滑动</code>
<code src="./demo/extra.tsx">附加内容</code>
<code src="./demo/size.tsx">大小</code>
<code src="./demo/position.tsx">位置</code>
<code src="./demo/card.tsx">卡片式页签</code>
<code src="./demo/editable-card.tsx">新增和关闭页签</code>
<code src="./demo/custom-add-trigger.tsx">自定义新增页签触发器</code>
<code src="./demo/custom-tab-bar.tsx">自定义页签头</code>
<code src="./demo/custom-tab-bar-node.tsx">可拖拽标签</code>

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | - |  |
| addIcon | 自定义添加按钮 | ReactNode | - |  |
| animated | 是否使用动画切换 Tabs | boolean\| { inkBar: boolean, tabPane: boolean } | { inkBar: true, tabPane: false } |  |
| centered | 标签居中展示 | boolean | false |  |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | `第一个面板` |  |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |  |
| indicatorSize | 自定义指示条长度，默认与 tab 等宽 | number \| (origin: number) => number | - |  |
| items | 配置选项卡内容 | [TabItemType](#tabitemtype) | [] |  |
| moreIcon | 自定义折叠 icon | ReactNode | &lt;EllipsisOutlined /> |  |
| popupClassName | 更多菜单的 `className` | string | - |  |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - |  |
| size | 大小，提供 `large` `middle` 和 `small` 三种大小 | string | `middle` |  |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode \| {left?: ReactNode, right?: ReactNode} | - |  |
| tabBarGutter | tabs 之间的间隙 | number | - |  |
| tabBarStyle | tab bar 的样式对象 | CSSProperties | - |  |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |  |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构 | boolean | false |  |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string | `line` |  |
| onChange | 切换面板的回调 | function(activeKey) {} | - |  |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (action === 'add' ? event : targetKey, action): void | - |  |
| onTabClick | tab 被点击的回调 | function(key: string, event: MouseEvent) | - |  |
| onTabScroll | tab 滚动时触发 | function({ direction: `left` \| `right` \| `top` \| `bottom` }) | - |  |

### TabItemType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closeIcon | 自定义关闭图标，在 `type="editable-card"` 时有效。设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | - |
| disabled | 禁用某一项 | boolean | false |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| key | 对应 activeKey | string | - |
| label | 选项卡头显示文字 | ReactNode | - |
| children | 选项卡头显示内容 | ReactNode | - |

## 主题变量（Design Token）

<ComponentTokenTable component="Tabs"></ComponentTokenTable>

<style>
.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}

/* set transition to none when type="editable-card" */
.ant-tabs-editable > .ant-tabs-nav .ant-tabs-tab {
  transition: none;
}
</style>
