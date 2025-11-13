const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

//Tính tổng tiền của từng đơn hàng.
const result= orders.map((product)=>{
    const total = product.items.reduce((sum,value)=>sum+value.price*value.quantity,0);
    return {
        orderId : product.orderId,
        customer: product.customer,
        total: total, 
    };
});
console.log(result);

//Tìm khách hàng có đơn hàng có tổng tiền cao nhất.
const highOrder = result.reduce((acc, item) =>acc.total > item.total ? acc : item);
console.log(highOrder);

//Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.
const grouped = {};
for (const order of orders) {
  for (const item of order.items) {
    if (grouped[item.name]) {
      grouped[item.name].quantity += item.quantity;
    } else {
      grouped[item.name] = { name: item.name, quantity: item.quantity };
    }
  }
}
const results = Object.values(grouped);
console.log(results);


