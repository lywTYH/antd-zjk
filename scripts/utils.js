import fs from 'fs-extra';
import chalk from 'chalk';

export class Logger {
  constructor() {
    this.log = console.log;
  }
  error(msg) {
    this.log(chalk.red(msg));
  }
  info(msg) {
    this.log(chalk.blue(msg));
  }
  success(msg) {
    this.log(chalk.green(msg));
  }
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export async function isFile(filePath) {
  const fileStats = await fs.stat(filePath);
  return fileStats.isFile();
}
