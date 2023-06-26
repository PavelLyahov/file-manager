import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { print } from '../../../utils/print.js';

export const add = async (filename) => {
    const filepath = path.resolve(pathWorker.getCurrentPath(), filename);
    await fs.writeFile(filepath, '');
    print(`File ${filename} was created`);
};
