function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b <= c || b + c <= a || c + a <= b) {
    return false;
  }
  if (a === b && b === c) {
    return "tam giác đều";
  }
  if (a * a + b * b === c * c || 
      b * b + c * c === a * a || 
      a * a + c * c === b * b) {
    return "tam giác vuông";
  }
  if (a===b ||  b===c|| c===a){
     return "tam giác cân";
  } 
  return true;
}

console.log(isTriangle(3, 4, 5)); // "tam giác vuông"
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(1, 1, 1)); // "tam giác đều"
console.log(isTriangle(2, 3, 4)); // true (tam giác thường)
console.log(isTriangle(4, 4, 5)); // tam giác cân
console.log(isTriangle(9, 4, 5)); //true (tam giác thường)
