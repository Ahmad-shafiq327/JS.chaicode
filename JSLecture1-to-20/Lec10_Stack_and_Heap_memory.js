// Lecture 10 stack and heap memory


// stack memory-------> mtlb jo bi apny variable declare kerwaya hai.......uski apko copy milti hai.
// Heap memory--------> mtlb heap memory ke ander apko origional value ka refrence milta hai.







let myYoutubename = "haiteshchoudharydotcom"  
let anotherName = myYoutubename
anotherName = "chaiorcode"              // stack memory main........jb bi hum kisi variable ki value ko target krty han....stack memory main hamain uska refrence milta hia...mtb ke origional value change ni hoti.
console.log(anotherName)                // this is the example of stack memory.
console.log(myYoutubename)












let userOne = {
    email: "userone@gmail.com",
    bankAcount: "Ahmadshafiq36302",
}

let userTwo = userOne


userTwo.email = "hetaishgoogle.com"

console.log(userOne.email)
console.log(userTwo.email)

















// stack memory main primitive data types use hoty han------> String, Number, Boolean, null, undefined, Symbol, BigInt
// Heap memory  main Refrence(Non primitive)------------> Array, Objects, Functions

