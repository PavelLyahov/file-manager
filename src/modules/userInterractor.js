import readline from 'readline';
import * as commandExecutor from './commandExecutor.js';
import { exit } from './commands/system/exit.js';

export const useReadlineForInterraction = () => {

    process.stdin.on('keypress', (_, key) => {
        if ( key.ctrl && key.name === 'c' ) {
            exit();
        }
    });

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl
        .on('line', async (line) => {
            await commandExecutor.executeCommand(line.toString().trim());
        })
        .on('error', (err) => {
            print(err);
        });
}
