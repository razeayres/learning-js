/**
 * this is show
 */
var a = 5
var b = "5"

console.log(`var a: ${a} (${typeof a})`)
console.log(`var a: ${b} (${typeof b})`)


/**
 * these are comparisons, that
 * uses == to compare instead
 * of the = reserved for assignment
 */

// it will return as equal
// altough a is number 
// and b i string. It compares
// symbols
if (a == b) {
    console.log(`Match! a and b are the same value.`)
} else {
    console.log(`No match! a and b are NOT the same value.`)
}