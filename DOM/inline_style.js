/**
 * this is to show how to
 * see and alter inline styles
 */

/**
 * Given the example:
 * <div class="site-title" style="color: green">Backpack Packer</div>
 */
document.querySelector("site-title").style // <- returns every possible property and value (if applied)

// to access and specific property like color:
document.querySelector("site-title").style.color // <- this returns a string "green"

/**
 * we can chnage or add 
 * a property directly
 * using a simple assignment
 */
document.querySelector("site-title").style.color = "red"
document.querySelector("site-title").style.backgroundColor = "pink"