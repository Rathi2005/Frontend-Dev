let expenses = [5000, 1200, 15000, 2200, 3000];
let total = expenses.reduce((a, b) => a + b, 0);
let average = total / expenses.length;

total += total * 0.10;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final after tax:", total.toFixed(2));
