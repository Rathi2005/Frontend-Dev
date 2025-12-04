function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() < 0.5;
        setTimeout(() => {
            success ? resolve("Order Success") : reject("Order Failed");
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            let result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

processOrder()
    .catch(err => console.log(err.message));
