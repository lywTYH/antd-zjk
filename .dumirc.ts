import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: '_docs',
  live: true,
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src' },
      { type: 'component', dir: 'docs' },
    ],
    codeBlockMode: 'passive',
  },
  mfsu: false,
  alias: {
    'antd/es': path.join(__dirname, 'dist/antd'),
    antd: path.join(__dirname, 'dist'),
  },
  metas: [{ name: 'theme-color', content: '#1677ff' }],
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [new RegExp('index/components/')],
  },
  // favicons
  // more config: https://d.umijs.org/config
});
