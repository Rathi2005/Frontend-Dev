const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];


// Arrays to collect results
const validNumbers = [];
const invalidNumbers = [];


function isBlankString(s) {
return typeof s === 'string' && s.trim() === '';
}


for (let i = 0; i < apiData.length; i++) {
const raw = apiData[i];
// Convert to String representation
const asString = String(raw);
// Convert to Boolean (JS rules apply)
const asBoolean = Boolean(raw);
// Convert to Number using Number() to catch NaN
const asNumber = Number(raw);


// Check for invalid numbers: NaN or blank-strings or strings with non-numeric chars
const isNumberValid = typeof asNumber === 'number' && !Number.isNaN(asNumber);
const rawIsNumericString = typeof raw === 'string' && /^\s*-?\d+(\.\d+)?\s*$/.test(raw);


// Special logic: treat null and undefined as invalid numeric values
if (isNumberValid && raw !== null && raw !== undefined && rawIsNumericString || typeof raw === 'number') {
validNumbers.push({ index: i, raw, asString, asBoolean, asNumber });
} else {
// For values that cannot be interpreted as valid numbers we push to invalid
invalidNumbers.push({ index: i, raw, asString, asBoolean, asNumber });
}
}


// Detailed report
console.log('\n=== Q1 — Dynamic Data Parser Report ===');
console.log('Input array:', apiData);
console.log('\nValid numeric entries:');
validNumbers.forEach(item => {
console.log(`- [index ${item.index}] raw: ${JSON.stringify(item.raw)} -> String: "${item.asString}", Boolean: ${item.asBoolean}, Number: ${item.asNumber}`);
});


console.log('\nInvalid numeric entries (skipped for numeric processing):');
invalidNumbers.forEach(item => {
console.log(`- [index ${item.index}] raw: ${JSON.stringify(item.raw)} -> String: "${item.asString}", Boolean: ${item.asBoolean}, Number: ${item.asNumber}`);
});


console.log(`\nSummary: ${validNumbers.length} valid numeric(s), ${invalidNumbers.length} invalid(s)\n`);