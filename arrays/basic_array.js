/**
 * thsi is to show how
 * to create and populate
 * arrays
 */

// this creates a variable
// and stores the string "House"
let item = "House"

// this creates an array that
// stores different datatypes
// including our string in the
// var item
const collection = ["Home", item, 5, true]

// this prints the array
console.log(collection)


// this modifies the
// third element of
// the array
collection[2] = "Shopping"

// this adds a new item
// in the array
collection[collection.length] = "new item" // collection.length returns the length of the array

// we can add an element
// with a custom index
collection[99] = "at the far end"

/**
 * the above code will make
 * the array look like this:
 * collection = [0: "Home",
 *               1: "House",
 *               2: "Shopping",
 *               3: true,
 *               4: "new item",
 *               99: "at the far end"]
 */

// this for example will
// return nothing
console.log(collection[6])

// this prints the array
// again
console.log(collection)