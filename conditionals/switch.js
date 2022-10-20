/**
 * this is to show how to
 * use the switch statement
 */

// this is an if-else
// approach. It is harder to
// read than the swtich approach
var BackpackAge = 50 // in days
if (BackpackAge >= 30) {
    if (BackpackAge >= 50) {
        if (BackpackAge >= 70) {
            console.log("old")
        } else {
            console.log("used")
        }
    } else {
        console.log ("lightly used")
    }
} else {
    console.log ("new")
}

// this is the new
// switch approach
var BackpackAge = 50 // in days
switch (true) {
    case BackpackAge >= 30 && BackpackAge < 50:
        console.log ("lightly used")
        break
    case BackpackAge >= 50 && BackpackAge < 70:
        console.log ("used")
        break
    case BackpackAge >= 70:
        console.log("old")
        break
    default:
        console.log ("new")
}