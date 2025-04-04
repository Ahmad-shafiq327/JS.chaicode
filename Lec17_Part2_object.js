                // Lect 17 object part2



const username = new objct()          ------------->yeh aik singelton object hai.
const myName = {}                     ------------------>yeh aik non-singelton object hai.










const tinderuser = {}                // yeh non-singelton object hai.

tinderuser.id = "4255abc"
tinderuser.name = "saim ayoub"
tinderuser.isLoggedIn = false

console.log(tinderuser);            // print as it is.













const regulerUser = {
    email: "something@gmail.com",
    fullname: {                     // is object main aik or object put kia hai....mtlb nested object.
        nickName: {
            firstname: "hetaish",
            lastname: "choudhary",

        }
    }
}

console.log(regulerUser.email);
console.log(regulerUser.fullname)       // result fullname ke ander jo kuch bi likha hai woh print hoga....is main nested object han.
console.log(regulerUser.firstname);














                            // before i declare 2 object....object ko is trhan bi declare krty han.
const objt1 = {1: "a", 2: "b"}
const objt2 = {3: "c", 4: "d"}

                        // is object.assign waly method sy hum 2 object ko ekhata krain gy.
const objt3 = Object.assign({}, objt1, objt2)
console.log(objt3)                  // result....donon object ekhaty ho gay.















                        // phly me ne 2 object bnay or unk ander kuch data store kia....phr me ne 3sra variable bnaya object ka....or us main assign metod apply kia...is Object.assign ka mtlb ap jitny merzi object ko ekhata kr skty han....
const myobject1 = {
    name: "ahmad",
    email: "ahmad23@gmail.com",
    roll: "2344",
    city: "multan",
}

const myobject2 = {
    location: "pakistan",
    adress: "haram gate",
    status: "unmarried",
    religion: "muslim",
}

const myobject3 = Object.assign(myobject1, myobject2)           // Object.assign yeh method object ko ekhata krny ka hai.
console.log(myobject3)












// object.assign wala method ke bad curly bracess use krna zarori ni hai....but age lga daiin gy tw achi bat hai.
let you_object = {name: "slaman khan", age: 44, location: "india"}
let you_object2 = {subject: "computer", passion: "ameer zada", temp: "50deg"}

let final_object = Object.assign({}, you_object,you_object2)    // {} is curly bracess ko empty object kahty han....yeh lgana zarori ni but achi bat hai.
console.log(final_object);


















const objta = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E'}      // object declare
const objtb = {6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'j'}     // object declare
const objtc = {...objta, ...objtb}        // we use mostly this method.
console.log(objtc);


// --------------->important accousment....we zayada ter 3 dot wala method use krain gy object ko ekhata krny ka....jaisy ke array main use kia tha.....object.assign bi kaheen kaheen use krain gy.....3 dot wala method zaya use krain gy.

















// advanced topic isk bary main hum agy ja kr discus krian gy....jb database sy users ayn gy tw zayader array ke object ayn gy....yeh bht important bi hai....or hum agy ja kr project main use bi krian gy.

const users = [             // isko array ka object kahty han....mtlb array ke ander object.
        {
            id: 1,
            email: "ahmadshafiq@gmail.com",
        }
]















// is main me keys and vlaue ko alag alag axcess kronga...keys and value ko axcess krny ke liyeh.....Object keyword ko use krna pryga...na ke woh object ka variale jo apny declare kry hoga.
const objt1 = {
    name: "mother",
    roll: 1313304,
    subject: "math",
    location: "haram gate",
    adress: "pakistan",
    class: "graduation",
    age: 33,

}

console.log(Object.keys(objt1));        // print all only keys.
console.log(Object.values(objt1));      // print all only values.

            // is main me ne keys and values ko alaida alaida target kia.



            