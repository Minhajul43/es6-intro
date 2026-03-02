const max = Math.max(23, 23, 34, 5, 56, 67, 43);
// console.log(max);

const number = [34, 34, 564, 6765, 23, 3];
const max2 = Math.max(...number);
// console.log(max2);

const arr1 = [12, 32, 34];
const arr2 = [12, 13, 14, ...arr1];
arr1.push(43);
console.log(...arr1);
