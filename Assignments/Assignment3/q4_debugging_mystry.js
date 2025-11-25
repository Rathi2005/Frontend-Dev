

function showMessage() {
  // Error earlier because greeting was undeclared.
  let greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Strict Mode Explanation:
// Undeclared variables = ReferenceError
