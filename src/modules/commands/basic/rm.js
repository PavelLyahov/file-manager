import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs/promises';

export const rm = async (filename) => {
    const filePath = pathWorker.getAbsoluteIfNot(filename);
    await fs.rm(filePath);
    print(`File was successfully removed ${filename}`);
};