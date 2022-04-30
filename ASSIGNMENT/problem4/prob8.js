const fs = require('fs').promises;
const checkAFileExistsOrNot = async(fileName) => {
    try {
        await fs.access(`./${fileName}`);
        console.log('File/Folder exists');
    } catch (e) {
        console.log(`File/Folder don't exist`);
    }
};
const fileName = process.argv[2];
checkAFileExistsOrNot(fileName);