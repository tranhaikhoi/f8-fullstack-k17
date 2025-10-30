function isAllUpperCase(str) {
  if (typeof str !== "string") return false;
  return str === str.toUpperCase();
}
console.log(isAllUpperCase("abc def"));
console.log(isAllUpperCase("QWERUIT"));