// object oriented programming


// javascript and classes

// yes javascript does have classes.....but techniqually not....javascript aik prototype-based programming language hai.....na ke function and object and oop.....isk oper jo kuch hai syntactic sugar hai...behind the seen prototype hi hai.



// mtlb object ke ander ke data ko usk scope sy bahir dot. lga kr axcess krna.

// oop mtlb collection of properties and methods.
// toLowercase toUppercase
// object literal



// parts of opp------->
// constructor function
// prototypes
// classes
// instances (new , this)




// 4 pillers of oop
// 1----->Abstraction----->example fetch().
// 2----->Encapsulation----example rapper lga dena.
// 3------>Inheritance----->example prototype krny sy samajh ay ga.
// 4------>Polymorphism---->example aik hi method apk kai sary kam kr deta hai.






// this is object you know.
const user = {
    username: "ahmad shafiq",
    loginCount: 8,
    signedIn: true,

}

// dot method ki madad sy object ke ander ke data ko axcess kia.
console.log(user.username);
console.log(user.signedIn);









// phly aik object declare kia...phr isi object main aik fucntion bnaya...us function main for-loop put ki...phr end main dot method lga kr object ke ander ky data ko axcess kia...objece main sy function ko axcess krny ke liyeh phly object ka name likha userdetail phr dot lga kr function ka name likha getuserdetail()
const UserDetail = {
    userName: "Ahmad Shafiq",
    location: "Pakisan",
    loggedIn: false,
    fatherName: "hafiz shafiq ahamd",

    getuserdetail: function() {
        console.log("got userdetail from database");
        for(i = 0; i <= 5; i++) {
            console.log(i);
            
        }
        
    }

}

console.log(UserDetail.fatherName);
console.log(UserDetail.getuserdetail());









// push on mind...phly aik object declare kia...phr usi object main aik fucntion bnaya...this method ki madad sy object ke ander ke data ko axcess kia...phr end main object ko dot method ki madad sy functin ke sath connect kia and console kia.........jb hum browser main console main this ko print kerwayn gy tw udher bht sari cheezain ati han
const object = {
    Name: "Hafiz Ahmad Shafiq",
    Age: 50,
    course: "web development course",
    subject: "computer",


    targetobject: function() {
        console.log(`UserName:- ${this.Name}`);
        console.log(`course:- ${this.course}`);
        console.log(this); // print complete object
        
        
    }

}

console.log(object.targetobject());








// const promise = new Promise()
// const date = new Date()
// in donon main new keyword ka mtlb constructor function hai.





// jaisy hi hum new keyword likhty han sub sy phly aik empty object creat hota hai...jisy instance bola jata hai.
// new kayword ke karan constructor function call hota hai...iska kam jityny bi argument hoty han unko pack kr ke hamain de dyta hai.
// jo bi argument apny likhy hoty han...this keyword main yeh sub inject ho jaty han.
// 4 step main apko mil jaty han function.







function USER(USERNAME, LOGINCOUNT, ISLOGGEDIN) {
    this.USERNAME = USERNAME
    this.LOGINCOUNT = LOGINCOUNT
    this.ISLOGGEDIN = ISLOGGEDIN
}

const udetail = USER("Ahmad", 12, true)
console.log(udetail);







