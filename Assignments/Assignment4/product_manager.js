

/*
  Product class for an e-commerce admin panel.
  - Methods: applyDiscount(percent) and display()
  - Create multiple Product objects and filter price > 1000
*/

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price); // ensure numeric
    this.category = category;
  }

  // apply discount percentage (e.g., 10 for 10%)
  applyDiscount(percent) {
    if (typeof percent !== 'number' || Number.isNaN(percent)) {
      throw new TypeError('Discount percent must be a number');
    }
    const discountAmount = (this.price * percent) / 100;
    this.price = +(this.price - discountAmount).toFixed(2);
    return this.price;
  }

  // returns a formatted string for display
  display() {
    return `Product [ID: ${this.id}] ${this.name} — ₹${this.price} (${this.category})`;
  }
}

// Create product objects
const products = [
  new Product(1, 'Smartphone X', '35000', 'Electronics'),
  new Product(2, 'T-shirt', 499, 'Apparel'),
  new Product(3, 'Laptop Pro', '120000', 'Electronics'),
  new Product(4, 'Coffee Maker', 7500, 'Home Appliances'),
  new Product(5, 'Headphones', 1500, 'Electronics')
];

// Demo: apply a 10% discount to product 3
console.log('\n=== Q1 Product Manager ===');
console.log('Before discount:', products[2].display());
products[2].applyDiscount(10);
console.log('After 10% discount:', products[2].display());

// Display products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);
console.log('\nProducts with price > 1000:');
expensiveProducts.forEach(p => console.log(p.display()));

// End of Q1
