let userName = "Harshit";
let hour = new Date().getHours();

let greeting =
  hour < 12
    ? `Good Morning ${userName}!`
    : hour < 17
    ? `Good Afternoon ${userName}!`
    : `Good Evening ${userName}!`;

console.log(greeting);
