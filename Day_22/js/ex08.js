const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];

// Nhóm danh sách đánh giá theo productId, trong đó mỗi sản phẩm có danh sách đánh giá của từng người dùng.
const reviewsProduct = new Map();
reviews.forEach(value => {
  const arr = reviewsProduct.get(value.productId) || [];
  arr.push(value);
  reviewsProduct.set(value.productId, arr);
});
console.log(reviewsProduct);

// Tính điểm trung bình đánh giá của mỗi sản phẩm.
const avgRating = {};
reviewsProduct.forEach((arr, productId) => {
  const avg = arr.reduce((sum, item) => sum + item.rating, 0) / arr.length;
  avgRating[productId] = avg;
});
console.log(avgRating);

// Tìm sản phẩm có điểm trung bình cao nhất.
let bestProduct = null;
let bestAvg = 0;
for (const [productId, avg] of Object.entries(avgRating)) {
  if (avg > bestAvg) {
    bestAvg = avg;
    bestProduct = productId;
  }
}
console.log("Sản phẩm tốt nhất:", bestProduct, "với điểm", bestAvg);
