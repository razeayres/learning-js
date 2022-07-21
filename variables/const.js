/**
 * const declares a imutable
 * and block-scoped variable.
 * It is the same as let, but
 * cannot be changed after defined
 */
const color = "red"
color = "green" // this returns error


/**
 * this shows that the const var
 * is block-scoped
 */
function changeVar() {
    const color = "red"
}
color = "green" // this does not return error, but it is not the same variable as above