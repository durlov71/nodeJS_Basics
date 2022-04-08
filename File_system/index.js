// file system

const fs = require('fs').promises;

async function fileSystemsOperations() {
    // await fs.writeFile('./app.txt', 'hello from fs \nwe love node js');   //create file
    // const data = await fs.readFile('./app.txt', 'utf-8');   // read file
    // console.log(data);
    // await fs.rename('./app.txt', './changed.txt') //rename file
    await fs.unlink('./changed.txt')
}
fileSystemsOperations();

//create file
// fs.writeFile('./app.txt', 'hello from fs \nwe love node js', (err) => {
//     if (err) console.log(err);
//     else console.log('file just created')
// })


// Read file
// fs.readFile('./app.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err)
//     else console.log(data)
// })


// Rename file 
// fs.rename('./app.txt', './renamed.txt', (err) => {
//     if (err) console.log(err)
//     else console.log('File renamed')
// })




// DeleTe file
// fs.unlink('./renamed.txt', (err) => {
//     if (err) console.log(err)
//     else console.log('File deleted');
// })