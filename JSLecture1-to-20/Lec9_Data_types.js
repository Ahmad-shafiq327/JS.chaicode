// lecture 9 Datatypes




let a = "ahmad"
let b = " shafiq"
console.log(a + b) 


    //two types of data type.....primitive and non-primitive
    //primitive-----> String, Number, Boolean, null, undefined, Symbol, BigInt



    const score = 100
    const scoreValue = 100.3            // yeh bi aik number hi hai.....not a decimal number.

    const isLoggedIn = false
    const outsideTem = null
    let userEmail;                  // iska mtlb yeh undefined hai....q ke isko abi kuch assigned ni kia.




    const id = Symbol('123')            // symbol ke bary main details sy agy lecture main perhain gy.
    const anotherId = Symbol('123')

    console.log(id === anotherId);      // result false....infact value same....but result false....we will discuse another lecture.
    














    //Reference (Non primitive)--------> Array, Objects, Functions

const heros = ["Salmankhan", "fahadmustafa", "Ahmad"]      // this is array
console.log(heros)









    //objects----------> object ko hum cirly brackets main likhty han.

let myObject = {
    name: "ahmad",
    age: 22,
    country:  "pakistan",
    rollNum: 71,
    class: "graduade",
}

console.log(myObject);















            //function(){}------->this is function

const myFunction = function(){       // this is function.
    console.log("hello hetaish")

}

console.log(myFunction)
console.log(typeof myFunction)




















console.log("ahmad")

const name = "Ahmad Shafiq"
console.log(typeof name);

let age = 22
console.log(typeof age);

let accountId = "Ahmad2345"
console.log(typeof accountId);


let markd = null
console.log(markd);

let id1 = '334343'
console.log(typeof id1);




const rar = "ahmad"
let str_to_num = Number(rar)
console.log(str_to_num);
console.log(typeof str_to_num)



const number = 232323
console.log(number)
console.log(typeof number);
let num_to_str = String(number)
console.log(num_to_str);
console.log(typeof num_to_str);




let store = true
console.log(typeof store);
let store2 = String(true)
console.log(store2);
console.log(typeof store2);


