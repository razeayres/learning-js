/**
 * this is an example
 * on how to add new 
 * elements to the DOM
 */


/**
 * this is just a basic recap
 * on how to manipulate a
 * tag
 */

// here we have our html code
// with a variable directly 
// inserted into it 
const content = `
    <main class="maincontent">
        <arcticle>
        <h1>${everydayPack.name}</h1>
        <ul>
            <li>Volume:</li>
            <li>Color:</li>
        </ul>
        </arcticle>
    <main>
`

// this returns the the class maincontent
const main = document.querySelector(".maincontent")

// this modifies the main tag
// with content
main.innerHTML = content


/**
 * this is slightly different
 * example, but this time, it
 * uses element objects to
 * create and then add to DOM
 */

// here we have a simple
// html code
const newContent = `
    <h1>${everydayPack.name}</h1>
    <ul>
        <li>Volume:</li>
        <li>Color:</li>
    </ul>
    </arcticle>
`
// here shows the process
// flux to add it to the DOM
const newArticle = document.createElement("article") // we create an element with article tag
newArticle.classList.add("backpack") // we add a property called backpack to it
newArticle.setAttribute("id", "everyday") // we add a new value "everyday" as the attribute id
newArticle.innerHTML = newContent // we add the html code
main.append(newArticle) // finally this adds the element to the DOM <main>