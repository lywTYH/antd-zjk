import { Transform } from 'stream';
import path from 'path';
/**
 *
 * @param {string} root
 * @param {Record<string,string>} alias
 * @example gulpDTSModule('./src',{'antd','./src/antd'})
 * @returns
 */
export default function gulpDTSModule(root, alias) {
  if (!root || typeof root !== 'string') {
    throw new TypeError(`root is required and must be a string`);
  }
  return new Transform({
    objectMode: true,
    transform: (file, enc, cb) => {
      if (file.isNull()) {
        return cb(null, file);
      }
      const aliasMap = new Map();
      const cwd = path.join(process.cwd(), root);
      Object.keys(alias).forEach((key) => {
        const relativeRootPath = path.join(cwd, path.relative(root, alias[key]));
        let relativeFilePath = path.relative(path.dirname(file.path), relativeRootPath);
        if (!relativeFilePath.startsWith('..')) {
          relativeFilePath = `./${relativeFilePath}`;
        }
        aliasMap.set(key, relativeFilePath);
      });
      let contents = String(file.contents);
      aliasMap.forEach((value, key) => {
        contents = String.prototype.replace.call(contents, key, value);
      });
      file.contents = Buffer.from(contents);
      return cb(null, file);
    },
  });
}
