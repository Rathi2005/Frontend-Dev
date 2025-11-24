let marks = [80, 90, 70, 36, 95];

if (marks.some(m => m < 35)) {
  console.log("Detained");
} else {
  let total = marks.reduce((a, b) => a + b, 0);
  let percentage = (total / 500) * 100;

  if (percentage >= 85) console.log("Promoted with Distinction");
  else if (percentage >= 50) console.log("Promoted");
  else console.log("Detained");
}
