/**
 * This is to show how to create an object
 * with properties and methods. It is important
 * to note that this is not a class. This is
 * a basic object
 */

function backpack( // the class fields are written inside the contructor body
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
) {
    this.name = name // instead of using 'name: "Working Backpack",' or 'this.name: name,'
    this.volume = volume
    this.color = color
    this.pocketNum = pocketNum
    this.strapLength = {
        left: strapLengthL,
        right: strapLengthR
    }
    this.lidOpen = lidOpen // <- ';' is needed

    this.toggleLid = function(lidStatus) {
        this.lidOpen = lidStatus
    }

    this.newStrapLength = function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft
        this.strapLength.right = lengthRight
    }
}