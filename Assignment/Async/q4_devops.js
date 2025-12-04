function serverA() {
    return new Promise(res => setTimeout(() => res("Server A done"), 2000));
}

function serverB() {
    return new Promise(res => setTimeout(() => res("Server B done"), 3000));
}

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(() => console.log("Failure in deployment"));

Promise.race([serverA(), serverB()])
    .then(res => console.log("Fastest response:", res));
