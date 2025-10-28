const fib=(n) =>{
    if(n===0) return 0;
    if (n===1) return 1;
        return fib(n-1) + fib(n-2);
};
const getTotalFib =(n) =>{
    let sum=0;
    for ( let i=0; i<=n; i++){
        sum +=fib(i);
    }
    return sum;
};
console.log(getTotalFib(10));