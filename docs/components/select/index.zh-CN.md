---
category: Components
subtitle: 选择器
group: 数据录入
title: Select
demo:
  cols: 2
---

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 `Radio` 是更好的选择。
- 如果你在寻找一个可输可选的输入框，那你可能需要 `AutoComplete`

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本使用</code>
<code src="./demo/search.tsx">带搜索框</code>
<code src="./demo/multiple.tsx">多选</code>
<code src="./demo/size.tsx">三种大小</code>
<code src="./demo/option-label-prop.tsx">定制回填内容</code>
<code src="./demo/search-sort.tsx">带排序的搜索</code>
<code src="./demo/tags.tsx">标签</code>
<code src="./demo/optgroup.tsx">分组</code>
<code src="./demo/coordinate.tsx">联动</code>
<code src="./demo/search-box.tsx">搜索框</code>
<code src="./demo/label-in-value.tsx">获得选项的文本</code>
<code src="./demo/automatic-tokenization.tsx">自动分词</code>
<code src="./demo/select-users.tsx">搜索用户</code>
<code src="./demo/suffix.tsx" debug>后缀图标</code>
<code src="./demo/custom-dropdown-menu.tsx">扩展菜单</code>
<code src="./demo/hide-selected.tsx">隐藏已选择选项</code>
<code src="./demo/bordered.tsx">无边框</code>
<code src="./demo/custom-tag-render.tsx">自定义选择标签</code>
<code src="./demo/responsive.tsx">响应式 maxTagCount</code>
<code src="./demo/big-data.tsx">大数据</code>
<code src="./demo/status.tsx">自定义状态</code>
<code src="./demo/placement.tsx">弹出位置</code>
<code src="./demo/placement-debug.tsx" debug>动态高度</code>
<code src="./demo/debug.tsx" debug>4.0 Debug</code>
<code src="./demo/render-panel.tsx" debug>\_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/option-label-center.tsx" debug>选项文本居中</code>
<code src="./demo/debug-flip-shift.tsx" iframe="200" debug>翻转+偏移</code>
<code src="./demo/component-token.tsx" debug>组件 Token</code>

## API

### Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | false |  |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true |  |
| autoFocus | 默认获取焦点 | boolean | false |  |
| bordered | 是否有边框 | boolean | true |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |  |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |  |
| defaultValue | 指定默认选中的条目 | string \| string\[] \|<br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| disabled | 是否禁用 | boolean | false |  |
| popupClassName | 下拉菜单的 className 属性 | string | - |  |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true |  |
| dropdownRender | 自定义下拉框内容 | (originNode: ReactNode) => ReactNode | - |  |
| dropdownStyle | 下拉菜单的 style 属性 | CSSProperties | - |  |
| fieldNames | 自定义节点 label、value、options、groupLabel 的字段 | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | ） |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | boolean \| function(inputValue, option) | true |  |
| filterSort | 搜索时对筛选结果项的排序函数 | (optionA: Option, optionB: Option) => number | - |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | function(triggerNode) | () => document.body |  |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 { value: string, label: ReactNode } 的格式 | boolean | false |  |
| listHeight | 设置弹窗滚动高度 | number | 256 |  |
| loading | 加载中状态 | boolean | false |  |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - |  |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |  |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |  |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | ReactNode | - |  |
| mode | 设置 Select 的模式为多选或标签 | `multiple` \| `tags` | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |  |
| open | 是否展开下拉菜单 | boolean | - |  |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内嵌内容进行搜索。若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。 | string | `value` |  |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。 | string | `children` |  |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }\[] | - |  |
| placeholder | 选择框默认文本 | string | - |  |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |  |
| searchValue | 控制搜索文本 | string | - |  |
| showSearch | 配置是否可搜索 | boolean | 单选为 false，多选为 true |  |
| size | 选择框大小 | `large` \| `middle` \| `small` | `middle` |  |
| status | 设置校验状态 | 'error' \| 'warning' | - |  |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传。 | ReactNode | `<DownOutlined />` |  |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) => ReactNode | - |  |
| tokenSeparators | 自动分词的分隔符，仅在 `mode="tags"` 时生效 | string\[] | - |  |
| value | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string \| string\[] \| <br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true |  |
| onBlur | 失去焦点时回调 | function | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value, option:Option \| Array&lt;Option>) | - |  |
| onClear | 清除内容时回调 | function | - |  |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | function(value: string \| number \| LabeledValue) | - |  |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |  |
| onFocus | 获得焦点时回调 | function | - |  |
| onInputKeyDown | 按键按下时回调 | function | - |  |
| onMouseEnter | 鼠标移入时回调 | function | - |  |
| onMouseLeave | 鼠标移出时回调 | function | - |  |
| onPopupScroll | 下拉列表滚动时的回调 | function | - |  |
| onSearch | 文本框值变化时回调 | function(value: string) | - |  |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value: string \| number \| LabeledValue, option: Option) | - |  |

### Select Methods

| 名称    | 说明     | 版本 |
| ------- | -------- | ---- |
| blur()  | 取消焦点 |      |
| focus() | 获取焦点 |      |

### Option props

| 参数      | 说明                     | 类型             | 默认值 | 版本 |
| --------- | ------------------------ | ---------------- | ------ | ---- |
| className | Option 器类名            | string           | -      |      |
| disabled  | 是否禁用                 | boolean          | false  |      |
| title     | 选项上的原生 title 提示  | string           | -      |      |
| value     | 默认根据此属性值进行筛选 | string \| number | -      |      |

### OptGroup props

| 参数  | 说明 | 类型                    | 默认值 | 版本 |
| ----- | ---- | ----------------------- | ------ | ---- |
| key   | Key  | string                  | -      |      |
| label | 组名 | string \| React.Element | -      |      |

## 主题变量（Design Token）

<ComponentTokenTable component="Select"></ComponentTokenTable>
