import os from 'node:os';
import { print } from '../../../utils/print.js';

export const osCommand = async (arg) => {
   
    const argMap = {
        '--EOL': eol,
        '--cpus': cpus,
        '--homedir': homedir,
        '--username': username,
        '--architecture': architecture
    };

    const commandFn = argMap[arg];
    await commandFn();    
};

const eol = async () => print(os.EOL);

const cpus = async () => print(os.cpus());

const homedir = async () => print(os.homedir());

const username = async () => print(os.userInfo().username);

const architecture = async () => print(os.arch());
