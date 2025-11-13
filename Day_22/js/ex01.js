const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];

//Lọc ra các sản phẩm thuộc danh mục "Electronics".
const newArr = products.filter((value)=>value.category === "Electronics");
console.log(newArr);

//Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".
const totalProducts = newArr.reduce((sum, value)=>sum+ value.price,0);
console.log(totalProducts);

//Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.
const productsCategory = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product);
  return acc;
}, {});
console.log(productsCategory);


