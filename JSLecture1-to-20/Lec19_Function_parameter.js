                          Lec19_Function_parameter.js


// function apny ap main aik keyword hai....humny code ko aik box main bnd krna hai phr usk refrence ko print kerwana hai...




                // this is a function...is main code ki kafi sari copy bnai.....myName function ka refrence hai...function bht important hai backend ke liyeh and React ke liyeh.
function myName() {
    console.log('A');
    console.log('H');
    console.log('M');
    console.log('A');
    console.log('D');
    
    
}

myName()            // me ne myName likh kr function ko call ki....jaisa ke me ne c language main prha tha....function main function ka refrence and pranthesis likh kr function ko call ki jati hai......result....aik aik word alaida alaida line main print hoga...agr me sirf myName likhon ga tw functon execution ni hoga...jb tk ke me () paranthesis na lgaon.
                         // myName function ka refrence hai...and yeh ()  function ka execution hai...



















                            // isy achi trhan samajhly....function ko define krty waqat paranthesis main jo bi likha hota hia usy parameters kahty ha.....jaisa ke is main number1, number2 parameters han.

function addTwoNumber(number1, number2) {             // declare a function....and put parameters.
    console.log(number1 + number2);                 // run kerwaya 2 number ko and add kia...but value put ni ki..
    
}

addTwoNumber(4, 6)               // jb function ko call krty han...us main jo likha jata hai usy bolty han arguments...jaisa ke is main 4,6  arguments han.






















                    // function likhy ka 2nd method.

function addtwoNumber(Number1, Number2) {       // you know define a function and put 2 parameters.
    return Number1 + Number2                    // return some of 2 number.
}

const result = addtwoNumber(10, 20)         // declare variiable result ke name sy.
console.log("result: ", result);
























                        
function myNumber(num1, num2) {

    return num1 + num2
}

console.log("result: ", myNumber(3, 8));























                        // isy achi trhan samajh isy aksar use krain gy.
function loginUserMessage(UserName) {       // declare a function use parameters UserName.
    return `${UserName} just logged in`         // isy bi hum aksar use krain gy...
}

loginUserMessage("Ahmad")               // yeh likhny sy function execuute tw hoga...but kuch print ni hoga.
console.log(loginUserMessage("Ahmad"))      // ab print hoga-------->Ahmad just logged in.





















                            // yeh bht hi easy hai....but we use dificult function agy ja kr.
function country(myCountry) {
    console.log(myCountry)

}

country("Pakistan")         // result pakistan.



















                        // this is easy...and in which use if else condition.....agy ja kr if(!userName) is trhan bi lika dekho gy.....tripple equal checked strickly...that mean check equal and datatype.

function logedIn(userName) {
    if(userName === "Ahmad Shafiq"){
        console.log("welcome to loging");
        
    }
    else {
        console.log("please loggedIn");
        
    }
    
}

logedIn("ubaid")






















                    // i declare a function in which parameter myname ko assign kia "ahmad shafiq" agr me function ko call karon ke mera Name "ahmad shafiq" hai...then else print hoga welcome sir....if me function ko call karon ke mera name "haseeb hai" then please enter your name print hoga.

function my_Name(myname = "ahmad shafiq") {  
    if(!myname) {
        console.log("please enter your name")
        
    }
    
    else {
        console.log("welcome sir");
        
    }


}

my_Name("ahmad shafiq")