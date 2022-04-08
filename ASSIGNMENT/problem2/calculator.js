function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
// module.exports.add = add;     //export module
// module.exports.sub = sub;
module.exports = { //export module
    add,
    sub,
    mul,
    div,
}