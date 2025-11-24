let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);
}

// Nested function demonstrating scope
function simulateActions() {
    function innerAction() {
        count += 2;
        console.log("Inner Action Count:", count);
    }
    innerAction();
}

// Simulate clicks
increment();
increment();
decrement();
simulateActions();
