const names = [" hoang ", "AN", " f8 ", "Education"];

//Tạo mảng mới chứa phần tử đã xoá khoảng trắng thừa và viết thường toàn bộ

const cleaned = [];

for (let i = 0; i < names.length; i++) {
  const del = names[i].trim().toLowerCase();
  cleaned.push(del);
}

console.log(cleaned);

//Tạo mảng mới viết Hoa chữ cái đầu

const capitalized = [];

for (let i = 0; i < names.length; i++) {
  const str = names[i].trim().toLowerCase();
  const newStr = str[0].toUpperCase() + str.slice(1);
  capitalized.push(newStr);
}

console.log(capitalized);