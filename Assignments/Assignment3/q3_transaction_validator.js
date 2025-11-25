

const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];


class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingDataError extends TransactionError {}
class NullTransactionError extends TransactionError {}


const valid = [];
const invalid = [];


console.log('\n=== Q3 — Transaction Validator ===');


for (let i = 0; i < transactions.length; i++) {
const tx = transactions[i];
try {
if (tx === null) throw new NullTransactionError('Transaction is null at index ' + i);
if (typeof tx !== 'object') throw new TransactionError('Invalid transaction type at index ' + i);
if (!('id' in tx) || !('amount' in tx)) throw new MissingDataError('Missing id or amount at index ' + i);
if (typeof tx.amount !== 'number') throw new TransactionError('Amount is not a number at index ' + i);
if (tx.amount < 0) throw new NegativeAmountError('Negative amount for transaction id ' + tx.id);


// If everything is ok
valid.push(tx);
} catch (err) {
// Categorize
invalid.push({ index: i, error: err.message, type: err.constructor.name });
console.warn(`Transaction at index ${i} failed: ${err.constructor.name} - ${err.message}`);
}
}


console.log('\nValid transactions:');
console.log(valid);
console.log('\nInvalid transactions:');
console.log(invalid);
console.log(`\nReport: ${valid.length} successful, ${invalid.length} failed.`);