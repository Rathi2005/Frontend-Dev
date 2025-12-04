// Q1 – Async Coffee Maker

function boilWater() {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Water boiled") : reject("Boiling failed");
        }, time);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Coffee brewed") : reject("Brewing failed");
        }, time);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        setTimeout(() => {
            Math.random() < 0.9 ? resolve("Coffee poured") : reject("Pouring failed");
        }, time);
    });
}

boilWater()
    .then(msg => {
        console.log(msg);
        return brewCoffee();
    })
    .then(msg => {
        console.log(msg);
        return pourCoffee();
    })
    .then(msg => {
        console.log(msg);
        console.log("Coffee ready for the team!");
    })
    .catch(err => console.log("Error:", err));
