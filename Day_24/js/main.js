const btn = document.querySelector(".btn");
const input = document.querySelector(".todoInput");
const app = document.querySelector(".app");

// TẠO THẺ CHỨA TASK
const taskList = document.createElement("div");
taskList.className = "flex flex-col gap-4 w-full";
app.appendChild(taskList);

// KIỂM TRA TRÙNG TEXT
function isValidText(text) {
  const paragraphs = taskList.querySelectorAll("p");

  for (const p of paragraphs) {
    if (p.innerText === text) {
      return true;
    }
  }

  return false;
}

// NÚT ADD TASK
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = input.value.trim();

  if (!value) {
    alert("Vui lòng nhập công việc");
    return;
  }

  if (isValidText(value)) {
    alert("Nội dung này đã tồn tại!");
    input.value = "";
    return;
  }

  createTask(value);
  input.value = "";
});

// TẠO NEW TASK
function createTask(textValue) {
  const divEl = document.createElement("div");
  divEl.className =
    "bg-purple-400 flex justify-between items-center px-4 py-3 ";

  const text = document.createElement("p");
  text.className = "text-white font-medium";
  text.innerText = textValue;

  //BẤM VÀO TEXT --> GẠCH NGANG VÀ MỜ ĐI
  text.addEventListener("click", () => {
    text.classList.toggle("line-through");
    text.classList.toggle("opacity-40");
  });

  const divIcon = document.createElement("div");
  divIcon.className = "flex gap-4";

  //ICON EDIT
  const editBtn = document.createElement("button");
  editBtn.className = "text-white text-xl";
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  editBtn.addEventListener("click", () => {
    openEditMode(divEl, text);
  });

  //ICON DELETE
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "text-white text-xl";
  deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

  deleteBtn.addEventListener("click", () => divEl.remove());

  divIcon.appendChild(editBtn);
  divIcon.appendChild(deleteBtn);

  divEl.appendChild(text);
  divEl.appendChild(divIcon);

  taskList.appendChild(divEl);
}

// CHUYỂN TASK --> EDIT
function openEditMode(taskdivEl, textEl) {
  const editForm = document.createElement("form");
  editForm.className = "flex w-full";

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = textEl.innerText;
  editInput.className =
    "flex-1 border border-gray-400 px-3 py-2 text-white bg-[#0f0f2b] rounded-none focus:outline-none focus:ring-0";

  const updateBtn = document.createElement("button");
  updateBtn.innerText = "Add task";
  updateBtn.type = "submit";
  updateBtn.className =
    "p-3 bg-violet-600 hover:bg-violet-500 text-white font-bold";

  editForm.appendChild(editInput);
  editForm.appendChild(updateBtn);

  taskList.replaceChild(editForm, taskdivEl);

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newValue = editInput.value.trim();
    //KIỂM TRA KHI SỬA KHÔNG ĐƯỢC ĐỂ TRỐNG
    if (!newValue) {
      alert("Không được để trống!");
      return;
    }
    textEl.innerText = newValue;

    taskList.replaceChild(taskdivEl, editForm);
  });

  editInput.focus();
}
