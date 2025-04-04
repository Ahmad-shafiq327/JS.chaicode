        // Lec22 scope and mini hoisting.





                        // two wala function one waly function sy icecream mang skta hai....child function parent ke variable ko axces kr paty han.

function one() {
    const username = "hitaish"


    function two() {
        const website = "youtube"           // jo variable ander declare kiyeh han...unhy bahir axces ni kia ja skta.
        console.log(username);
    
    }

   // console.log(website);         // yeh axces ni kia ja skta...q ke me isko scope sy bahir axces kr rha hon.

    two()                       // calling function two.
    
}

one()               // jb tk me function one ko call ni krta...kuch bi print ni hota....q ke sub kuh function one main hi likha hai.


























                    // this is also easy...dimag pr zoor dy.

function one1() {
    const name = "Ahmad Shafiq"
    


    function two2() {
        console.log(name);
        
    }
    two2()
    
}

one1()
 












                        // this is also easy....i itself creat.

function myFunction() {
    const num = 34343
    

    function yourFunction() {
        const number = 6844327
        console.log(number);
        console.log(num);
        
        
    }

    yourFunction()

}

myFunction()













                        // yeh curly bracess hi scope han.

if (true) {
    const Username = "hafiz Ahmad Shafifq"
    
    if (Username === "hafiz Ahmad Shafifq") {
        console.log("welcome loggedin");
        const webStie = " mahmadshafi@gmail.com"
        console.log(Username + webStie);
        
    }
    
    console.log(Username);    
    

    // console.log(webStie);           // yeh kabi bi print ni hoga...q ke me isko isk scope sy bahir axces kr rha hon.
    
}

// console.log(Username);               // yeh bi kabi print ni hoga q ke me isy bi isk scope sy bahir axces kr rha hon.












                    // this is easy is main 2 scope han...me ne first waly scope ke ander sy hi NAME ko axces kia hai.

if (true) {
    const NAME = "Ahmad"
    if (NAME == "Ahmad") {
        const chanale = "youtube.com"
        console.log(chanale);
           
    }
    
    console.log(NAME);
    
    

}














                    // uper me ne kaha tha ke scope krty waqt function main parameter put ni krny...glat kaha tha....function main return likhty waqt parameter put krny han.

function addOne(Num) {
    return Num + 1
}

console.log(addOne(4));         //  resutl 5 function ko print kerwaya and call bi ki and arguments main 4 putt kia.




















                            // you know that this is simple function.

function AddOne(number1) {
    return number1 * 2

}

console.log(addOne(50))







                    // javascript main variable bht powerfull hoty han...yeh apny ander kuch bi store kr skty han.....jaisa ke function bi object bi json walues or bi bht kuch.

const AddTwo = function(Number) {
    return Number - 3

}

console.log(AddTwo(10))


                        // yeh technique hai...apko agy ja kr is trhan sy bi function nazar ayn gy....yeh amazing hai....idher variable main pura function store kr dia.
















                                // phly function ko print and call kerwaya....then function ko declare kia...yeh tareeka bi thk hai....agy ja kr isy bi achy sy read krain gy...c language main tree parha tha yeh usi ki trhan hai...kahan function ko rakhna hai...kahan variable ko rakhna hai....kahan call krni hai...kahan print kerwana hai.

console.log(plus(200))              // result 204

function plus(add){
    return add + 4
}










                        // yeh tareeka glat hai...phly function ko call krdi..bad main function ko variable main store kerwadia....agy ja kr tree method parhain gy...kahan function ko rakhna hai...kahan variable ko rakhna hai....kahan call krni hai...kahan print kerwana hai.

(Minus(3))
const Minus = function(min){
    return min - 1
}