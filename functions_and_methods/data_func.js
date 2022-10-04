/**
 * this is to show how to
 * pass data to functions through
 * parameters
 */

const tipCalc = (sum, percentage) => {
    // let sum = 29.95
    // let percentage = 18
    let tip = sum * (percentage / 100)
    let total = sum + tip
    console.log(`
        Sum before tip: ${sum}
        Tip percentage: ${percentage}%
        Tip:            ${tip.toFixed(2)}
        Total:          ${total.toFixed(2)}
    `) // toFixed() is a round method
}

// this calls the function
tipCalc(29.95, 18)