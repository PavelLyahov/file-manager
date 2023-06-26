import * as pathWorker from '../../pathWorker.js';
import { resolve } from 'path';

export const cd = async (destination) => {
    const oldPath = pathWorker.getCurrentPath();
    const newPath = resolve(oldPath, destination);
    process.chdir(newPath);
    pathWorker.setCurrentPath(newPath);
};
