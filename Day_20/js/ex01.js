const arr = [[1, 2, 3], [4, 5], [6]];
const newArr = arr.flat(Infinity);
let total=0;
total += newArr.reduce((total,number) => total+number);
console.log(total);