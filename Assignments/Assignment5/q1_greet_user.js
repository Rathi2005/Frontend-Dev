// q1_greet_user.js
"use strict";

// Callback function
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // invoke callback
}

// Demonstration
greetUser("Akshat", showEndMessage);

/*
Output:
Hello Akshat
Welcome to the course!

Shows clear callback flow: greetUser → callback()
*/
