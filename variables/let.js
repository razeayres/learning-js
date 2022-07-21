/**
 * var statement declares
 * global-scoped
 * variables even inside functions,
 * while let it block-scoped
 */

// declares and defines
// a variable
var color = "purple" // global-scoped var

// set color of the
// left panel
document.querySelector(".left").style.backgroundColor = color // set purple to left panel

// this creates a function
// object
function changeColor() {
    // declares and defines
    // a variable
    // color = "blue" // for a global-scoped var
    let color = "red" // for a function-scoped var

    // set color to the
    // right panel
    document.querySelector(".right").style.backgroundColor = color // sets red to right panel
}

/**
 * this would set blue if we had
 * set a global var in the function,
 * but we didn't, it will change to purple
 * because the color red is only valid
 * inside the function (because of the statement let)
 */
document.querySelector(".right").style.backgroundColor = color