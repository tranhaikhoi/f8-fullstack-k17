const nums = [3, 7, 2, 9, 12, 15, 18];

//Lấy ra mảng mới chỉ chứa số ≥ 10
const bigNumber = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= 10) {
    bigNumber.push(nums[i]);
  }
}

console.log(bigNumber);

//Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3

//mảng ở câu 1
const divisibleNumber = [];

for (let i = 0; i < bigNumber.length; i++) {
  if (bigNumber[i] % 3 === 0) {
    divisibleNumber.push(bigNumber[i]);
  }
}

console.log(divisibleNumber); 

//Từ mảng ban đầu, tìm số nào là số lẻ thì nhân 2 sau đó thêm vào mảng mới (để thầy sửa lại trong nhóm zl)

const odds = [];    

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {   
    const double = nums[i] * 2; 
    odds.push(double);
  }
}

console.log(odds);
