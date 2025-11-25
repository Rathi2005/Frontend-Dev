

// Base class
class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log("Name:", this.name);
  }
}

// Derived class
class Student extends Person {
  constructor(name, branch) {
    super(name);       // call parent constructor
    this.branch = branch;
  }

  showBranch() {
    console.log("Branch:", this.branch);
  }
}

// Demo
const s1 = new Student("Akshat", "CSE");

s1.showName(); 
s1.showBranch();

/*
Same behavior as prototype version:
Class syntax = cleaner wrapper around prototypes
*/
