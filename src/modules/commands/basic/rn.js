import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs/promises';

export const rn = async (oldFilename, newFilename) => {

    const oldFilePath = pathWorker.getAbsoluteIfNot(oldFilename);
    const newFilePath = pathWorker.getAbsoluteIfNot(newFilename);

    await fs.rename(oldFilePath, newFilePath);
    print(`File renamed from ${oldFilename} to ${newFilename}`);
};
