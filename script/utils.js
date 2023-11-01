import url from 'url';
import fs from 'fs-extra';
import path from 'path';

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export async function isFile(filePath) {
  const fileStats = await fs.stat(filePath);
  return fileStats.isFile();
}
