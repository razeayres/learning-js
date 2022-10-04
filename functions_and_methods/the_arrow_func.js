/**
 * this is to show how
 * to use the arrow function
 */

// regular function:
function (a) {
    return a + 100
}


// arrow functions:
/**
 * there are three ways of
 * using arrow functions
 */

// first method
(a) => {
    return a + 100
}

// second method
(a) => a + 100

// third method
a => a + 100

// IIFE arrow function
(() => console.log("This runs automatically."))()