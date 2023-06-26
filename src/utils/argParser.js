
const args = process.argv.slice(2);
const nameArg = '--username=';
const nameIfEmptyArg = 'Anonymus'

export const getUserNameFromArgs = () => {
    const usernameArg = args.find(elem => elem.includes(nameArg));
    return usernameArg ? usernameArg.split('=')[1] : nameIfEmptyArg;
}