/**
 * this is to show how to
 * make loops
 */

const vector = ["A", "B", "C", "X", "Y", "Z"]
const objects = {
    item01: {
        name: "red",
        type: "color",
        weight: null
    },
    item03: {
        name: "toyota",
        type: "car",
        weight: 750
    },
    item03: {
        name: "UoG",
        type: "university",
        weight: null
    }
}

// using basic for loop by index
for (let i = 0; i < vector.length; i++) {
    let item = vector[i]
    console.log(item)
}

// using for .. of loops and arrays
for (const element of vector) {
    let item = element
    console.log(item)
}

// foreach array method
vector.forEach((element) => {
    let item = element
    console.log(item)
});

// for ... in loop and objects
for (const object in objects) {
    let item = object
    console.log(item)
}