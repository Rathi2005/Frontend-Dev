

function makeMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

/*
Closure Explanation:
- makeMultiplier(3) returns a function.
- That returned function remembers `multiplier` even after makeMultiplier finishes.
*/
