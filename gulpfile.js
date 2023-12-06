import autoprefixer from 'autoprefixer';
import { deleteAsync } from 'del';
import fs from 'fs-extra';
import gulp from 'gulp';
import gulpBabel from 'gulp-babel';
import postcss from 'gulp-postcss';
import gulpTS from 'gulp-typescript';
import merge2 from 'merge2';
import postcssNesting from 'postcss-nesting';

import gulpDTSModule from './scripts/gulp-dts-module.js';
import gulpTransform from './scripts/gulp-transform.js';
import { ComponentsToken, mapToken, seedToken } from './src/theme.js';

const buildPath = 'dist';
const babelConfig = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'antd/es': './src/antd',
          antd: './src/antd',
        },
      },
    ],
  ],
};

gulp.task('compileTSXForESM', () => {
  const tsProject = gulpTS.createProject('./tsconfig.json');
  const tsStream = gulp.src(['src/**/**/*.ts', 'src/**/**/*.tsx']).pipe(tsProject());
  const jsStream = tsStream.js.pipe(gulpBabel(babelConfig)).pipe(gulp.dest(buildPath));

  const dtsStream = tsStream.dts
    .pipe(gulpDTSModule('./src', { antd: './src/antd' }))
    .pipe(gulp.dest(buildPath));
  return merge2([jsStream, dtsStream]);
});

gulp.task('copyAntdWithTransform', () => {
  const antdTokenMatches = [
    'themes/seed.js',
    'theme/themes/default/index.js',
    'theme/util/genComponentStyleHook.js',
  ];
  const antdTokenTransform = (content, filePath) => {
    if (filePath.indexOf('seed.js') > -1) {
      return content.replace(
        'export default seedToken',
        `export default Object.assign({},seedToken,${JSON.stringify(seedToken)})`,
      );
    }
    if (filePath.indexOf('theme/themes/default/index.js') > -1) {
      return `${content.replace('export default function derivative', 'function _derivative')}
      export default function derivative(token){
        return Object.assign({}, _derivative(token), ${JSON.stringify(mapToken, undefined, 2)})
      }
    `;
    }
    if (filePath.indexOf('genComponentStyleHook.js') > -1) {
      return `${content.replace(
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
    return content;
  };
  return gulp
    .src(['./node_modules/antd/es/**/**'])
    .pipe(gulpTransform(antdTokenMatches, antdTokenTransform))
    .pipe(gulp.dest(`${buildPath}/antd`));
});

gulp.task('generatePackageJson', () => {
  return gulp
    .src(['./node_modules/antd/package.json'])
    .pipe(
      gulpTransform('package.json', async (content) => {
        const antdPkg = JSON.parse(content);
        const packageJson = await fs.readFile('./package.json');
        const ownerPkg = JSON.parse(packageJson.toString());
        // remove antd dep
        const { antd, ...rest } = ownerPkg.dependencies;
        ownerPkg.dependencies = Object.assign({}, antdPkg.dependencies, rest);
        ownerPkg.peerDependencies = Object.assign(
          {},
          antdPkg.peerDependencies || {},
          ownerPkg.peerDependencies || {},
        );
        return JSON.stringify(ownerPkg, undefined, 2);
      }),
    )
    .pipe(gulp.dest(buildPath));
});

gulp.task('css', () => {
  const plugins = [postcssNesting(), autoprefixer()];
  return gulp.src(['./src/**/*.css']).pipe(postcss(plugins)).pipe(gulp.dest(buildPath));
});

gulp.task('clean', () => deleteAsync([buildPath]));

gulp.task(
  'build:components',
  gulp.series([
    'clean',
    gulp.parallel(['copyAntdWithTransform', 'generatePackageJson']),
    gulp.parallel(['compileTSXForESM', 'css']),
  ]),
);
