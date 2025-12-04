const menu = {
    pizza: 200,
    burger: 120,
    fries: 80,
    coke: 40
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Invalid item ordered: ${item}`);
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        return `Total Bill: ₹${total}`;
    }
    catch (err) {
        return err.message;
    }
}

console.log(calculateBill(["pizza", "coke"]));
console.log(calculateBill(["burger", "pasta"])); // error
