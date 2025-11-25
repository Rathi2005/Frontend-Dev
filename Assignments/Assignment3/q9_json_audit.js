
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    let obj = JSON.parse(rawData[i]);

    if (!obj.user || obj.age === undefined)
      throw new Error("Missing fields");

    obj.age = Number(obj.age);
    if (Number.isNaN(obj.age))
      throw new Error("Invalid age");

    clean.push(obj);
  } catch (err) {
    errors.push({ line: i, error: err.message });
  }
}

console.log("Clean data:", clean);
console.log("Errors:", errors);

// Bonus: under 18
console.log("Under 18:", clean.filter(u => u.age < 18));
