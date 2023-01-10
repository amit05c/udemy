function bmiCal(weight,height){
    let yourBmi = weight/(Math.pow(height,2));
    return "Your BMI is " + yourBmi;
}
let bmi = (bmiCal(90,1.7));
console.log(Math.round(bmi));