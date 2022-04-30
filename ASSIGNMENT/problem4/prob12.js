// Assignment 12
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
const chalk = require('chalk');
console.log(chalk.green('Hello world'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.underline.bgRed('Hello world'));