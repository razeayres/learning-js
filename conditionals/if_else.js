/**
 * this is to show how to use
 * conditionals in JavaScript
 */

// first we define some
// variables
var a = 1
var b = 5

// this is the if-else
// basic syntax
if (a > b) { // if (true) is also possible here
    console.log(`${a} is greater than ${b}.`)
} else {
    console.log(`${a} is smaller than ${b}.`)
}

// this is in-line
// approach
const test = 1 > 5 ? "The first number is greater than the second one" : "The first number is smaller than the second one"
console.log(test)