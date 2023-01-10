function eligibility(age,education){
    if(age<28){
        if(education=='graduation'){
            return ("You are eligible in Masai School.");
        }
    }
    else{
         return("you are not elegible")
        }
}
console.log(eligibility(29,'graduation'));
