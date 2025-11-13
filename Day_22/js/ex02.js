const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];

//Tính điểm trung bình của từng học viên.
const averageStudent = students.map((student)=>{
  const values = Object.values(student.scores);
  const total=values.reduce((sum,value)=>sum+ value,0);
  const average = total / values.length;
    return{
        id: student.id,
        name: student.name,
        scores : average,
    };
});
console.log(averageStudent);

//Tìm học viên có điểm trung bình cao nhất.
const highStudent = averageStudent.reduce((acc,item)=>acc.scores<item.scores? item: acc);
console.log(highStudent);

//Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
//Tạo ra mảng mới không làm thay đổi mảng ban đầu
const listStudent= [...averageStudent].sort((a,b)=>b.scores - a.scores);
console.log(listStudent);
