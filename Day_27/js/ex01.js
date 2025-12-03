function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User Data"), 2000));
}
function fetchPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Post Data"), 3000));
}
function fetchComments() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Comment Data"), 1000)
  );
}

const start = Date.now();
//Dùng Promise.all để lấy kết quả từ cả 3 promises.
Promise.all([fetchUser(), fetchPosts(), fetchComments()]).then((values) => {
  console.log(values);

  //Tính tổng thời gian chạy của cả 3 promises.
  const totalTime = (Date.now() - start) / 1000;
  console.log(totalTime);
});
