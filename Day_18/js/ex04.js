const words = ["javascript", "php", "css", "html", "python", "java"];

//Lọc ra các từ có độ dài ≥ 5

const newWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length >= 5) {
    newWords.push(words[i]);
  }
}

console.log(newWords); 
//Tạo mảng mới viết hoa toàn bộ

const upperWords = [];

for (let i = 0; i < words.length; i++) {
  upperWords.push(words[i].toUpperCase());
}

console.log(upperWords); 

//Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...).
const reversed = [];

for (let i = 0; i < words.length; i++) {
  let str = words[i];
  let rev = "";

  for (let j = str.length - 1; j >= 0; j--) {
    rev += str[j];
  }

  reversed.push(rev);
}

console.log(reversed);