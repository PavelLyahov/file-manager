import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs';

export const cp = async (filePath, newFilePath) => {

    const sourcePath = pathWorker.getAbsoluteIfNot(filePath);
    const destinationPath = pathWorker.getAbsoluteIfNot(newFilePath);
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            print(`File ${sourcePath} was copied to ${destinationPath}`);
            resolve();
        });

        writeStream.on('error', (err) => {
            reject(err);
        });
    });
};
