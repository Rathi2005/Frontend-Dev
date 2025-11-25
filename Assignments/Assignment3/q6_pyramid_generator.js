// Default limit; demonstrate outer loop limit controlled by user input
const DEFAULT_LIMIT = 5;
const userLimit = Number(process.env.PYRAMID_LIMIT) || DEFAULT_LIMIT; // allow set via env var


console.log('\n=== Q6 — Pyramid Pattern Generator (limit=' + userLimit + ') ===');


function generatePyramid(limit) {
for (let row = 1; row <= limit; row++) {
let line = '';
for (let col = 1; col <= row; col++) {
line += '* ';
}
console.log(line.trim());
}
}


generatePyramid(userLimit);