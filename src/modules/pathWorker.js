import { homedir } from 'os';
import { print } from '../utils/print.js';
import path from 'path';

let currentPath;

export const setCurrentPath = (path) => {
    currentPath = path;
};

export const getCurrentPath = () => currentPath;

export const setHomePath = () => {
    setCurrentPath(homedir());
}

export const getAbsoluteIfNot = (filePath) => {
    return path.isAbsolute(filePath) ? filePath : path.resolve(getCurrentPath(), filePath) ;
}

export const showCurrentPath = () => {
    print(`You are currently in ${getCurrentPath()}`);
};
