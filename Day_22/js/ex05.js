const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
// Tính tổng thời gian xem của từng video.
const totalDurationByVideo = watchHistory.reduce((acc, { videoId, duration }) => {
  acc[videoId] = (acc[videoId] || 0) + duration;
  return acc;
}, {});

console.log(totalDurationByVideo);

// Tìm video được xem nhiều nhất (dựa trên tổng thời gian).
const mostWatchedVideo = Object.entries(totalDurationByVideo).reduce((max, [videoId, duration]) => 
    duration > max.duration ? { videoId, duration } : max, { videoId: null, duration: 0 });
console.log(mostWatchedVideo);

// Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.
const historyByUser = watchHistory.reduce((acc, { userId, videoId, duration }) => {
  acc[userId] = acc[userId] || {};           
  acc[userId][videoId] = (acc[userId][videoId] || 0) + duration; 
  return acc;
}, {});
console.log(historyByUser);