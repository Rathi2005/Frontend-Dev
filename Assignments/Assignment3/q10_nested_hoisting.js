
function outer() {
  console.log(count); // undefined (due to hoisting)
  var count = 5;

  function inner() {
    console.log(count); // undefined (inner has its own hoisted var)
    var count = 10;
    console.log(count); // 10
  }

  inner();
  console.log(count); // 5
}

outer();


// Arrow version
function outerArrow() {
  var count = 5;

  const inner = () => {
    console.log(count); // captures outer count
  };

  inner();
}

outerArrow();
