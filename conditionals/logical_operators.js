/**
 * this is to show how to
 * use the logical operators
 * && and ||
 */

// these define
// some variables
var a = 1
var b = 5
var txt = "text"
var bol = true

// operator and (&&)
if (a < b && bol == true) {
    console.log("a is smaller than b, and bol is equal to true.")
}

// operator or (||))
if (a < b || txt != "text") {
    console.log("a is smaller than b, or txt is not equal to text.")
}