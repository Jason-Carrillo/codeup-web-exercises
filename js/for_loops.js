function showMultiplicationTable (n) {
    for (var a = 1; a <= 10; a++){
        var y = (a * n)

        console.log(n + " x " + a + " = " + y)
    }

}

console.log(showMultiplicationTable(7));



for (x = 1; x <= 10; x++) {
        var randomNum = Math.floor((Math.random() * (200 - 20) + 20));
        if(randomNum % 2 === 1){

            console.log(randomNum + " is odd")
        } else {
            console.log(randomNum + " is even")
        }

}

for (x = 1; x <= 9; x++) {


}

for(var i=1;i<=9;i++){ 
    var n=0; 
    for(var k=0; k<i; k++){ 
        n = i*Math.pow(10,k)+n;

    }
    console.log(n)
 }

for(var x = 100; x >= 5; x-=5){
    console.log(x)
}