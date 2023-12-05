---
category: Components
subtitle: 图片
group: 数据展示
title: Image
cols: 2
---

可预览的图片。

## 何时使用

- 需要展示图片时使用。
- 加载显示大图或加载失败时容错处理。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本用法</code>
<code src="./demo/fallback.tsx">容错处理</code>
<code src="./demo/placeholder.tsx">渐进加载</code>
<code src="./demo/preview-group.tsx">多张图片预览</code>
<code src="./demo/preview-group-visible.tsx">相册模式</code>
<code src="./demo/previewSrc.tsx">自定义预览图片</code>
<code src="./demo/controlled-preview.tsx">受控的预览</code>
<code src="./demo/toolbarRender.tsx">自定义工具栏</code>
<code src="./demo/imageRender.tsx">自定义预览内容</code>

## API

### Image

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alt | 图像描述 | string | - |
| fallback | 加载失败容错地址 | string | - |
| height | 图像高度 | string \| number | - |
| placeholder | 加载占位，为 `true` 时使用默认占位 | ReactNode | - |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewType](#previewtype) | true |
| src | 图片地址 | string | - |
| width | 图像宽度 | string \| number | - |
| onError | 加载错误回调 | (event: Event) => void | - |

### PreviewType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| src | 自定义预览 src | string | - |  |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - |  |
| movable | 是否可移动 | boolean | true |  |
| mask | 缩略图遮罩 | ReactNode | - |  |
| maskClassName | 缩略图遮罩类名 | string | - |  |
| rootClassName | 预览图的根 DOM 类名 | string | - |  |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 |  |
| maxScale | 最大放大倍数 | number | 50 |  |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - |  |
| forceRender | 强制渲染预览图 | boolean | - | - |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: Omit<[ToolbarRenderInfoType](#toolbarrenderinfotype), 'current' \| 'total'>) => React.ReactNode | - |  |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype) }) => React.ReactNode | - |  |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - |  |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean) => void | - | - |

## PreviewGroup

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewGroupType](#previewgrouptype) | true |  |
| items | 预览数组 | string[] \| { src: string, crossOrigin: string, ... }[] | - |  |
| fallback | 加载失败容错地址 | string | - |  |

### PreviewGroupType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - |  |
| movable | 是否可移动 | boolean | true |  |
| current | 当前预览图的 index | number | - |  |
| mask | 缩略图遮罩 | ReactNode | - |  |
| maskClassName | 缩略图遮罩类名 | string | - |  |
| rootClassName | 预览图的根 DOM 类名 | string | - |  |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 |  |
| maxScale | 最大放大倍数 | number | 50 |  |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - |  |
| forceRender | 强制渲染预览图 | boolean | - | - |
| countRender | 自定义预览计数内容 | (current: number, total: number) => React.ReactNode | - |  |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: [ToolbarRenderInfoType](#toolbarrenderinfotype)) => React.ReactNode | - |  |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), current: number }) => React.ReactNode | - |  |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - |  |
| onChange | 切换预览图的回调 | (current: number, prevCurrent: number) => void | - |  |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean, current: number) => void | - |  |

## Interface

### TransformType

```typescript
{
  x: number;
  y: number;
  rotate: number;
  scale: number;
  flipX: boolean;
  flipY: boolean;
}
```

### TransformAction

```typescript
type TransformAction =
  | 'flipY'
  | 'flipX'
  | 'rotateLeft'
  | 'rotateRight'
  | 'zoomIn'
  | 'zoomOut'
  | 'close'
  | 'prev'
  | 'next'
  | 'wheel'
  | 'doubleClick'
  | 'move'
  | 'dragRebound';
```

### ToolbarRenderInfoType

```typescript
{
  icons: {
    flipYIcon: React.ReactNode;
    flipXIcon: React.ReactNode;
    rotateLeftIcon: React.ReactNode;
    rotateRightIcon: React.ReactNode;
    zoomOutIcon: React.ReactNode;
    zoomInIcon: React.ReactNode;
  };
  actions: {
    onFlipY: () => void;
    onFlipX: () => void;
    onRotateLeft: () => void;
    onRotateRight: () => void;
    onZoomOut: () => void;
    onZoomIn: () => void;
  };
  transform: TransformType,
  current: number;
  total: number;
}
```

## 主题变量（Design Token）

<ComponentTokenTable component="Image"></ComponentTokenTable>

<style>
.toolbar-wrapper {
  position: fixed;
  bottom: 32px;
  left: 50%;
  padding: 0px 24px;
  color: #fff;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  transform: translateX(-50%);
}

.toolbar-wrapper .anticon {
  padding: 12px;
  cursor: pointer;
}

.toolbar-wrapper .anticon[disabled] {
  cursor: not-allowed;
  opacity: 0.3;
}

.toolbar-wrapper .anticon:hover {
  opacity: 0.3;
}

.customize-mask {
  font-size: 20px;
  opacity: 1;
}
.customize-mask .anticon {
  font-size: 32px;
}
</style>
