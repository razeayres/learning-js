/**
 * this is to show how to
 * use a callback function
 */

const customPrint = (text) => {
    console.log(text)
}

const myFunc =  (a, b, callback) => {
    let c = a + b

    const c_text = `The result is ${c}`
    callback(c_text)
} 

myFunc(3, 9, customPrint)