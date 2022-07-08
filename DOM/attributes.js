/**
 * this shows how to
 * work with attributes
 */

// <img src="../assets/images/everyday.svg" alt>
document.querySelector("img").attributes // this lists all properties and their attributes
document.querySelector("img").getAttribute("src") // this returns "../assets/images/everyday.svg"

/**
 * if we want to set an
 * attribute, eg. an alternative
 * text
 */
document.querySelector("ïmg").setAttribute("alt", "A drawing of a backpack")

/**
 * if we need to remove
 * the attribute
 */
 document.querySelector("ïmg").removeAttribute("alt")