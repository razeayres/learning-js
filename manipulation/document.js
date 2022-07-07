/**
 * this is the document (HTML)
 * then body (body tag) and
 * innerHTML (the data inside the
 * <body></body>)
 */
document.body.innerHTML = "some text" // this automatically replaces all content of the body tag

/**
 * this is a second approach
 * where we create a variable
 * with the code, to apply to the 
 * body tag
 */

// this creates a new instance of
// a backpack class
const everydayPack = new backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2020 15:00:00 CET"
)

/**
 * this also shows how
 * to insert variables
 * directly into the
 * HTML code
 */
const content = `
    <main>
        <arcticle>
        <h1>${everydayPack.name}</h1>
        <ul>
            <li>Volume:</li>
            <li>Color:</li>
        </ul>
        </arcticle>
    <main>
`

document.body.innerHTML = content