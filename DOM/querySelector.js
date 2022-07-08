/**
 * this is to show how
 * to use the querySelector()
 * 
 * It works with all combinations
 * of HTML and CSS
 */

// this selects <main class="maincontent"></main>
document.querySelector("main")

 // this selects <main class="maincontent"></main>
document.querySelector(".maincontent")

 // this selects the last <li> in <main> --> <li class="backpack__lid">"Lid status:"<span> false</span></li>
document.querySelector("main li:last-child")

 // it returns all <li> in <main>
document.querySelectorAll("main li")


/**
 * the fucntions below
 * iterates through the <li>
 * and changes their background
 * color
 */
document.querySelectorAll("main li").forEach(item => item.style.backgroundColor="red") // this changes every <li> in <main>
document.querySelectorAll("main li:last-child").forEach(item => item.style.backgroundColor="blue") // this changes only the last <li> in <main>