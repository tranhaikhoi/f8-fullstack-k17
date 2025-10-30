const arr = [1, 2, 3, 4, 5, 6];

//tạo mảng mới chưa bình phương của các phần tử
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * arr[i]); 
}

console.log(newArr);

//Tạo mảng mới chứa các số chẵn

const evens = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evens.push(arr[i]);
  }
}

console.log(evens);

//Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ

const odds = [];

for (let i = 0; i < arr.length; i++) {
  const square = arr[i] * arr[i];
  if (square % 2 !== 0) {
    odds.push(square);
  }
}

console.log(odds);