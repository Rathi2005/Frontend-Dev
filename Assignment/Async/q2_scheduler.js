console.log("Start");

setTimeout(() => console.log("Macrotask: setTimeout"), 0);

Promise.resolve().then(() => console.log("Microtask: Promise.then"));

console.log("Synchronous log");

console.log("End");

/*
Order Explanation:
1) Start
2) Synchronous log
3) End
4) Microtask (Promise.then)
5) Macrotask (setTimeout)

Reason:
Microtasks ALWAYS run before macrotasks in the event loop.
*/
