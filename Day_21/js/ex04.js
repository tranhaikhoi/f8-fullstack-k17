const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];

//In ra tất cả title kèm số lượng comments của từng bài viết.

const newPosts = [];
for (const post of posts) {
    newPosts.push({
        title: post.title,
        commentCount: post.comments.length,
    });
}
console.log(newPosts);

//Tạo mảng mới chứa tất cả tags (không trùng lặp).
const uniqueTags = [];
for (const post2 of posts) {
  for (const tag of post2.tags) {
    if (!uniqueTags.includes(tag)) {
      uniqueTags.push(tag);
    }
  }
}
console.log(uniqueTags);

//Tìm tất cả các bình luận của user "An".

function getCommentsUser(posts, userName) {
  const result = [];

  for (const post3 of posts) {
    for (const text of post3.comments) {
      if (text.user === userName) {
        result.push(text);
      }
    }
  }

  return result;
}
console.log(getCommentsUser(posts,"An"));

