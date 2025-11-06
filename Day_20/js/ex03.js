const arr = [
  [1, 2, 3],
  [4, 5, 6],
];
const newArr=arr.flat(Infinity);
let count=0;
for(i=0;i<newArr.length;i++){
    if(newArr[i]%2 ===0){
    count++;
}
}
console.log(count);