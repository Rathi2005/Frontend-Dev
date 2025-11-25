
/*
  Cart class:
   - addItem(name, price, quantity)
   - getTotal()
   - applyCoupon(code) where code format is SAVE20 or DISC10
*/

class Cart {
  constructor() {
    this.items = [];
    this.appliedDiscountPercent = 0;
  }

  addItem(name, price, quantity = 1) {
    if (!name) throw new Error('Name required');
    price = Number(price);
    quantity = Number(quantity);
    if (Number.isNaN(price) || Number.isNaN(quantity)) throw new TypeError('Invalid price or quantity');
    this.items.push({ name, price: +price, quantity: +quantity });
  }

  getSubtotal() {
    return this.items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    const discount = (subtotal * this.appliedDiscountPercent) / 100;
    return +(subtotal - discount).toFixed(2);
  }

  // Accept coupon strings like SAVE20 or DISC10
  applyCoupon(code) {
    if (typeof code !== 'string') throw new TypeError('Coupon code must be string');
    const match = code.toUpperCase().match(/^(SAVE|DISC)(\d{1,2})$/);
    if (!match) throw new Error('Invalid coupon format. Allowed styles: SAVE20 or DISC10');

    const percent = Number(match[2]);
    if (percent <= 0 || percent > 100) throw new Error('Coupon percent invalid');

    this.appliedDiscountPercent = percent;
    return this.appliedDiscountPercent;
  }
}

// Demo
const cart = new Cart();
cart.addItem('Shoes', 2499.99, 1);
cart.addItem('Socks', 199.5, 3);
cart.addItem('Cap', 499, 2);

console.log('\n=== Q9 Shopping Cart ===');
console.log('Cart items:', cart.items);
console.log('Subtotal: ₹' + cart.getSubtotal().toFixed(2));
try {
  cart.applyCoupon('SAVE15'); // valid
  console.log('Applied coupon SAVE15 -> discount:', cart.appliedDiscountPercent + '%');
} catch (err) {
  console.error('Coupon error:', err.message);
}
console.log('Total after discount: ₹' + cart.getTotal().toFixed(2));

// Try invalid coupon
try {
  cart.applyCoupon('BADCODE');
} catch (err) {
  console.error('Expected coupon error for BADCODE:', err.message);
}
