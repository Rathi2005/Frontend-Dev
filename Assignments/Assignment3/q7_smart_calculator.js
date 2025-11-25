const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;


class InvalidOperationError extends Error {}


function smartCalc(op, a, b) {
switch (op) {
case 'add':
return a + b;
case 'subtract':
return a - b;
case 'divide':
if (b === 0) throw new Error('DivisionByZero: cannot divide by 0');
return a / b;
case 'power':
return Math.pow(a, b);
case 'root':
if (a < 0) throw new Error('NegativeRoot: cannot take root of negative number');
return Math.pow(a, 1 / b);
default:
throw new InvalidOperationError('Unrecognized operation: ' + op);
}
}


console.log('\n=== Q7 — Smart Calculator ===');


for (let i = 0; i < operations.length; i++) {
const op = operations[i];
try {
const result = smartCalc(op, num1, num2);
console.log(`Operation: ${op} | Result: ${result}`);
} catch (err) {
console.error(`Operation: ${op} | Error: ${err.name} - ${err.message}`);
}
}


// Summary printing
console.log('\nCalculation summary complete.');