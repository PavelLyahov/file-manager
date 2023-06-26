import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs';

export const cat = async (filename) => {
    const sourcePath = pathWorker.getAbsoluteIfNot(filename);
    const readStream = fs.createReadStream(sourcePath);

    readStream.on('data', (data) => {
        process.stdout.write(data);
    });
    
    return new Promise((resolve, reject) => {
        readStream.on('end', () => {
            print(`File ${sourcePath} was read`);
            resolve();
        });
    
        readStream.on('error', (err) => {
          reject(err);
        });
    });
};
    