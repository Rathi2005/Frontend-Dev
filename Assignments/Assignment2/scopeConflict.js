// Global scope
let bonus = 5000;   

function calculateSalary() {
    let salary = 40000;              // local variable
    let isPermanent = true;          // test by changing true/false

    if (isPermanent) {
        salary += bonus;             // bonus is taken from global scope
    }

    console.log(`Total Salary: ${salary}`);
    console.log(`Global bonus unchanged: ${bonus}`);
}

calculateSalary();
