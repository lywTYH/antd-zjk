---
category: Components
subtitle: 颜色选择器
title: ColorPicker
demo:
  cols: 2
group:
  title: 数据录入
---

## 何时使用

当用户需要自定义颜色选择的时候使用。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/base.tsx">基本使用</code>
<code src="./demo/size.tsx">触发器尺寸大小</code>
<code src="./demo/controlled.tsx">受控模式</code>
<code src="./demo/change-completed.tsx">颜色完成选择</code>
<code src="./demo/text-render.tsx">渲染触发器文本</code>
<code src="./demo/disabled.tsx">禁用</code>
<code src="./demo/disabled-alpha.tsx">禁用透明度</code>
<code src="./demo/allowClear.tsx">清除颜色</code>
<code src="./demo/trigger.tsx">自定义触发器</code>
<code src="./demo/trigger-event.tsx">自定义触发事件</code>
<code src="./demo/format.tsx">颜色编码</code>
<code src="./demo/presets.tsx">预设颜色</code>
<code src="./demo/panel-render.tsx">自定义面板</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| allowClear | 允许清除选择的颜色 | boolean | false | |
| arrow | 配置弹出的箭头 | `boolean \| { pointAtCenter: boolean }` | true | |
| children | 颜色选择器的触发器 | React.ReactNode | - | |
| defaultValue | 颜色默认的值 | string \| `Color` | - | |
| defaultFormat | 颜色格式默认的值 | `rgb` \| `hex` \| `hsb` | - | |
| disabled | 禁用颜色选择器 | boolean | - | |
| disabledAlpha | 禁用透明度 | boolean | - |   |
| destroyTooltipOnHide | 关闭后是否销毁弹窗 | `boolean` | false |  |
| format | 颜色格式 | `rgb` \| `hex` \| `hsb` | `hex` | |
| open | 是否显示弹出窗口 | boolean | - | |
| presets | 预设的颜色 | `{ label: ReactNode, colors: Array<string \| Color> }[]` | - | |
| placement | 弹出窗口的位置 | `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | `bottomLeft` | |
| panelRender | 自定义渲染面板 | `(panel: React.ReactNode, extra: { components: { Picker: FC; Presets: FC } }) => React.ReactNode` | - |   |
| showText | 显示颜色文本 | boolean \| `(color: Color) => React.ReactNode` | - |  |
| size | 设置触发器大小 | `large` \| `middle` \| `small` | `middle` |  |
| trigger | 颜色选择器的触发模式 | `hover` \| `click` | `click` | |
| value | 颜色的值 | string \| `Color` | - | |
| onChange | 颜色变化的回调 | `(value: Color, hex: string) => void` | - | |
| onChangeComplete | 颜色选择完成的回调  | `(value: Color) => void` | - |  |
| onFormatChange | 颜色格式变化的回调 | `(format: 'hex' \| 'rgb' \| 'hsb') => void` | - | |
| onOpenChange | 当 `open` 被改变时的回调 | `(open: boolean) => void` | - | |
| onClear | 清除的回调 | `() => void` | - |  |

### Color

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| toHex | 转换成 `hex` 格式字符，返回格式如：`1677ff` | `() => string` | - |
| toHexString | 转换成 `hex` 格式颜色字符串，返回格式如：`#1677ff` | `() => string` | - |
| toHsb | 转换成 `hsb` 对象  | `() => ({ h: number, s: number, b: number, a number })` | - |
| toHsbString | 转换成 `hsb` 格式颜色字符串，返回格式如：`hsb(215, 91%, 100%)` | `() => string` | - |
| toRgb | 转换成 `rgb` 对象  | `() => ({ r: number, g: number, b: number, a number })` | - |
| toRgbString | 转换成 `rgb` 格式颜色字符串，返回格式如：`rgb(22, 119, 255)` | `() => string` | - |
