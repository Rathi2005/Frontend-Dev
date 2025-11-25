
// ORIGINAL → errors:
// 1. Duplicate parameters not allowed
// 2. total becomes implicit global (strict = error)
// 3. delete variable illegal

// FIXED VERSION
function demo(a, b) {
  let total = 10;      
  console.log(total);
}
demo(5, 10);
