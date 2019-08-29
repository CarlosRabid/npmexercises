let validator = require('validator')

// console.log(validator.isEmail('shoobert@dylan'))

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile 
// phone number (should be true) - use the en-US locale

// console.log(validator.isMobilePhone("786-329-9958" , 'en-US' ))

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"
// console.log(validator.blacklist(text, blacklist))

let faker = require('faker')

let humans = []
let randomName = faker.name.findName(); // Rowan Nikolaus
let randomComp = faker.company.companyName(); // Kassandra.Haley@erich.biz
let randomPic = faker.random.image(); // random contact card cont
let makehuman = function (n) {
    for (let indx = 1; indx <= n; indx++) {
        humans.push(randomName,randomPic, randomComp)
    }
    
}

makehuman(2)
console.log(humans)