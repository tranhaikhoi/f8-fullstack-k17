const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");
const overlay = document.querySelector(".overlay");
const form = overlay.querySelector("form");
const input = overlay.querySelector("input");
const contextMenu = document.querySelector(".context-menu");
//item đang được rename
let currentItem = null;
items.forEach((item) => {
  const downBtn = item.querySelector(".down");
  const upBtn = item.querySelector(".up");
  const textItem = item.querySelector(".textItem");
  //ĐỔI VỊ TRÍ ITEM
  upBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const prevEl = item.previousElementSibling;
    if (!prevEl) {
      return;
    }
    ul.insertBefore(item, prevEl);
  });
  //CHẶN CLICK CHUỘT PHẢI Ở NÚT UP
  upBtn.addEventListener("contextmenu", (e) => e.stopPropagation());
  //ĐỔI VỊ TRÍ ITEM
  downBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const nextEl = item.nextElementSibling;
    if (!nextEl) {
      return;
    }
    ul.insertBefore(nextEl, item);
  });
  //CHẶN CLICK CHUỘT PHẢI Ở NÚT UP
  downBtn.addEventListener("contextmenu", (e) => e.stopPropagation());
  //CLICK CHỮ THÌ THÊM BORDER
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const selectedEl = ul.querySelector(".selected");
    item.classList.add("selected");
    if (selectedEl) {
      selectedEl.classList.remove("selected");
    }
  });
  //CHUỘT PHẢI VÀO ITEM THÌ HIỆN CONTEXT-MENU
  textItem.addEventListener("contextmenu", (e) => {
    e.stopPropagation();
    e.preventDefault();
    currentItem = item;
    contextMenu.style.top = e.clientY + "px";
    contextMenu.style.left = e.clientX + "px";
    contextMenu.style.display = "block";
  });
  //KHỞI TẠO RENAME VÀ DELETE
  const renameItem = contextMenu.querySelector(".rename");
  const deleteItem = contextMenu.querySelector(".delete");
  //DELETE
  deleteItem.addEventListener("click", () => {
    if (currentItem) {
      currentItem.remove();
      contextMenu.style.display = "none";
    }
  });
  //RENAME
  renameItem.addEventListener("click", (e) => {
    e.stopPropagation();
    const text = currentItem.querySelector(".textItem").textContent.trim();
    input.value = text;
    overlay.style.display = "flex";
    contextMenu.style.display = "none";
  });
  //SUBMIT
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentItem.querySelector(".textItem").textContent = input.value;
    overlay.style.display = "none";
  });
});
//
document.addEventListener("click", (e) => {
  // KHI BẤM RA NGOÀI THÌ LOẠI BỎ SELECTED
  const selectedEl = ul.querySelector(".selected");
  if (selectedEl) {
    selectedEl.classList.remove("selected");
  }

  // ẨN CONTEXT MENU
  if (!contextMenu.contains(e.target)) {
    contextMenu.style.display = "none";
  }

  // ẨN OVERLAY KHI CLICK RA NGOÀI
  if (overlay.style.display === "flex" && !form.contains(e.target)) {
    overlay.style.display = "none";
  }
});
//

//KHI ẤN ALT + SHIFT + MŨI TÊN THÌ NHÂN BẢN
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.altKey) {
    if (e.key === "ArrowDown") {
      const selectedEl = ul.querySelector(".selected");
      if (!selectedEl) {
        return;
      }
      const itemClone = selectedEl.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, selectedEl.nextElementSibling);
    }
    if (e.key === "ArrowUp") {
      const selectedEl = ul.querySelector(".selected");
      if (!selectedEl) {
        return;
      }
      const itemClone = selectedEl.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, selectedEl);
    }
  }
  if (e.key === "Escape") {
    if (contextMenu) {
      contextMenu.style.display = "none";
    }
    if (overlay) {
      overlay.style.display = "none";
    }
  }
});
