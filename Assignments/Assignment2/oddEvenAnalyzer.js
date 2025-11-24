let numbers = [];
let result = [];

// fill numbers 1–30
for (let i = 1; i <= 30; i++) numbers.push(i);

numbers.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        result.push("FizzBuzz");
    } else if (num % 2 === 0) {
        result.push("Even");
    } else {
        result.push("Odd");
    }
});

console.log(result);
