const scores = [
  [8, 9, 7],
  [6, 5, 7],
  [10, 9, 8],
];

//Điểm trung bình từng học sinh
const avgScores = scores.map((row) => {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }
  return sum / row.length;
});

//Lọc ra những học sinh có điểm trung bình >= 8.
const goodStudents = avgScores.filter(avg => avg >= 8);

//Tăng điểm thêm 1 nếu <10
const increasedPoint = scores.map(row => {
  const newRow = [];
  for (let i = 0; i < row.length; i++) {
    let newScore;
    if (row[i] < 10) {
      newScore = row[i] + 1;
    } else {
      newScore = row[i];
    }
    newRow.push(newScore);
  }
  return newRow;
});
console.log("Điểm TB:", avgScores);
console.log("Học sinh giỏi:", goodStudents);
console.log("Sau khi tăng điểm:", increasedPoint);

