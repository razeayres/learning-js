/**
 * this is to show how
 * to use math operators
 */

// here we declare the variables
var a = 5
var b = 4
var c = 3.2

/**
 * here we declare and calculate the result
 * and these are the main operators:
 *      *   =>  multiplication
 *      /   =>  for division
 *      +   =>  for sum
 *      -   =>  for substraction
 *      %   =>  for calculating the rest of a division
 *      **  =>  for calculating the power of a number
 */
var result = a + b

// here we print the result on console
console.log(result)


// it is also possible to add increment
console.log(result++) // this is the same as result = result + 1
console.log(result) // when we do that, we see that increment actually re-assign the value


/**
 * in case b is a string,
 * the result changes
 * to concatenation
 */
b = "4"
result = a + b
console.log(result) // this returns 54

/**
 * but if the same example is
 * with a substraction, everything
 * is interpreted as numbers 
 */
 b = "4"
 result = a - b
 console.log(result) // and this returns 1