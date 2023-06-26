import { welcome } from './welcome.js';
import { useReadlineForInterraction } from './userInterractor.js';

export const init = async () => {
    welcome();
    useReadlineForInterraction();
};
