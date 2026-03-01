function add(num1, num2) {
  let total = num1 + num2;
  // console.log(num1, num2, total);
}

add(12, 13);

// add(18)

function add(num1=0, num2=0) {
  let total = num1 + num2;
  console.log(num1, num2, total);
}

function fullName(first, last='') {
  
  let fullName = first +' ' + last;
  console.log(fullName);
}

fullName('Minhajul');


function multiply(a, b=1) {
  let multi = a * b;
  console.log(multi);
}

multiply(20);