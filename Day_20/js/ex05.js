const arr = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5],
];

const newArr = arr.flat(Infinity);
const uniqueNumbers =newArr.reduce((acc,cur) =>{
    if(!acc.includes(cur)){
        acc.push(cur);
    }
    return acc;
    }, []);
console.log(uniqueNumbers);
