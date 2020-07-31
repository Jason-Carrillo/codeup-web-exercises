var x = 2

while(x <= 65536) {
    console.log(x)
    x *= 2
}

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= allCones) {
        console.log(cones + " cones sold...");
        allCones -= cones;
    } else {
        console.log("I cannot sell you " + cones + " cones I only have " + allCones);
    }

} while (allCones > 0);

console.log("Yay! I sold them all!");