(function (){


do { var enteredNumber = prompt("enter number")
}while (enteredNumber > 49 || enteredNumber < 1 || enteredNumber % 2 != 1){
}

for (var x = 1; x <= 49; x+= 2) {
    if (x == enteredNumber){
        console.log("skipping " + enteredNumber)
        continue;
    }

    console.log("odd number" + x);
}

})();