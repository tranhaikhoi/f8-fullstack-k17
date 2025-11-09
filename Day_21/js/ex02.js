const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];

//Tạo mảng mới chỉ chứa tên sản phẩm.
const newNameProduct=products.map(product =>product.name);
console.log(newNameProduct);

//Tính tổng giá trị tất cả sản phẩm.
const totalPrice=products. reduce((sum,item)=>sum+item.price,0);
console.log(totalPrice);

//Lọc ra sản phẩm có giá lớn hơn 1 triệu.
const newProduct= products.filter((value)=>value.price>1000000);
console.log(newProduct);



