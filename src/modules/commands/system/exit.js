import { print } from '../../../utils/print.js';
import { getUsername } from '../../../utils/globalVariables.js';

export const exit = async () => {
    print(`Thank you for using File Manager, ${getUsername()}, goodbye!`);
    process.exit();
};
