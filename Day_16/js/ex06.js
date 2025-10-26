function isPerfectSquare(num) {
  let sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}
function printPerfectSquares(n) {
  console.log(`Các số chính phương từ 1 đến ${n} là:`);
  for (let i = 1; i <= n; i++) {
    if (isPerfectSquare(i)) {
      console.log(i);
    }
  }
}
printPerfectSquares(50);