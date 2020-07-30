"use strict"
console.log("Hello from external Codeup")
alert("Welcome to my website");
var color = prompt("What is your favorite color");
alert("Awesome, " + color + " is my favorite color too!")


var mermaidDays = prompt("How many days are you renting mermaid for?");
var bearDays = prompt("How many days are you renting bear for?");
var herculesDays = prompt("How many days are you renting hercules for?");

var mermaidTotal = Number(mermaidDays);
var bearTotal = Number(bearDays);
var herculesTotal = Number(herculesDays);

var rentDays = (mermaidTotal + bearTotal + herculesTotal);

var rentTotal = rentDays * 3;

alert ("total cost of renting all 3 movies is $" + rentTotal);