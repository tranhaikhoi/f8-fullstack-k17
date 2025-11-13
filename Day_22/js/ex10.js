const inventory = [
  { item: "Laptop", type: "import", quantity: 10 },
  { item: "Mouse", type: "import", quantity: 50 },
  { item: "Laptop", type: "export", quntity: 4},
  { item: "Keyboard", type: "import", quantity: 20},
  { item: "Mouse", type: "export", quantity: 10 }
]

// Tính số lượng tồn kho của từng sản phẩm.
const stock = inventory.reduce((acc, cur) => {
  if (!acc[cur.item]) acc[cur.item] = 0;
  acc[cur.item] += cur.type === "import" ? cur.quantity : -cur.quantity;
  return acc;
}, {});
console.log(stock);

// Tìm sản phẩm có số lượng tồn kho cao nhất.
const maxStockItem = Object.entries(stock).reduce((maxEntry, currentEntry) => {
  return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
});
console.log(maxStockItem);

// Nhóm danh sách nhập xuất theo sản phẩm, trong đó mỗi sản phẩm có lịch sử nhập xuất riêng.
const historyByItem = inventory.reduce((acc, cur) => {
  if (!acc[cur.item]) acc[cur.item] = [];
  acc[cur.item].push(cur);
  return acc;
}, {});

console.log(historyByItem);