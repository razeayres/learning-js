/**
 * this shows how event
 * listeners with arguments
 */

// this uses the DOM
// manipulation to get
// specific elements
const button = document.querySelector(".cta-button")
const myText = "Argument that I want to pass!"

// this is to print when
// the button is clicked
button.addEventListener("click", function (button, myText) { // the button has to be passed as argument, in this case, to be modified inside the callback
    console.log(myText)
    button.innerText === "open" ? button.innerText = "close" : button.innerText = "open"
}, false)