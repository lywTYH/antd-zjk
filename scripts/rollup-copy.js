import path from 'path';
import fs from 'fs-extra';
import globby from 'globby';
import { isObject, isFile } from './utils.js';
/**
 * @param {object} options
 * @param {object[]} options.target
 * @param {string | string[]} options.target[].src
 * @param {string | (path:string)=>string} options.target[].dest
 * @param {string | undefined} options.target[].hook
 * @param {{matches:string | string[], callback:(content:Buffer,fileName:string)=>Promise<string|Buffer>} | undefined } options.target[].transform
 * @param {boolean| undefined} options.copySync
 * @returns {rollup.Plugin}
 */
export default function copy(options = {}) {
  const { copySync = false, hook = 'buildEnd', targets = [] } = options;
  let copied = false;
  return {
    name: 'copyAndReplace',
    [hook]: async () => {
      if (copied) {
        return;
      }
      if (!Array.isArray(targets) || targets.length === 0) {
        copied = true;
        return;
      }
      targets.forEach((target) => {
        if (!isObject(target)) {
          throw new Error(`target must be an object`);
        }
        const { dest, src, transform } = target;
        if (!src || !dest) {
          throw new Error(`target must have "src" and "dest" properties`);
        }
        if (transform && (!transform.matches || !transform.callback)) {
          throw new Error(`transform must have "matches" and "callback" properties`);
        }
      });

      const copyTargets = [];
      for (const target of targets) {
        const { dest, src, transform } = target;
        const matchedPaths = await globby(src);
        if (matchedPaths.length < 1) {
          continue;
        }
        const transformMatches = transform
          ? Array.isArray(transform.matches)
            ? transform.matches
            : [transform.matches]
          : undefined;

        for (const matchedPath of matchedPaths) {
          let match = false;
          if (transformMatches) {
            match = transformMatches.some((match) => matchedPath.match(new RegExp(match)));
          }
          const generatedCopyTargets = await generateCopyTarget(
            matchedPath,
            typeof dest === 'function' ? dest(matchedPath) : dest,
            match && transform ? transform.callback : undefined,
          );
          copyTargets.push(generatedCopyTargets);
        }
      }
      if (copyTargets.length) {
        for (const copyTarget of copyTargets) {
          const { contents, dest, src } = copyTarget;
          if (contents) {
            await fs.outputFile(dest, contents);
          } else if (!copySync) {
            await fs.copy(src, dest);
          } else {
            fs.copySync(src, dest);
          }
        }
      }
      copied = true;
    },
  };
}

async function generateCopyTarget(src, dest, callback) {
  const { base } = path.parse(src);
  if (callback && (await isFile(src))) {
    return {
      src,
      dest,
      contents: await callback(await fs.readFile(src), base),
    };
  }
  return {
    src,
    dest,
  };
}
