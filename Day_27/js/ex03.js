//Viết một hàm retry(fn, times) thực thi một Promise function fn, nếu thất bại thì thử lại tối đa times lần.

function retry(fn, times) {
  let p = fn();
  for (let i = 0; i < times; i++) {
    p = p.catch(() => fn());
  }
  return p;
}
let failingPromise = () => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.7 ? resolve("Thành công") : reject("Thất bại");
  });
};
retry(failingPromise, 3).then(console.log).catch(console.error);
