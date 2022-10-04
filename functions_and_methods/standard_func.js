/**
 * this is to show an example
 * on how to use functions in
 * real-world situation
 */

// this is a legacy object
// that looks more like
// a struct and has different
// syntax from classes
const bluePack = {
    name: "Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
}

// this functions creates
// a new article element
// using the object as argument
const addPack = function(currentPack) {
    const newArticle = document.createElement("arcticle")
    newArticle.innerHTML = `
        <h1>${currentPack.name}</h1>
        <ul>
            <li>Volume: ${currentPack.volume}</li>
            <li>Color: ${currentPack.color}</li>
            <li>Number of pockets: ${currentPack.pocketNum}</li>
        </ul>
    `
    return newArticle
}

// this imports main
// into a variable
const main = document.querySelector("main")

// and this appends our
// code to it
main.append(addPack(bluePack))