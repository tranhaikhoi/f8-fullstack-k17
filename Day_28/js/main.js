const BASE_URL = "https://dummyjson.com";

const postList = document.querySelector("#postList");
const pagination = document.querySelector("#pagination");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const noResult = document.querySelector("#noResult");
const searchInput = document.querySelector("#searchInput");
const btnNewest = document.querySelector("#btnNewest");
const btnOldest = document.querySelector("#btnOldest");
const closeModal = document.querySelector("#closeModal");

let allPosts = [];

// Auto focus
window.addEventListener("load", () => searchInput.focus());

// Load posts
async function loadPosts() {
  const res = await fetch(`${BASE_URL}/posts?limit=150`);
  const data = await res.json();

  allPosts = data.posts;
  const newest10 = [...allPosts].sort((a, b) => b.id - a.id).slice(0, 10);
  renderPosts(newest10);
}

// Pagination 1..10
function renderPagination() {
  pagination.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("span");
    item.textContent = i;
    item.className =
      "border px-3 py-1 cursor-default " +
      (i === 1 ? "bg-green-500 text-white" : "bg-white");
    pagination.appendChild(item);
  }
}

function renderPosts(posts) {
  postList.innerHTML = "";

  if (posts.length === 0) {
    noResult.textContent = `Không tìm thấy bài viết nào cho từ khóa: "${searchInput.value}"`;
    noResult.classList.remove("hidden");
    renderPagination();
    return;
  }

  noResult.classList.add("hidden");

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "border p-4 rounded bg-white";

    div.innerHTML = `
            <h2 class="font-bold text-lg">${post.title}</h2>
            <p class="text-gray-700 mt-1">${post.body}</p>

            <div class="mt-3 flex items-center gap-4">
              <button
                id="post_${post.id}"
                class="border px-3 py-1 rounded-[12px] bg-white hover:bg-green-400 hover:text-white transition">
                Xem chi tiết
              </button>

              <div class="ml-auto">
                <button class="text-blue-600 hover:underline">Sửa</button>
                <button class="text-red-600 hover:underline ml-3">Xóa</button>
              </div>
            </div>
          `;

    postList.appendChild(div);
  });

  renderPagination();

  document.querySelectorAll("button[id^='post_']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const postId = btn.id.replace("post_", "");
      openDetail(postId);
    });
  });
}

// SEARCH
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();

  if (!keyword.trim()) {
    const newest10 = [...allPosts].sort((a, b) => b.id - a.id).slice(0, 10);
    return renderPosts(newest10);
  }

  const filtered = allPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(keyword) ||
      p.body.toLowerCase().includes(keyword)
  );

  renderPosts(filtered.slice(0, 10));
});

// SORT
btnNewest.addEventListener("click", () => changeSort("desc"));
btnOldest.addEventListener("click", () => changeSort("asc"));

function changeSort(type) {
  btnNewest.classList.remove("bg-yellow-300");
  btnOldest.classList.remove("bg-yellow-300");

  if (type === "desc") btnNewest.classList.add("bg-yellow-300");
  else btnOldest.classList.add("bg-yellow-300");

  let sorted = [...allPosts];

  if (type === "desc") sorted.sort((a, b) => b.id - a.id);
  else sorted.sort((a, b) => a.id - b.id);

  renderPosts(sorted.slice(0, 10));
}

// MODAL
async function openDetail(id) {
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  modalContent.innerHTML = `<div class="py-10 text-center">Loading...</div>`;

  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const post = await res.json();

  modalContent.innerHTML = `
          <h2 class="text-lg font-bold text-center border-b pb-3 mb-4">${
            post.title
          }</h2>
          <p class="mb-4 leading-relaxed">${post.body}</p>
          <p class="font-semibold">Views: ${
            post.views ? post.views : "Không có"
          }</p>
        `;
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

loadPosts();
