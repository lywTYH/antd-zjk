---
category: Components
subtitle: 面包屑
group: 导航
title: Breadcrumb
demo:
  cols: 2
---

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

```jsx
// 推荐的写法 ✅
return <Breadcrumb items={[{ title: 'sample' }]} />;
// 或
return <Breadcrumb routes={[{ breadcrumbName: 'sample' }]} />;
```

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本</code>
<code src="./demo/withIcon.tsx">带有图标的</code>
<code src="./demo/separator.tsx">分隔符</code>
<code src="./demo/overlay.tsx">带下拉菜单的面包屑</code>
<code src="./demo/separator-component.tsx">独立的分隔符</code>
<code src="./demo/debug-routes.tsx">Debug Routes</code>

## API

### Breadcrumb

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | - |  |
| params | 路由的参数 | object | - |  |
| items | 路由栈信息 | [items\[\]](#ItemType) | - |  |
| separator | 分隔符自定义 | ReactNode | `/` |  |

### ItemType

> type ItemType = [RouteItemType](#RouteItemType) | [SeparatorType](#SeparatorType)

### RouteItemType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | string | - |  |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown-cn) | - |  |
| href | 链接的目的地，不能和 `path` 共用 | string | - |  |
| path | 拼接路径，每一层都会拼接前一个 `path` 信息。不能和 `href` 共用 | string | - |  |
| menu | 菜单配置项 | [MenuProps](/components/menu-cn/#api) | - |  |
| onClick | 单击事件 | (e:MouseEvent) => void | - |  |
| title | 名称 | ReactNode | - |  |

### SeparatorType

```ts
const item = {
  type: 'separator', // Must have
  separator: '/',
};
```

| 参数      | 说明           | 类型        | 默认值 | 版本 |
| --------- | -------------- | ----------- | ------ | ---- |
| type      | 标记为分隔符   | `separator` |        |      |
| separator | 要显示的分隔符 | ReactNode   | `/`    |      |

### 和 browserHistory 配合

和 react-router 一起使用时，默认生成的 url 路径是带有 `#` 的，如果和 browserHistory 一起使用的话，你可以使用 `itemRender` 属性定义面包屑链接。

```jsx
import { Link } from 'react-router';

const items = [
  {
    path: 'index',
    title: 'home',
  },
  {
    path: 'first',
    title: 'first',
    children: [
      {
        path: '/general',
        title: 'General',
      },
      {
        path: '/layout',
        title: 'Layout',
      },
      {
        path: '/navigation',
        title: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    title: 'second',
  },
];
function itemRender(item, params, items, paths) {
  const last = items.indexOf(item) === items.length - 1;
  return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>;
}

return <Breadcrumb itemRender={itemRender} items={items} />;
```

## 主题变量（Design Token）

<ComponentTokenTable component="Breadcrumb"></ComponentTokenTable>
