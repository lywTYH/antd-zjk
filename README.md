

## 构建流程

组件库基于 antd 组件库进行构建. 复制一份 antd es module 作为底层, 然后通过不同方式修改默认 ui token 的方式构建组件库.

通过 gulp 将各个流程组织起来进行构建.

### 构建细节

antd ui 共有 3 种层次的 token (seed token, map token, component token),根据实际情况不同采取不同的方式进行替换.

#### seed token

seed token 默认为一个 object

```js
// 源码
const seedToken ={....}
export default seedToken

// 替换后
export default Object.assign({},seedToken, {
  ...custom seed token
})
```

#### map token

map token 基于 seed token 的进行算法生成. 根据不同 theme 其算法不同. 默认使用的 default theme 算法, 由于 map token 生成后会被缓存. map token 的侵入放入算法文件中

```js
// 算法重命名
// export default function derivative -> function  _derivative
// 重新实现算法,并增加 custom map token;
export default function derivative(token){
   return Object.assign({}, _derivative(token), mapToken})
}
```

#### component token

component token 有一个总的入口获取各个组件默认的 token. 其拦截方式与 map token 类似

```js
// export default function genComponentStyleHook -> function _genComponentStyleHook
// 重新实现 genComponentStyleHook, 并增加 custom component token
export default function genComponentStyleHook(name, fn, getDefaultToken, op) {
  if (
    !getDefaultToken ||
    !overwriteComponentToken[name] ||
    Object.keys(overwriteComponentToken[name]) === 0
  ) {
    return _genComponentStyleHook(name, fn, getDefaultToken, op);
  }
  return _genComponentStyleHook(
    name,
    fn,
    (token) => {
      return Object.assign({}, getDefaultToken(token), overwriteComponentToken[name]);
    },
    op,
  );
}
```

#### package.json 

复制本项目的的 pkg.json 并合并 antd pkg.json 的依赖项. 

#### antd 路径

src 目录下使用 antd 其路径指向 node_modules, 但是编译后 antd es module 已经被复制, 应当使用复制后的 antd 路径, 即 

`import antd from 'antd'  -> import antd form './antd'`

其他不同文件下也会被修改为相对路径 ('../antd' 等).

其中 js 使用 babel 插件实现, dts 使用 replace 实现.

