function isLeap(year) {
    if(year%4 !== 0){
        if(year%100 ===0){
            if(year%400){
                console.log("Leap year");
            }else{
                console.log("Not Leap year.");
            }
           
        }else{
            console.log('Leap year.');
        }

    }else{
        console.log("not leap year.")
    }
}
isLeap(1987);
