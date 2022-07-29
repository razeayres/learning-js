/**
 * this is to show some of the
 * basic methods of arrays in
 * JavaScript
 */

// this creates an array
let contents = ["piggy", "lantern", "pencil"]


// this joins the array into a string
let contents_as_string = contents.join() // this returns "piggy,lantern,pencil"
/**
 * it could contents.join(" ") for "piggy lantern pencil"
 * or contents.join("|") for "piggy|lantern|pencil"
 */


// this adds elements at the end of the array
contents.push("pen",  5) 
/**
 * this is the same as .append() in Python,
 * but does not require a list
 * or tuple to iterate
 */

// this adds elements at the begining of the array
contents.unshift("a", 99)


// this takes the first
// element off the list
contents.shift() // it also returns the removed item

// this takes the last
// element off the list
contents.pop() // it also returns the removed item


/**
 * this shows how to remove
 * an specific element from
 * the array
 */
let remove = "pencil" // this store the value that we want to remove in a var "remove"
contents.splice(contents.indexOf(remove), 1) // contents.indexOf() returns the index of the "pencil" from the array, and contents.splice() removes it by index
console.log(contents) // this just prints the array with the value removed