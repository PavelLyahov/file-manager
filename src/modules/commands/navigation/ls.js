import * as pathWorker from '../../pathWorker.js';
import fs from 'node:fs/promises';

export const ls = async () => {

    const files = await fs.readdir(pathWorker.getCurrentPath(), { withFileTypes: true });
    Promise.all(files);

    const filesList = files
        .map((file) => ({
            Name: file.name,
            Type: file.isFile() ? 'file' : 'directory',
        }))
        .sort((a, b) => a.Name.localeCompare(b.Name));
    
    console.table(filesList);
};
