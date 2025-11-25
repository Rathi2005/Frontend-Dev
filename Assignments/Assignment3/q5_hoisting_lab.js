

console.log('\n=== Q5 — Hoisting Lab: The Sequence Trap ===');


// Original snippet (predict):
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }


// Explanation of hoisting:
// - Function declarations are hoisted fully (announce and startGame available before their definitions).
// - var-declared variables are hoisted but initialized to undefined until assignment (score -> undefined).
// - let/const are hoisted to temporal dead zone (TDZ) and cannot be accessed before declaration (status -> ReferenceError).


// Fixed version to run properly:
var score = 50;
function announce() { console.log('Game started'); }
console.log(score);
announce();
let status = 'ready';
function startGame() { console.log(status); }
startGame();


// Arrow-function rewrite and explanation:
const announceArrow = () => { console.log('Game started (arrow)'); };
const startGameArrow = () => { console.log(status); };
// Note: arrow functions are function expressions and are not hoisted like function declarations.
// Calling announceArrow before its definition would throw a ReferenceError.


announceArrow();
startGameArrow();