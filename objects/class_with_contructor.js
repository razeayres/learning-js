/**
 * This is to show
 * how to create a class
 * with properties and
 * methods with
 * a constructor to build it
 */

/**
 * the diffrence from
 * simple objects is that
 * those does not have
 * constructors
 */
class backpack {
    /**
     * this is the constructor
     * used to build the class
     */
    constructor( // the class fields are written inside the contructor body
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        /**
         * while using a constructor
         * the whole syntax is modified
         * for these assignments
         */
        this.name = name // instead of using 'name: "Working Backpack",' or 'this.name: name,'
        this.volume = volume
        this.color = color
        this.pocketNum = pocketNum
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR
        }
        this.lidOpen = lidOpen // <- ';' is needed
    }

    // these are methods
    // of the object Backpack
    toggleLid(lidStatus) { // instead of 'toggleLid: function (lidStatus) {'
        this.lidOpen = lidStatus
    }

    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft
        this.strapLength.right = lengthRight
    }
}


// this ensures that the
// object can be used in
// other files
export default backpack