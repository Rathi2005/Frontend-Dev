

function Person(name) {
  this.name = name;
}
Person.prototype.showPerson = function () {
  console.log("Person:", this.name);
};

function Faculty(name, dept) {
  Person.call(this, name);
  this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showFaculty = function () {
  console.log("Faculty Dept:", this.dept);
};

function Professor(name, dept, subject) {
  Faculty.call(this, name, dept);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function () {
  console.log("Subject:", this.subject);
};

const p1 = new Professor("Dr. Akshat", "CSE", "AI");

p1.showPerson();   // from Person
p1.showFaculty();  // from Faculty
p1.showSubject();  // from Professor
