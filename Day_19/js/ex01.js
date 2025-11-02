const myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Tạo mảng chứa tổng từng hàng => [6, 15, 24].
const rowSum = [];

for (let i = 0; i < myArr.length; i++) {
  let sum = 0;
  for (let j = 0; j < myArr[i].length; j++) {
    sum += myArr[i][j];
  }
  rowSum.push(sum);
}
console.log(rowSum);

//Tạo mảng chứa tổng từng cột => [12, 15, 18].

const colSum = [];

for (let i = 0; i < myArr[0].length; i++) {
  let sum = 0;
   
  for (let j = 0; j < myArr.length; j++) {
    sum += myArr[j][i];
  }
  colSum.push(sum);
}
console.log(colSum);

//Lọc ra các hàng có tổng > 10.
const rows = [];

for (let i = 0; i < myArr.length; i++) {
  let sum = 0;
  for (let j = 0; j < myArr[i].length; j++) {
    sum += myArr[i][j];
  }
  if (sum > 10) {
    rows.push(myArr[i]);
  }
}
console.log(rows);