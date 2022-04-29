// find file and folder into a folder with Fs modules

const fs = require('fs').promises;
let showFilesAndFolders = async() => {
    const filesFolders = await fs.readdir('./products');
    console.log(filesFolders);
};
showFilesAndFolders();


// Find only files name not folder name with fs module
// Assignment 6
// const fs = require('fs').promises;
let showFiles = async() => {
    // If withFileTypes is set to true, the files array will contain fs.Dirent objects.
    const filesFolders = await fs.readdir('./products', { withFileTypes: true });
    // filter out the files
    const files = filesFolders.filter((file) => !file.isDirectory());
    console.log(files);
};
showFiles();