const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];

//Tính điểm trung bình của từng học sinh.
 const studentAverages= students.map(student => {
    const sum = student.scores.reduce((total, point) =>total+point,0);
    const average= sum/student.scores.length;
    return{
        name: student.name,
        averageScore: average,
    };
 });
console.log(studentAverages);

//Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).
const newStudent = studentAverages.filter((score) =>score.averageScore>=8);
console.log(newStudent);

//Sắp xếp học sinh theo điểm trung bình giảm dần.

const studentAverageArranges=studentAverages.sort((a, b) => b.averageScore - a.averageScore);

console.log(studentAverageArranges);