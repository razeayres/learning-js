/**
 * this shows how event
 * listeners work
 */

// this uses the DOM
// manipulation to get
// specific elements
const container = document.querySelector(".container")
const button = document.querySelector(".cta-button")
const posX = document.querySelector(".posX span")
const poY = document.querySelector(".posY span")

/**
 * event listerners have the following syntax:
 * target.addEventListener(target, callback [, options])
 */

// 1. this is to print when
// the button is clicked
button.addEventListener("click", () => {
    button.classList.toggle("active")
    button.innerText === "open" ? button.innerText = "close" : button.innerText = "open" // <- this is an inline ifelse statement
    console.log("The button is clicked!")
}, false)

// 2. this is to capture mouse
// movements and coordinates
const mousePosition = (event) => {
    posX.innerText = event.pageX
    posY.innerText = event.pageY
    console.log(event)
}
window.addEventListener("mousemove", mousePosition, false)

// 3. this is to capture mouse
// hovering the container
container.addEventListener("mouseenter", ()=> {
    container.classList.add("blue")
}, false)

container.addEventListener("mouseleave", ()=> {
    container.classList.remove("blue")
}, false)