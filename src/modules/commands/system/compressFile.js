import fs from 'node:fs';
import { createGzip } from 'node:zlib';
import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';

export const compress = async (filePath, fileDestination) => {
    
    const sourcePath = pathWorker.getAbsoluteIfNot(filePath);
    const destinationPath = pathWorker.getAbsoluteIfNot(fileDestination);
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    return new Promise((resolve, reject) => {
        readStream.pipe(createGzip).pipe(writeStream)
        .on('finish', () => {
            print(`File ${filePath} was compressed to ${fileDestination}`);
            resolve();
        })
        .on('error', (err) => {
            reject(err);
        });
    });
};
