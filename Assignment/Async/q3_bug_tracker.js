// Old callback version (given):
// function fetchBugs(callback) {
//     setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

function getBugs() {
    return new Promise((resolve, reject) => {
        const fail = Math.random() < 0.3;

        setTimeout(() => {
            if (fail) reject("API Failure!");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => console.table(bugs))
    .catch(err => console.log("Error:", err));
