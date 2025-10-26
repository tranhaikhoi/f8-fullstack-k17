function findEvenOdd(n) {
  const oddNumbers = [];
  const evenNumbers = [];   
  let totalOdd=0;
  let totalEven=0;
  let a=5;
  let b=9;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
      totalEven +=i;
    } else {
       oddNumbers.push(i);
       totalOdd +=i;
    }
  }
  console.log(`Tổng số lẻ: ${totalOdd}`);
  console.log(`Tổng số chẵn: ${totalEven}`);
}
findEvenOdd();