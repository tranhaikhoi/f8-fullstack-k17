const PRICE_1 = 1678;
const PRICE_2 = 1734;
const PRICE_3 = 2014;
const PRICE_4 = 2536;
const PRICE_5 = 2834;
const PRICE_6 = 2927;


let totalPrice = 0;
let numberElectric = 500;
if (numberElectric <=50){
    totalPrice = numberElectric * PRICE_1;
}else if (51 <= numberElectric <= 100){
    totalPrice = (50 * PRICE_1) + ((numberElectric - 50) * PRICE_2);
}else if (101 <= numberElectric <= 200){
    totalPrice= (50 * PRICE_1) + (50 * PRICE_2) + ((numberElectric - 100) * PRICE_3);
}else if (201 <= numberElectric <= 300){
    totalPrice= (50 * PRICE_1) + (50 * PRICE_2) + (100 * PRICE_3) + ((numberElectric - 200) * PRICE_4);
}else if(301 <= numberElectric <= 400){
    totalPrice= (50 * PRICE_1) + (50 * PRICE_2) + (100 * PRICE_3) + (100 * PRICE_4) + ((numberElectric - 300) * PRICE_5);
}else if (numberElectric > 400){
    totalPrice= (50 * PRICE_1) + (50 * PRICE_2) + (100 * PRICE_3) + (100 * PRICE_4) + (100 * PRICE_5) + ((numberElectric - 400) * PRICE_6);
}

console.log(`Tổng tiền điện phải trả là: ${totalPrice} đồng`);
