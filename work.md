1. copy es antd to dist   success
2. overwrite seedToken    success
3. overwrite mapToken     success
4. overwrite componentToken success

## high priority
  + 4.1 replace rollup 
     替换 rollup，rollup 作为一个打包工具并不适合组件开发，打包后 tree shaking 支持度低还失去 ui 组件良好的结构。
     考虑到实际工作并不需要 unpkg, 意义太低。 success
  + 整理依赖 
  
5. check type success
6. work as npm 

7. add custom component 
8. add doc 