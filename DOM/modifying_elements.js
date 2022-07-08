/**
 * this is to show
 * how to modify element
 * classes in a document
 */

// <h1 class="backpack__name">Everyday Backpack</h1>
document.querySelector("h1").classname // this returns "backpack__name"
document.querySelector("h1").classname = "new-class" // this changes the class name


/**
 * these show how to add
 * new properties to a 
 * class
 */

// <li class="packprop backpack_volume">_</li>
 document.querySelector("main li:firs-chield").classList.add("new-property")    // <li class="packprop backpack_volume new-property">_</li>
 document.querySelector("main li:firs-chield").classList.remove("new-property") // <li class="packprop backpack_volume">_</li>

 // to add and remove with
 // a single line use:
 document.querySelector("main li:firs-chield").classList.toggle("new-property")

 // to replace a
 // property use:
 document.querySelector("main li:firs-chield").classList.replace("packprop", "new-property")    // <li class="new-property backpack_volume">_</li>