const employees = [
{ name: "Amit", salary: "45000", years: "5" },
{ name: "Sara", salary: "38000", years: "2" },
{ name: "Kiran", salary: "52000", years: "7" }
];
console.log('\n=== Q2 — Employee Bonus Calculator ===');
for (let i = 0; i < employees.length; i++) {
try {
const emp = employees[i];
if (!emp) throw new Error('Missing employee object at index ' + i);
// strict validation: ensure properties exist
if (!('name' in emp) || !('salary' in emp) || !('years' in emp)) {
throw new Error(`Employee data incomplete for index ${i}`);
}
const salary = Number(emp.salary);
const years = Number(emp.years);
if (Number.isNaN(salary) || Number.isNaN(years)) {
throw new TypeError(`Invalid number conversion for employee ${emp.name}`);
}
const bonus = (years > 3) ? salary * 0.1 : salary * 0.05;
console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
} catch (err) {
console.error('Error processing employee at index', i, '-', err.message);
}
}