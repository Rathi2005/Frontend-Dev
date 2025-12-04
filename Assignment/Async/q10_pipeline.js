function waitStep(name) {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 1000;
        const fail = Math.random() < 0.2;

        setTimeout(() => {
            if (fail) reject(`${name} failed`);
            else {
                console.log(name);
                resolve();
            }
        }, time);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");
        await waitStep("Step 1: Order taken");
        await waitStep("Step 2: Food prepared");
        await waitStep("Step 3: Package ready");
        await waitStep("Step 4: Out for delivery");

        console.log("Delivery completed!");
    } catch (e) {
        console.log("Pipeline failed!", e);
    }
}

runPipeline();
