---
category: Components
subtitle: 上传
group: 数据录入
title: Upload
demo:
  cols: 2
---

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">点击上传</code>
<code src="./demo/avatar.tsx">用户头像</code>
<code src="./demo/defaultFileList.tsx">已上传的文件列表</code>
<code src="./demo/picture-card.tsx">照片墙</code>
<code src="./demo/picture-circle.tsx">圆形照片墙</code>
<code src="./demo/fileList.tsx">完全控制的上传列表</code>
<code src="./demo/drag.tsx">拖拽上传</code>
<code src="./demo/upload-manually.tsx">手动上传</code>
<code src="./demo/upload-png-only.tsx">只上传 png 图片</code>
<code src="./demo/picture-style.tsx">图片列表样式</code>
<code src="./demo/preview-file.tsx">自定义预览</code>
<code src="./demo/max-count.tsx">限制数量</code>
<code src="./demo/transform-file.tsx">上传前转换文件</code>
<code src="./demo/upload-with-aliyun-oss.tsx">阿里云 OSS</code>
<code src="./demo/upload-custom-action-icon.tsx">自定义交互图标</code>
<code src="./demo/drag-sorting.tsx">上传列表拖拽排序</code>
<code src="./demo/crop-image.tsx">上传前裁切图片</code>
<code src="./demo/customize-progress-bar.tsx">自定义进度条样式</code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型 | string | - |  |
| action | 上传的地址 | string \| (file) => Promise&lt;string> | - |  |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。 | (file, fileList) => boolean \| Promise&lt;File> \| `Upload.LIST_IGNORE` | - |  |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | function | - |  |
| data | 上传所需额外参数或返回上传额外参数的方法 | object\|(file) => object \| Promise&lt;object> | - |  |
| defaultFileList | 默认已经上传的文件列表 | object\[] | - |  |
| directory | 支持上传文件夹 | boolean | false |  |
| disabled | 是否禁用 | boolean | false |  |
| fileList | 已经上传的文件列表（受控） | [UploadFile](#uploadfile)\[] | - |  |
| headers | 设置上传的请求头部 | object | - |  |
| iconRender | 自定义显示 icon | (file: UploadFile, listType?: UploadListType) => ReactNode | - |  |
| isImageUrl | 自定义缩略图是否使用 &lt;img /> 标签进行显示 | (file: UploadFile) => boolean |  |  |
| itemRender | 自定义上传列表项 | (originNode: ReactElement, file: UploadFile, fileList: object\[], actions: { download: function, preview: function, remove: function }) => React.ReactNode | - |  |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | string | `text` |  |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - |  |
| method | 上传请求的 http method | string | `post` |  |
| multiple | 是否支持多选文件。开启后按住 ctrl 可选择多个文件 | boolean | false |  |
| name | 发到后台的文件参数名 | string | `file` |  |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |  |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise&lt;dataURL: string> | - |  |
| progress | 自定义进度条样式 | [ProgressProps] | { strokeWidth: 2, showInfo: false } |  |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, previewIcon?: ReactNode \| (file: UploadFile) => ReactNode, removeIcon?: ReactNode \| (file: UploadFile) => ReactNode, downloadIcon?: ReactNode \| (file: UploadFile) => ReactNode } | true |  |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |  |
| onChange | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 [onChange](#onchange) | function | - |  |
| onDrop | 当文件被拖入上传区域时执行的回调功能 | (event: React.DragEvent) => void | - |  |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |  |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |  |
| onRemove   | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除               | function(file): boolean \| Promise | -   |  |

### UploadFile

继承自 File，附带额外属性用于渲染。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - |  |
| name | 文件名 | string | - | - |
| percent | 上传进度 | number | - | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `error` \| `done` \| `uploading` \| `removed` | - | - |
| thumbUrl | 缩略图地址 | string | - | - |
| uid | 唯一标识符，不设置时会自动生成 | string | - | - |
| url | 下载地址 | string | - | - |

### onChange

> 💡 上传中、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` 当前操作的文件对象。

   ```jsx
   {
      uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
      name: 'xx.png',   // 文件名
      status: 'done' | 'uploading' | 'error' | 'removed' , //  beforeUpload 拦截的文件没有 status 状态属性
      response: '{"status": "success"}', // 服务端响应内容
      linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
   }
   ```

2. `fileList` 当前的文件列表。

3. `event` 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

## 主题变量（Design Token）

<ComponentTokenTable component="Upload"></ComponentTokenTable>

<style>

/* tile uploaded pictures */
.upload-list-inline .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-inline-end: 8px;
}

.ant-upload-rtl.upload-list-inline .ant-upload-list-item {
  float: right;
}

.is-dragging a {
  pointer-events: none;
}
</style>
