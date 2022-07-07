// this gets every tag named 
// "code" in the HTML, and stores
// into a constant variable called
// allCode
const allCode = document.querySelectorAll("code")

// this iterates through
// the tags code
for (let item of allCode) { // let is used to crate a mutable variable
    item.innerHTML = `&lt;${item.innerHTML}&gt;` // <- this modifies the content of every tag code
}

// this ensures that the
// object can be used in
// other files
export default allCode