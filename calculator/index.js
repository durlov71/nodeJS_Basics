const add = require('./add.js')
const sub = require('./sub.js')
const mul = require('./mul.js')
const div = require('./div.js')

const a = parseInt(process.argv[2])
const choice = process.argv[3]
const b = parseInt(process.argv[4])

if (choice === '+') {
    console.log(add(a, b))
} else if (choice === '-') {
    console.log(sub(a, b))
} else if (choice === '*') {
    console.log(mul(a, b))
} else if (choice === '/') {
    console.log(div(a, b))
} else {
    console.log('Invalid Input')
}