

// Add to array prototype
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Test
const arr = [1, 2, 3];
console.log(arr.myMap(n => n * 2)); // [2, 4, 6]
