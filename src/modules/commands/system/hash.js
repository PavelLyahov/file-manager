import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';

export const hash = async (filetpath) => {
    const content = await readFile(pathWorker.getAbsoluteIfNot(filetpath));
    const data = createHash('sha256').update(content);
    const hash = data.digest('hex');
    print(hash);
};
