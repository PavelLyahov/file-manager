
export const print = (data) => {
    const underline = '\x1B[4m';
    const reset = '\x1B[0m';
    console.log(`${underline}${data}${reset}`);
};
