//Exercise

const fs = require('fs').promises;

async function getSum() {
    let data = await fs.readFile('./data.json', 'utf-8');
    data = JSON.parse(data);
    // console.log(data);
    let sum = 0;
    for (let x of data) {
        sum += x.Salary
    }
    console.log(sum)
    await fs.writeFile('./totalSalary.txt', `Salary: ${sum}`)

}
getSum();