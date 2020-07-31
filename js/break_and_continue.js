(function (){


// do { var enteredNumber = prompt("Enter an odd number between 1, and 50")
// }while (enteredNumber > 49 || enteredNumber < 1 || enteredNumber % 2 != 1){
// }

while (true) {
    var enteredNumber = parseInt(prompt("Enter an odd number 1-50"));
    if (enteredNumber % 2 !== 0 && enteredNumber > 0 && enteredNumber <= 50)
        break;
    else continue;
}

console.log("Number to skip is: " + enteredNumber )
for (var x = 1; x <= 49; x+= 2) {
    if (x == enteredNumber){
        console.log("Yikes! Skipping number: " + enteredNumber)
        continue;
    }

    console.log("Here is an odd number: " + x);
}

})();