const myArr = [
  ["hello", "world"],
  ["javascript", "php"],
  ["css", "html"],
];
const result = [];

for (let i = 0; i < myArr.length; i++) {
  const row = myArr[i]; 

  for (let j = 0; j < row.length; j++) {
    const word = row[j]; 
    //Viết hoa tất cả các từ
    const upperWord = word.toUpperCase();
    // Lọc ra các từ có độ dài > 4 
    if (upperWord.length > 4) { 
    //Ghép thành 1 mảng         
      result.push(upperWord);            
    }
  }
}
console.log(result);