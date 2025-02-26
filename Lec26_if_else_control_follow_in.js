// lec 26 if_else control follow in javascript.







                // this is if else statment...yeh c language main achi trhan parh chuka hon.

// if (2==2) {
//     console.log("yes 2 equal to 2");
    
// }


// if (2===2) { 
//     console.log("yes");
       
// }


// if (2=="2") {
//     console.log("i think no");      // but result yes.
       
// }


// if (2==6) {
//     console.log("can 2 equal of 6");
       
// }

// else {
//     console.log("no: 2 is not equal to 6");
    
// }











            // this is easy.

// const temperatue = 100

// if (temperatue == 40) {
//     console.log("today very cool day");
   
// }
// else {
//     console.log("not");
    
// }








                // i itself creat.

// const score = 10

// if (score > 150) {
//     const power = "Pass"
//     console.log(`user have: ${power}`);   
// }
// else {
//     const power2 = "Fail"
//     console.log(`user have: ${power2}`);
    
// }















                    // before declare variable balance and 10 value assign....agr balance greater then 50 houa print YES.....verna NO.

// const balance = 10

// if (balance > 50) console.log("YES");
// else {
//     console.log("NO");
    
// }

                // idher shorthand tareeka apply kia...isy implesit scope kahty han.....but yeh tareeka bad hai.











                        // result Thanks...q ke is main koi bi condition true ni hoti....me ne mysalary 77000 rakhi hai... 

// const mySalary = 77000

// if (mySalary < 35000) {
//     console.log("les than: 35000");
// }
// else if (mySalary < 40000) {
//     console.log("yes les than: 37000");
// }
// else if (mySalary < 50000) {
//     console.log("les than: 50000");
// }
// else {
//     console.log("Thanks");
    
// }













                // dimag pr zoor dy.

// const marks = 100

// if (marks >= 90) {
//     console.log("Grade: A");
// }
// else if (marks >= 80) {
//     console.log("Grade: B");
// }
// else if (marks >= 70) {
//     console.log("Grade: C");
// }
// else if (marks >= 60) {
//     console.log("Grade: D");
// }
// else if (marks >= 50) {
//     console.log("Grade: E");
// }
// else {
//     console.log("Grade: F");
    
// }


















                // this is very easy dimag pr zoor dy...result thanks for shoping.

// const userLoggedIn = true 
// const debitCard = true

// if (userLoggedIn && debitCard) { 
//         console.log("thanks for shoping");
// }
// else {
//         console.log("please try again");
        
// }











                                // result please try again. agr userlogedin hoga and user ke pas debitcard hoga tw wellcome...verna please try again.

// const UserlogedIn = false
// const debitcard = true 

// if (UserlogedIn && debitcard) {
//         console.log("Wellcome");
// }
// else {
//         console.log("please try again");
        
// }


















// const myname = "Ahmad shafiq"
// const myage = 22
// const location = "pakistan"

// if (myname == "Ahmad shafiq" && myage == 22 && location == "pakistan") {
//         console.log("welcome ahamd shafiq");
// }
// else {
//         console.log("sory");
        
// }












                        // in this or statement...dimag pr zoor dy.

// const myName = "Hafiz Ahmad"
// const myName2 = "Ahmad shafiq"

// if (myName == "Hafiz Ahmad" || myName2 == "Ahmad shafiq") {
//         console.log("khushamsheed");
// }
// else {
//         console.log("again try");
        
// }














// const UserLoggedInFromGoogle = true
// const UserLoggedInFromEmail = true
// const UserLoggedInFromNumber = true

// if (UserLoggedInFromGoogle || UserLoggedInFromEmail || UserLoggedInFromNumber) {
//         console.log("Thanks for loggedIn");
        
        
// }















//  const UserEmail = []

//  if (userEmail.length === 0) {
//         console.log("Array is empty");

//  }








                // switch statement....this is very easy..before i declare month variable value assigne 3.....then apply switch statment...in which keys and values.....jahan pr bi month ki value 3 axcess hogi udher ho code execute hoga...and usk bad kuch bi print ni hoga.

// const month = 3
// switch (month) {
//         case 1:
//                 console.log("January");
//                 break;
//         case 2:
//                 console.log("February");
//                 break;
//         case 3:
//                 console.log("March");
//                 break;
//         case 4:
//                 console.log("April");
//                 break;
//         default:
//                 console.log("default execute");                
//                 break;
// }












                                // this is very easy dimag pr zoor dy.

// const days = 6

// switch (days) {

//         case 1:
//                 console.log("Saturday");
//                 break;
//         case 2:
//                 console.log("Sunday");
//                 break;
//         case 3:
//                 console.log("Monday");
//                 break;
//         case 4:
//                 console.log("Tuesday");
//                 break;
//         case 5:
//                 console.log("Wednesday");
//                 break;
//         case 6:
//                 console.log("Thusday");
//                 break;
//         case 7:
//                 console.log("Friday");
//                 break;

//         default:
//                 console.log("default value execute");
//                 break;
// }


















                        // this is also easy...ap variable ko kcuh bi assign kr ke usy switch statement main axces kr skty han.

// const Month = "june"

// switch (Month) {
//         case "jan":
//                 console.log("january");
//                 break;
//         case "Aug":
//                 console.log("august");
//                 break;
//         case "Dec":
//                 console.log("December");
//                 break;
//         case "june":
//                 console.log("june");
//                 break;

//         default:
//                 console.log("default value");
                
//                 break;
// }






















                        // ---------> truthy and falsey value.

        // truthy....iska mtlb hum assume krlety han ke string ke ander kuch bi hai tw woh true hai...string ke ander kahani badal jati hai single quots sy likho ya double quots sy....this is truthy values "0", 'false', " ",

const userEmail = "mahmadshafiq327@gmail.com"

if (userEmail) {
        console.log("get user email");  // print get user email.
}
else {
        console.log("dont get email");
}







        // falsy values--------> false, 0, -0, bigInt 0n, "", undefined, NaN,
        // truthy values-------> true, "0", 'false', " ", [], {}, function(){}, 



                // this is empty array
// let myArray = []

// if (myArray.length === 0) {
//         console.log("empty Array");
// }
// else {
//         console.log("dont empty");
        
// }








                // this is dont empty array...because array main data hai.                

// let arr = ["ahmad", "fahad", "ubaid"]

// if (arr.length === 0) {
//         console.log("this is empty arr");
// }
// else {
//         console.log("this is dont empty arr");
        
// }












                        // dimag pr zoor dy...is main check kia ke object main keys han ya ni...q ke object main data put hai.

// const my_object = {
//         name: "Ahmad Shafiq",
//         roll: 0,
//         class: "computer",
//         subject: ["maths", "english", "islamiyat"]
// }

// if (Object.keys(my_object).length === 0) {
//         console.log("object equal to zero");
// }
// else {
//         console.log("object not equal to zero");
        
// }







                // result object is zero....because object empty hai.

// let myObject = {}      // this is empty object.


// if (Object.keys(myObject).length === 0) {
//         console.log("object is equal to 0");
// }
// else {
//         console.log("object is not equal to zero");
        
// }












// --------> Nullish Coalescing Operator (??) null and undefined.


// let Vallue1 = 5 ?? 10

// console.log(Vallue1)            // result 5




// let Vallue2 = null ?? 20

// console.log(Vallue2);


                        // yeh zayada ter value ko print kerta hai....yeh database main kam ay ga...


// let Value = undefined ?? 22
// console.log(Value);










                //--------->terniary operator-------->



// condition ? true : false

const teaprice = 100
teaprice <= 80 ? console.log("less than 80") : console.log("greater than 80")







const price = 0

switch (price) {
        case 0:
                console.log("Off");
                break;
        case 1:
                console.log("On");
                break;

        default:
                console.log("Neither On and Off");
                
                break;
}