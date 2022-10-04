/**
 * this is tow show how to
 * create and use functions
 */

// this is a function
// to perform sum of a and b
function makeSum(a, b) {
    let c = a + b
    return c
}

// this performs a
// multiplication
// of a by b, but it
// has a different syntax
// using const instead of function
// only. This is import when
// creating a function that
// cannot be destroyed
const makeMult = function (a = 1, b = 10) { // <- this is called anonymous function | functions can have default arguments
    let c = a * b
    return c
}

// this prints the results
// of the functions above
console.log("The sum of a and b is ", makeSUm(5, 6))
console.log("The multiplication of a by b is ", makeMult(5, 6))


// Immediately Invoked Function Expression (IIFE)
// this automatically executed when interpreter
// find these lines
(function () {
    let a = 5
    let b = 6
    let c = makeSum(a, b)
    console.log(`The sum of a and b is ${c}`) // <- this is string interpolation
})() // <- this final "()" is very important to execute the function