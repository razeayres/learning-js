/**
 * This is to show how to create an object
 * with properties and methods. It is important
 * to note that this is not a class. This is
 * a basic object
 */

const backpack = { // variable declaration can be "var", " let" or "const"
    // these are all fields or
    // properties of the 
    // object Backpack
    name: "Working Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26
    },
    lidOpen: false,

    // these are methods
    // of the object Backpack
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus // "this" refers to the current object
    },

    newStrapLength: function (lengthLeft, lengthRight) { // it could be written like: newStrapLength(lengthLeft, lengthRight)
        this.strapLength.left = lengthLeft
        this.strapLength.right = lengthRight
    }
}

/**
 * this prints the
 * backpack object
 */
console.log("The backpack object:", backpack)

/**
 * these print properties
 * of the object backpack
 */
console.log("THe pocketNum value:", backpack.pocketNum)
console.log("The pocketNum value:", backpack["pocketNum"]) // <- this another way of doing it
console.log("Strap length L:", backpack.strapLength.left)

/**
 * printing the pocketNum
 * with an intermediate
 *  variable
 */
var query = "pocketNum" // <- this declares and defines the variable query
console.log("The pocketNum value:", backpack[query])

/**
 * this shows how to use
 * the method to modify
 * a variable in the object
 */
console.log("Before length L:", backpack.strapLength.left)
backpack.newStrapLength(10, 15)
console.log("After length L:", backpack.strapLength.left)