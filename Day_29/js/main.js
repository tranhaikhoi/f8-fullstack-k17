const BASE_URL = "https://dummyjson.com";

const app = {
  _query: {
    order: "desc",
    limit: 10,
    page: 1,
  },
  _timeoutId: null,
  editId: null,

  init() {
    this.getUsers();
    this.search();
    this.sort();
    this.paginate();
    this.initModalEvents();
    this.handleAddNew();
  },

  async getUsers() {
    try {
      this.renderLoading();
      const skip = (this._query.page - 1) * this._query.limit;

      let url = `${BASE_URL}/posts?sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      if (this._query.q) {
        url = `${BASE_URL}/posts/search?q=${this._query.q}&sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch /posts");

      const data = await response.json();
      const pageNumber = Math.ceil(data.total / this._query.limit);

      this.renderPosts(data.posts);
      this.renderPaginate(pageNumber);
    } catch (error) {
      this.renderError(error.message);
    } finally {
      this.renderLoading(false);
    }
  },

  renderPaginate(totalPage) {
    const el = document.querySelector(".js-paginate");
    el.innerHTML = "";

    for (let i = 1; i <= totalPage; i++) {
      const active = i === this._query.page ? "bg-green-600" : "";
      el.innerHTML += `<button class="border px-4 py-2 ${active}">${i}</button>`;
    }
  },

  renderLoading(st = true) {
    document.querySelector(".js-loading").innerHTML = st
      ? `<div class="text-center text-xl">Loading...</div>`
      : "";
  },

  renderError(msg) {
    document.querySelector(
      ".js-post-list"
    ).innerHTML = `<div class='text-red-600 text-2xl text-center'>${msg}</div>`;
  },

  renderPosts(posts) {
    const list = document.querySelector(".js-post-list");

    list.innerHTML = posts
      .map(
        (p) => `
      <div class="post-item my-3 border p-5" data-id="${p.id}">
        <h2 class="text-2xl font-medium mb-3">${p.title}</h2>
        <p>${p.body}</p>

        <div class="flex justify-between mt-3">
          <button class="border py-2 px-5">Xem chi tiết</button>

          <div class="flex gap-2">
            <span class="cursor-pointer text-blue-600 js-edit" data-id="${p.id}">Sửa</span>
            <span class="cursor-pointer text-red-600 js-delete" data-id="${p.id}">Xóa</span>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    this.handleEditButtons();
    this.handleDeleteButtons();
  },

  sanitizeText(t) {
    return t.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  },

  search() {
    const input = document.querySelector(".js-search");

    input.addEventListener("input", (e) => {
      if (this._timeoutId) clearTimeout(this._timeoutId);

      this._timeoutId = setTimeout(() => {
        this._query.q = e.target.value;
        this._query.page = 1;
        this.getUsers();
      }, 400);
    });
  },

  sort() {
    document.querySelectorAll(".js-sort button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".btn-active")?.classList.remove("btn-active");
        btn.classList.add("btn-active");

        this._query.order = btn.dataset.sort;
        this.getUsers();
      });
    });
  },

  paginate() {
    document.querySelector(".js-paginate").addEventListener("click", (e) => {
      const page = Number(e.target.innerText);
      if (!page) return;

      this._query.page = page;
      this.getUsers();
    });
  },

  // CREATE
  handleAddNew() {
    document.querySelector(".js-add-btn").addEventListener("click", () => {
      this.editId = null;
      this.openModal("", "");
    });
  },

  // EDIT
  handleEditButtons() {
    document.querySelectorAll(".js-edit").forEach((btn) => {
      btn.addEventListener("click", () => {
        const postEl = btn.closest(".post-item");

        this.editId = postEl.dataset.id;
        this.openModal("", "");
      });
    });
  },

  // DELETE
  handleDeleteButtons() {
    document.querySelectorAll(".js-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".post-item").remove();
      });
    });
  },

  // MODAL
  openModal(title = "", body = "") {
    document.querySelector(".js-modal").classList.remove("hidden");
    document.querySelector(".js-modal-title").innerText = this.editId
      ? "Sửa bài viết"
      : "Thêm bài viết";

    document.querySelector(".js-input-title").value = title;
    document.querySelector(".js-input-body").value = body;
  },

  closeModal() {
    document.querySelector(".js-modal").classList.add("hidden");
    this.editId = null;
  },

  initModalEvents() {
    document
      .querySelector(".js-modal-close")
      .addEventListener("click", () => this.closeModal());

    document
      .querySelector(".js-btn-cancel")
      .addEventListener("click", () => this.closeModal());

    document
      .querySelector(".js-btn-save")
      .addEventListener("click", () => this.savePost());
  },

  // SAVE
  savePost() {
    const title = document.querySelector(".js-input-title").value.trim();
    const body = document.querySelector(".js-input-body").value.trim();

    if (!title || !body) return;

    // THÊM MỚI
    if (!this.editId) {
      const html = `
        <div class="post-item my-3 border p-5" data-id="${Date.now()}">
          <h2 class="text-2xl font-medium mb-3">${title}</h2>
          <p>${body}</p>

          <div class="flex justify-between mt-3">
            <button class="border py-2 px-5">Xem chi tiết</button>
            <div class="flex gap-2">
              <span class="cursor-pointer text-blue-600 js-edit">Sửa</span>
              <span class="cursor-pointer text-red-600 js-delete">Xóa</span>
            </div>
          </div>
        </div>
      `;

      document
        .querySelector(".js-post-list")
        .insertAdjacentHTML("afterbegin", html);

      // CẬP NHẬT
      this.renderPosts(
        [...document.querySelectorAll(".post-item")].map((el) => ({
          id: el.dataset.id,
          title: el.querySelector("h2").innerText,
          body: el.querySelector("p").innerText,
        }))
      );
    }

    // SỬA
    else {
      const postEl = document.querySelector(
        `.post-item[data-id="${this.editId}"]`
      );

      postEl.querySelector("h2").innerText = title;
      postEl.querySelector("p").innerText = body;
    }

    this.closeModal();
  },
};

app.init();
