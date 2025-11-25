// q2_apply_operation.js

function applyOperation(numbers, operation) {
  const result = [];
  for (let num of numbers) {
    result.push(operation(num));
  }
  return result;
}

const nums = [1, 2, 3, 4];

// Double
const doubled = applyOperation(nums, n => n * 2);

// Square
const squared = applyOperation(nums, n => n * n);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
