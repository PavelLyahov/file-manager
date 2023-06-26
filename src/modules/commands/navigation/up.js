import * as pathWorker from '../../pathWorker.js';
import { resolve } from 'path';

const commandToUp = '..';

export const up = async () => {
    const oldPath = pathWorker.getCurrentPath();
    const newPath = resolve(oldPath, commandToUp);
    process.chdir(newPath);
    pathWorker.setCurrentPath(newPath);
};
