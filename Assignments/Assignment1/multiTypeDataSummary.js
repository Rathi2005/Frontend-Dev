let s = "Harshit";
let n = 25;
let b = true;
let arr = [1, 2, 3];
let obj = { name: "Harshit", age: 20 };
let x = null;
let y;

console.table([
  { label: "String", value: s, type: typeof s },
  { label: "Number", value: n, type: typeof n },
  { label: "Boolean", value: b, type: typeof b },
  { label: "Array", value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  { label: "Object", value: obj, type: typeof obj },
  { label: "Null", value: x, type: "null" },
  { label: "Undefined", value: y, type: typeof y },
]);
 