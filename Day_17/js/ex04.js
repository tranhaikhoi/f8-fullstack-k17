// let fullname = "trần hải khôi";
// fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1,5) + fullname.charAt(5).toUpperCase() + fullname.slice(6,9) + fullname.charAt(9).toUpperCase() +fullname.slice(10,12)+ fullname.slice(-1);
// console.log(fullname);
function normalizeName(fullname) {
  fullname = fullname.trim().toLowerCase();
  let result = "";
  for (let i = 0; i < fullname.length; i++) {
    if (i === 0 || fullname[i - 1] === " ") {
      result += fullname[i].toUpperCase();
    } else {
      result += fullname[i];
    }
  }
  return result;
}
console.log(normalizeName("tran hai khoi"));