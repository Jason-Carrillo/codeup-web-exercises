"use strict";

function isANumber(x) {
    if (typeof(x) === "number") {
        return true
    } else {
        return false;
    }
}


function increment (x) {
    if (typeof(x) === "number") {
        return x + 1
    } else {
        return false
    }
}

function decrement (x) {
    if (typeof(x) === "number" ) {
        return x - 1
    } else {
        return false;
    }
}

function getHighestNumber(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return false;
    } else  if (a >= b && a >= c){
        return a
    } else if (b >= a && b >= c) {
        return b
    } else if (c >= a && c >= b) {
        return c
    }
}

function parseNumber(x) {
    return parseFloat(x)
}

function add(x, y) {
    var a = parseFloat(x)
    var b = parseFloat(y)

    if (typeof(x) !== "number" || typeof(y) !== "number") {
        return false
    } else  {
        return a + b;
    }
}

function multiply(x, y) {
    if (typeof(x) === "number" || typeof(y) === "number" ) {
        return x * y;
    } else {
        return false;
    }
}

function square(x) {
    if (typeof(x) === "number" ) {
        return x * x;
    } else {
        return false;
    }
}

function sumOfSquares(x, y) {
    if (typeof(x) === "number" && typeof(y) === "number") {
        return ((x * x ) + (y * y));
    } else {
        return false;
    }
}



function isPalindrome(str) {
    var reverseStr = str.split('').reverse().join('');

    if (!isNaN(str)) {
        return false
    } else if (str === reverseStr) {
        return true;
    } else if (typeof(str) === "string" ) {
        return false;
    } else {
        return false;
    }

}



/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

