// Assignment 3
// const fsp = require('fs').promises;

// const createReadRenameDeleteOp = async() => {

//     await fsp.writeFile('./hello.txt', 'Hello World!');
//     const greetings = await fsp.readFile('./hello.txt', 'utf-8');
//     console.log(greetings);

//     await fsp.rename('./hello.txt', './message.txt');

//     await fsp.unlink('./message.txt');
// };
// createReadRenameDeleteOp();



// Assignment 4
const fsp = require('fs').promises;
const showFileInformation = async() => {
    const stats = await fsp.stat('./index.js');
    console.log(stats);
    // Object that provides information about a file.
    console.log(stats.birthtime);
    // The timestamp indicating the creation time of this file.
    console.log(stats.atime);
    // The timestamp indicating the last time this file was accessed.
    console.log(stats.mtime);
    // The timestamp indicating the last time this file was modified.
    console.log(stats.size);
    // The size of the file in bytes.
    console.log(stats.isDirectory());
    // Returns true if this is a folder/directory.
    console.log(stats.isFile());
    // Returns true if this is a regular file.
};
showFileInformation();