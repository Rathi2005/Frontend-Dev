class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department}`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} is managing the ${this.department} team`;
    }
}

let e = new Employee("Akshat", "Development");
let m = new Manager("Sujal", "AI");

console.log(e.work());  
console.log(m.work());  // overridden → polymorphism
