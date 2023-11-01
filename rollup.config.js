import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from 'rollup-plugin-dts';
import fs from 'fs-extra';
import copy from './script/rollup-copy.js';
import { seedToken, mapToken, ComponentsToken } from './src/theme.js';
import packageJson from './package.json' assert { type: 'json' };

const antdCopyConfig = {
  src: 'node_modules/antd/es/',
  dest: (path) => {
    return `dist/antd/${path.split('/es/')[1]}`;
  },
  transform: {
    matches: [
      'themes/seed.js',
      'theme/themes/default/index.js',
      'theme/util/genComponentStyleHook.js',
    ],
    callback: async (content, fileName) => {
      const str = content.toString();
      if (fileName === 'seed.js') {
        return str.replace(
          'export default seedToken',
          `export default Object.assign({},seedToken,${JSON.stringify(seedToken)})`,
        );
      }
      if (fileName === 'index.js') {
        return `${str.replace('export default function derivative', 'function _derivative')}
          export default function derivative(token){
            return Object.assign({}, _derivative(token), ${JSON.stringify(mapToken, undefined, 2)})
          }
        `;
      }
      if (fileName === 'genComponentStyleHook.js') {
        // 无法通过设置 mapToken 覆盖 默认函数 token
        return `${str.replace(
          'export default function genComponentStyleHook',
          'function _genComponentStyleHook',
        )}
          const overwriteComponentToken= ${JSON.stringify(ComponentsToken, undefined, 2)}
          export default function genComponentStyleHook(name,fn,getDefaultToken,op){
            if(!getDefaultToken || !overwriteComponentToken[name]||Object.keys(overwriteComponentToken[name])===0){
              return _genComponentStyleHook(name, fn, getDefaultToken, op)
            }
            return  _genComponentStyleHook(name, fn, (token)=>{
              return Object.assign({},  getDefaultToken(token), overwriteComponentToken[name]) 
            }, op)
          }
        `;
      }
      return str;
    },
  },
};

const packageJsonCopyConfig = {
  src: 'node_modules/antd/package.json',
  dest: (path) => 'dist/package.json',
  transform: {
    matches: 'package.json',
    callback: async (content, fileName) => {
      const antdPkg = JSON.parse(content.toString());
      // remove antd dep
      const { antd, ...rest } = packageJson.dependencies;
      packageJson.dependencies = Object.assign({}, antdPkg.dependencies, rest);
      packageJson.peerDependencies = Object.assign(
        {},
        antdPkg.peerDependencies || {},
        packageJson.peerDependencies || {},
      );
      return JSON.stringify(packageJson, undefined, 2);
    },
  },
};

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
    },
  ],
  plugins: [
    copy({
      targets: [antdCopyConfig, packageJsonCopyConfig],
    }),
  ],
};
