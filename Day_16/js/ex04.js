let n=10;
function isPrime(n) {
  if (n < 2) return false;              
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;      
  }
  return true;                         
}

function getTotalPrime(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {      
    if (isPrime(i)) sum += i;
  }
  return sum;
}
console.log(`Tổng các số nguyên tố từ 1 đến ${n} là: ${getTotalPrime(n)}`);