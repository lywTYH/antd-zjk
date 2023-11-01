import gulp from 'gulp';
import { deleteAsync } from 'del';
import fs from 'fs-extra';
import gulpTS from 'gulp-typescript';
import merge2 from 'merge2';
import gulpBabel from 'gulp-babel';

import { Logger } from './scripts/utils.js';
import gulpTransform from './scripts/gulp-transform.js';
import { seedToken, mapToken, ComponentsToken } from './src/theme.js';

const buildPath = 'dist';
const logger = new Logger();
const babelConfig = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead', 'not IE 11'],
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          antd: './src/antd',
        },
      },
    ],
  ],
};

gulp.task('compileTSXForESM', () => {
  const tsProject = gulpTS.createProject('./tsconfig.json');
  const tsStream = gulp.src(['src/**/**/*.ts', 'src/**/**/*.tsx']).pipe(tsProject());
  const jsStream = tsStream.js
    .pipe(gulpBabel(babelConfig))
    .pipe(gulp.dest(buildPath))
    .on('end', () => {
      logger.success('ts compile success');
    });

  const dtsStream = tsStream.dts.pipe(gulp.dest(buildPath)).on('end', () => {
    logger.success('ts type compile success');
  });
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
    .pipe(gulp.dest(`${buildPath}/antd`))
    .on('end', () => {
      logger.success('antd copy and transform success');
    });
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
    .pipe(gulp.dest(buildPath))
    .on('end', () => {
      logger.success('package.json file generated');
    });
});

gulp.task('clean', (done) =>
  deleteAsync([`${buildPath}/**/**}`]).then(() => {
    logger.success('dist deleted');
    done();
  }),
);

gulp.task(
  'compile',
  gulp.series([
    'clean',
    gulp.parallel(['copyAntdWithTransform', 'generatePackageJson']),
    'compileTSXForESM',
  ]),
);
