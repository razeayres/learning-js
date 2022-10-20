/**
 * this is to show how to use
 * map()
 */

/**
 * this is a basic
 * example
 */
// this creates a 
// vector of numbers
const uint8 = new Uint8Array([25, 36, 49])

// this calculates the
// square root of each element
const roots = uint8.map(Math.sqrt)

// this prints the
// square roots
console.log(roots)


/**
 * this is a second example
 * using part of previous code
 * in this course
 */

 const vector = ["A", "B", "C", "X", "Y", "Z"]

 // original foreach
 // array method (for comparison)
vector.forEach((element) => {
    let item = element
    console.log(item)
})

// this is the map approach.
// It returns a vector of
// elements
const items = vector.map((element) => {
    let item = element
    return element
})

console.log(items)