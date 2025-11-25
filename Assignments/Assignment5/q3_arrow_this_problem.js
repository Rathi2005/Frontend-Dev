
const user = {
  name: "Akshat",
  showName: () => {
    console.log("Arrow this:", this.name);
  }
};

user.showName();  
// Output: Arrow this: undefined
// Reason: Arrow functions do NOT bind their own `this`. 
// `this` refers to global object, not the user object.

// FIXED VERSION
const user2 = {
  name: "Akshat",
  showName() {     // normal function
    console.log("Normal function this:", this.name);
  }
};

user2.showName();
// Output: Normal function this: Akshat
