---
category: Components
group: 数据展示
subtitle: 日历
title: Calendar
---

按照日历形式展示数据的容器。

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" clientOnly>基本</code>
<code src="./demo/notice-calendar.tsx" clientOnly>通知事项日历</code>
<code src="./demo/card.tsx" clientOnly>卡片模式</code>
<code src="./demo/select.tsx" clientOnly>选择功能</code>
<code src="./demo/lunar.tsx" clientOnly>农历日历</code>
<code src="./demo/customize-header.tsx" clientOnly>自定义头部</code>

## API

```jsx
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| cellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - |  |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - |  |
| defaultValue | 默认展示的日期 | [dayjs](https://day.js.org/) | - |  |
| disabledDate | 不可选择的日期，参数为当前 `value` | (currentDate: Dayjs) => boolean | - |  |
| fullscreen | 是否全屏显示 | boolean | true |  |
| headerRender | 自定义头部内容 | function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()}) | - |  |
| locale | 国际化配置 | object |  |  |
| mode | 初始模式 | `month` \| `year` | `month` |  |
| cellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - |  |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - |  |
| validRange | 设置可以显示的日期 | \[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  |
| value | 展示日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 日期变化回调 | function(date: Dayjs) | - |  |
| onPanelChange | 日期面板变化回调 | function(date: Dayjs, mode: string) | - |  |
| onSelect | 选择日期回调，包含来源信息 | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - |  |

## 主题变量（Design Token）

<ComponentTokenTable component="Calendar"></ComponentTokenTable>

<style>
.events {
  margin: 0;
  padding: 0;
  list-style: none;
}
.events .ant-badge-status {
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.notes-month {
  font-size: 28px;
  text-align: center;
}
.notes-month section {
  font-size: 28px;
}
</style>
