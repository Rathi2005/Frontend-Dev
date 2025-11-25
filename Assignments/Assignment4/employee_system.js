// employee_system.js
"use strict";

/*
  Employee class with getAnnualSalary() and applyBonus(percent).
  Create 5 employees, compute annual salaries and total payout via reduce.
*/

class Employee {
  constructor(id, name, department, salaryMonthly) {
    this.id = id;
    this.name = name;
    this.department = department;
    // assume salaryMonthly (monthly) — convert to Number, validate
    this.salaryMonthly = Number(salaryMonthly);
    if (Number.isNaN(this.salaryMonthly)) throw new TypeError('Invalid salary for ' + name);
  }

  // annual salary = monthly * 12
  getAnnualSalary() {
    return +(this.salaryMonthly * 12).toFixed(2);
  }

  // apply bonus percentage to monthly salary (updates salaryMonthly) OR to annual depending on design
  // Here we update monthly salary
  applyBonus(percent) {
    if (typeof percent !== 'number') throw new TypeError('Percent must be number');
    const addition = (this.salaryMonthly * percent) / 100;
    this.salaryMonthly = +(this.salaryMonthly + addition).toFixed(2);
    return this.salaryMonthly;
  }
}

// Create employees
const empList = [
  new Employee(1, 'Asha', 'Engineering', 55000),
  new Employee(2, 'Vikram', 'Sales', 42000),
  new Employee(3, 'Priya', 'HR', 35000),
  new Employee(4, 'Rahul', 'Marketing', 48000),
  new Employee(5, 'Neha', 'Support', 30000)
];

console.log('\n=== Q6 Employee Management ===');
// Calculate annual salary and show
empList.forEach(emp => {
  console.log(`${emp.name} (${emp.department}) - Monthly: ₹${emp.salaryMonthly}, Annual: ₹${emp.getAnnualSalary()}`);
});

// Apply a 5% bonus to everyone (example)
empList.forEach(emp => emp.applyBonus(5));

console.log('\nAfter 5% bonus:');
empList.forEach(emp => {
  console.log(`${emp.name} - Monthly: ₹${emp.salaryMonthly}, Annual: ₹${emp.getAnnualSalary()}`);
});

// Total annual payout using reduce
const totalAnnualPayout = empList.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log('\nTotal annual payout (company): ₹' + totalAnnualPayout.toFixed(2));
