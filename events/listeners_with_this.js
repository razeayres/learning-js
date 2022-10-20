/**
 * this shows how event
 * listeners and this work
 * together
 */

// this uses the DOM
// manipulation to get
// specific elements
const button = document.querySelector(".cta-button")

// this is to print when
// the button is clicked
button.addEventListener("click", function (event) { // because button is the object here, "this" can be used as button
    // button.innerText === "open" ? button.innerText = "close" : button.innerText = "open"
    this.innerText === "open" ? this.innerText = "close" : this.innerText = "open" // <- "this" works as button
}, false)