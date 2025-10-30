function calcBmi(weight, height){
    if(  !Number.isFinite(weight) ||!Number.isFinite(height) ||weight <= 0 ||height <= 0){
        return "Không hợp lệ";
    }
    const BMI=weight / (height*height);
    if(BMI< 18.5){
        return "Thiếu cân";
    } else if(BMI < 23 ){
        return "Bình thường";
    }else if(BMI < 25) {
        return "Thừa cân";
    }
    return "Béo phì";
}
console.log(calcBmi(50,170));