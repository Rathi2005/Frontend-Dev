function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    return this.price - (this.price * percent / 100);
}

let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 2000);

console.log("Laptop after 10% discount:", p1.applyDiscount(10));
console.log("Mobile after 20% discount:", p2.applyDiscount(20));
console.log("Headphones after 50% discount:", p3.applyDiscount(50));
