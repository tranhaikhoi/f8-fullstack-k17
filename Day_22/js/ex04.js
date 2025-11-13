const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

// Tính tổng lương của từng phòng ban.
const totalDepartment = employees.reduce((acc, item) => {
  if (!acc[item.department]) {
    acc[item.department] = 0;
  }
  acc[item.department] += item.salary;
  return acc;
}, {});

console.log(totalDepartment);

// Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
const highestSalary = employees.reduce((acc, value) => {
  if (!acc[value.department] || value.salary > acc[value.department].salary) {
    acc[value.department] = value;
  }
  return acc;
},{});
console.log(highestSalary);

// Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.
const newEmployees = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = [];
  }
  acc[emp.department].push(emp);
  return acc;
}, {});

console.log(newEmployees);