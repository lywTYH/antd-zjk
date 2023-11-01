import { Transform } from 'stream';
/**
 * @param {string | string[]} matches
 * @param {(content:string,fileName:string)=> Promise<string|Buffer>} callback
 */
export default function gulpTransform(matches, callback) {
  if (!matches || !(Array.isArray(matches) || typeof matches === 'string')) {
    throw new TypeError(`match is required and must be a string or string array`);
  }
  if (!callback || typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  matches = Array.isArray(matches) ? matches : [matches];
  return new Transform({
    objectMode: true,
    transform: (file, enc, cb) => {
      if (file.isNull()) {
        return cb(null, file);
      }
      const filePath = file.path;
      const isMatch = matches.some((match) => filePath.match(new RegExp(match)));
      if (!isMatch) {
        return cb(null, file);
      }
      Promise.resolve(callback(String(file.contents), filePath)).then((data) => {
        file.contents = Buffer.from(data);
        return cb(null, file);
      });
    },
  });
}
