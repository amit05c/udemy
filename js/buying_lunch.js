function lunch(names){
    var total_number = names.length;
    var position = Math.floor(Math.random() * total_number);
    var person = names[position];
    return person + " is going to lunch";
}

lunch(["Amit" , "Rupu" , "chhoton" , "Chhanda"])