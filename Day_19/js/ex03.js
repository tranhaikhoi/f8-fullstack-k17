const myArr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

//Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].
//i: hàng ; j: cột
const mainDiagonal = []; 
const secondaryDiagonal = []; 

for (let i = 0; i < myArr.length; i++) {      
  for (let j = 0; j < myArr[i].length; j++) {  

    if (i === j) {
      mainDiagonal.push(myArr[i][j]);
    }

    // Đường chéo phụ: khi i + j == n - 1
    if (i + j === myArr.length - 1) {
      secondaryDiagonal.push(myArr[i][j]);
    }
  }
}
// Tính tổng đường chéo chính
let sumMain = 0;
let sumSecondary =0;
for (let i = 0; i < mainDiagonal.length; i++) {
  sumMain += mainDiagonal[i];
  sumSecondary += secondaryDiagonal[i];

}
console.log("Đường chéo chính:", mainDiagonal);
console.log("Tổng đường chéo chính:", sumMain);
console.log("Đường chéo phụ:", secondaryDiagonal);
console.log("Tổng đường chéo phụ:", sumSecondary);
