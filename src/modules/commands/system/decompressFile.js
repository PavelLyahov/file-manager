import fs from 'fs';
import { createGunzip } from 'zlib';
import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';

export const decompress = async (filePath, fileDestination) => {

    const sourcePath = pathWorker.getAbsoluteIfNot(filePath);
    const destinationPath = pathWorker.getAbsoluteIfNot(fileDestination);
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    return new Promise((resolve, reject) => {
        readStream.pipe(createGunzip).pipe(writeStream)
        .on('finish', () => {
            print(`File ${filePath} was decompressed to ${fileDestination}`);
            resolve();
        })
        .on('error', (err) => {
            reject(err);
        });
    });
};