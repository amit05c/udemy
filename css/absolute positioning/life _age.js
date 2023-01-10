function lifeInWeeks(age) {
    

        var days = (90-age)*365;
        var months = (90-age)*12;
        var weeks = (90-age)*52;
        
        console.log("you have " + days+ " days " + weeks+ " weeks"+ ", " + "and " + months + " months left."  );
       
    }
    console.log(lifeInWeeks(12));