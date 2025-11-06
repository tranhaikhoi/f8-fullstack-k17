const arr = [[3, 9], [1, 5, 10], [8]];
const newArr=arr.flat(Infinity);
let max = newArr[0];
for(i=0;i<newArr.length;i++){
    if(max<newArr[i]){
        max=newArr[i];
    }
}
console.log(max);