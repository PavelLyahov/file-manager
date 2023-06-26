import * as pathWorker from './pathWorker.js';
import { print } from '../utils/print.js';
import { exit } from './commands/system/exit.js';
import { up } from './commands/navigation/up.js';
import { cd } from './commands/navigation/cd.js';
import { ls } from './commands/navigation/ls.js';
import { cat } from './commands/basic/cat.js';
import { add } from './commands/basic/add.js';
import { rn } from './commands/basic/rn.js';
import { cp } from './commands/basic/cp.js';
import { mv } from './commands/basic/mv.js';
import { rm } from './commands/basic/rm.js';
import { osCommand } from './commands/system/osCommand.js';
import { hash } from './commands/system/hash.js';
import { compress } from './commands/system/compressFile.js';
import { decompress } from './commands/system/decompressFile.js';

const invalidInputMessage = 'Invalid input';
const failedMessage = 'Operation failed';

export const executeCommand = async (str) => {
    try {
        const commandObj = parseCommand(str);
        const commandFn = getCommandFunction(commandObj.command);
        if (commandFn) {
            await commandFn(...commandObj.args);
        } else {
            print(invalidInputMessage);
        }
    } catch (err) {
        print(failedMessage);
    }
    
    pathWorker.showCurrentPath();
}

const parseCommand = (str) => {
    const parts = str.trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);
    return { command, args };
}

const getCommandFunction = (command) => {
    const commandMap = {
        '.exit': exit,
        'up': up,
        'cd': cd,
        'ls': ls,
        'cat': cat,
        'add': add,
        'rn': rn,
        'cp': cp,
        'mv': mv,
        'rm': rm,
        'os': osCommand,
        'hash' : hash,
        'compress' : compress,
        'decompress' : decompress
    };
    return commandMap[command];
}
