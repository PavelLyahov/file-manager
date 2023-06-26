import { print } from '../../../utils/print.js';
import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs';

export const mv = async (filePath, newFilePath) => {

    const sourcePath = pathWorker.getAbsoluteIfNot(filePath);
    const destinationPath = pathWorker.getAbsoluteIfNot(newFilePath);
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);

    readStream.pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            fs.unlink(sourcePath)
                .then(() => {
                    print(`File ${sourcePath} was moved to ${destinationPath}`);
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });

        writeStream.on('error', (err) => {
            reject(err);
        });
    });
};

