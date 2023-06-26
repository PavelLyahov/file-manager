import { print } from '../utils/print.js';
import { getUserNameFromArgs} from '../utils/argParser.js';
import { setUsername } from '../utils/globalVariables.js'
import * as pathWorker from './pathWorker.js';

export const welcome = () => {
    const username = getUserNameFromArgs();
    setUsername(username);
    print(`Welcome to the File Manager, ${username}!`)
    print(`To exit press "Ctrl + C" or '.exit'`);
    
    pathWorker.setHomePath();
    pathWorker.showCurrentPath();
};
