/**
 * This is to show how to 
 * use global objects into
 * an object
 */

function backpack(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired // here we require the date when the backpack was acquired
) {
    this.name = name
    this.volume = volume
    this.color = color
    this.pocketNum = pocketNum
    this.strapLength = {
        left: strapLengthL,
        right: strapLengthR
    }
    this.lidOpen = lidOpen
    this.dateAcquired = dateAcquired // this accommodates the date as a field of the object

    this.toggleLid = function(lidStatus) {
        this.lidOpen = lidStatus
    }

    this.newStrapLength = function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft
        this.strapLength.right = lengthRight
    }

    /**
     * this new method allow for
     * calculate the age of the
     * backpack by integrating
     * the global object Date()
     * into the code
     * 
     * @returns daysSinceAcquired
     */
    this.backpackAge = function() {
        let now = new Date()
        let acquired = new Date(this.dateAcquired)
        let elapsed = now - acquired // elapsed time in seconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24))
        return daysSinceAcquired // this returns the age
    }
}


// this creates a new instance of
// a backpack class
const everydayPack = new backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2020 15:00:00 CET"
)

/**
 * this prints the
 * information
 */
 console.log("The everydayPack object:", everydayPack)
 console.log("Date acquired:", everydayPack.dateAcquired)
 console.log("Date since acquired:", everydayPack.backpackAge())