


function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// prototype method
Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const c1 = new Car("BMW", "X5");
const c2 = new Car("Audi", "A6");

c1.getDetails();
c2.getDetails();

/*
Shows prototype method sharing:
Only one getDetails() exists in prototype.
*/
