// magic of prototype


// javascript har ni manti hai....yeh or uper ja kr grand parent ko axcess krti hai....phr or uper ja kr grand parent ko axcess krti hai...jb tk uko null value na mil jay....isy prototypal inheritance bi kahty han....yehi uska protypal behaviour hai...isi behaviour sy linked ho ke this keyword kam krta hai....arrow function ke ander this behaviour ka axcess ni hota....isi liyeh ni hota q ke yahan pr prototyep ajata hai.



// javascript main hur cheez apny ap main aik object hai....array bi actually main object hi hai
// jo properties object ke pas available hai wohi sari properties arry ke pas bi available han and string pas bi available han....usable hai ya ni hai woh aik alaida bat hai.

// function apny ap main function bi hai or object bi hai.

// mew keyword likhny sy aik object creat hota hai....javascript new keyword ke through constructor functin deti hai.

// jis ne call kia wohi this hai.
// hur function ka apny ap main this hota hai.



console.log("javascript chai or code");






function multiply(num) {
    return num * 5
    
}

console.log(multiply(6));
console.log(multiply.prototype); 








// <--------> new keyword <------------>
function creatusername(username, score) {
    this.username = username
    this.score = score
}

creatusername.prototype.increment = function() {
    this.score++
}

creatusername.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
    
}

// yeh new keyword behind the seen bht kam kr rha hai.
const chai = new creatusername("chai", 44)
const tea =  creatusername("tea", 100)

chai.printMe()
















// <------------prototype---------->

// string and space count in length
let myName = "hetaish     "

console.log(myName.length);
// answer 12





// prototype apas main cheezain linked krny ke kam ata hai.
// jisny call kia wohi this hai.

let myhero = ["spiderman", "batman"]

let heropower = {
    batman: "hammer",
    spiderman: "dangrous",

    getSpiderPower: function() {
        console.log(`spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.hetaish = function() {
    console.log(`hetaish is present in all objects`);
    
}

Array.prototype.helloAhmad = function() {
    console.log(`ahmad says hello`);
    
}

myhero.hetaish()
myhero.helloAhmad()




















// <---------inheritance----------->

const teacher = {
    makeVideo: true,

}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "javascript assignment",
    fullTime: true,
}

// yeh wala purana hai.
teacher.__proto__ 
// yeh aj kl use ho rha hai.
Object.setPrototypeOf(teachingSupport, teacher)









// phly aik string declare ki....phr prototype method apply kia function ke sath...phr end main function ko call ki....prototype cheezon ko linked krta hai apas main...me ne str ko function sy connect kai.

let str = "cahiorjavascript      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    // trim() sy space khtm kr ke str ki length btai.
    
    
}

str.trueLength()










// i itself creat
// phly aik string declare ki extra spaces ke sath...phr string keyword likha or saht hi prototype likha or orgionallength likha function bna kr.....function ke ander this. lga kr trim method lga kr str2 sy extra spacess khtm ki...and phr samajhny ke liyeh for loop bo lga di.......prototype ke through str2 ka function ke sath connection houa.....phr end main in dono ko mila kr call ki.

let str2 = "      HafizAhmad"

String.prototype.origionalLength = function() {
    console.log(`str1 ki orgional length:- ${this.trim().length}`);
    for(let i = 0; i <= 5; i++) {
        console.log(i);
        
    }
    
} 

str2.origionalLength()
// output 10




