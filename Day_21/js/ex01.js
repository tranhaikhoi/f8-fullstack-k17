const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];

//In ra tên của tất cả người dùng.
users.forEach(user =>{
    console.log(user.name); 
});

//Tìm người có tuổi lớn nhất.
const maxUser=users.reduce((acc,item) =>(acc.age < item.age ? item : acc));
const result = maxUser.name;
console.log(result);

//Tính tuổi trung bình của tất cả người dùng.
const totalAge = users.reduce((sum,user)=>sum+user.age,0);
const averageAge = totalAge / users.length;
console.log(averageAge);
