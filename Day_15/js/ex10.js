//C1:
//  let n=10;
// for ( let i=0; i<=n; i++){
//     if (i%2==0){
//         console.log(i +" số chẵn");
//     }else {
//         console.log(i +" số lẻ");
// }
// }
// C2:
let n=15;
for ( let i=0; i<=n; i++){
    let result = (i%2==0) ? i +" số chẵn" : i +" số lẻ";
    console.log (result);
}