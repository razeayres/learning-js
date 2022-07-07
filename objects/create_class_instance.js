import backpack from "class_with_constructor.js"

// this creates a new instance of
// a backpack class
const everydayPack = new backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
)

console.log("The everydayPack object:", everydayPack)
console.log("The poketNum value:", everydayPack.pocketNum)

/**
 * classes in Javascript are
 * more like templates to
 * create basic objects
 */