const calcModule = require (__dirname + '/calcModule.js');

let thisSum = calcModule(2, 3, '+');
console.log(`Sum is: ${thisSum}`);

let thisMultiply = calcModule(2, 3, '*');
console.log(`Multiply is: ${thisMultiply}`);

let thisDivide = calcModule(2, 0, '/');
console.log(`Subtract is: ${thisDivide}`);

let thisSubtract = calcModule(2, 3, '-');
console.log(`Subtract is: ${thisSubtract}`);