// lec40 promise






// promise apny ander aik call back laita hai...callback hell ka matlb....callback function ka andar aik aur callback...phr usk ander aik aur callback...usko be reduce krta hai.

// aj sy kai sal phly hamary pas promise available ni hoty thy...tb hum asynchorous ka use krty thy...us waqt bluebird and Q library hoti thi bluebird best library thi....ab yeh library by default milti hai...node.js main bluebird library by dafault ati hai.


// promise is a object that represent the eventual completion or failure of an asynchronous operation and its resulting value....asynchorous operation means that the operation is not completed immediately and it will take some time to complete....for example when we are fetching data from the server it will take some time to get the data and in the meantime we can do other things...so we can use promise to handle this situation....asynchorous thora slow hai...jaisa ke kam ko krny main thora time leta hai.....but promise fast hai....future main bi bht kam ata hai.....specialy ap kai bar mobile application development vaghera krty han...tw kai bar ap sound device ko access krty han...tw us main promise ka use hota hai....and camera device ko activita krna chahty han...aisi jagahon pr promise use hoty han.







// promise ky 3 state hoty han....pending, fulfilled, rejected


// pending---------->jab promise create hota hai tw wo pending state main hota hai....pending ka matlab ye hai ke abhi tak promise ka result nahi aaya hai....abhi tak promise complete nahi hua....mtlb inital state.

// fulfilled--------->jab promise complete ho jata hai tw wo fulfilled state main chala jata hai....fulfilled ka matlab ye hai ke promise ka result aa gaya hai....mtlb promise complete ho gaya hai.....that means the operation was successful and we got the result....mtlb jo kaam hum ne kiya tha wo ho gaya.

// rejected--------->jab promise complete nahi hota hai tw wo rejected state main chala jata hai....rejected ka matlab ye hai ke promise ka result nahi aaya hai....mtlb promise complete nahi hua....that means the operation was failed and we did not get the result....mtlb jo kaam hum ne kiya tha wo nahi ho gaya.













// phly is promise ko aik variable main store kia...is main new aik method hai...promise aik keyword hai...then function apply kia and is main callback function pass kia...resolve and reject yeh dono mehtod han...then asynchorous task lgaya...then resolve() likha....mtlb resolve ko call krna....iska mtlb hai function waly parameter ko .then sy connet krna...agr hum yeh ni likhain gy tw .then wala code run ni hoga...q ke woh apas main connect hi ni houy hongy...phly asonchorouns wala code run hoga....phr agr resolve.then sy connect houa hoga tw phr .then wala code run hoga...verna ni.







const promiseOne = new Promise(function(resolve, reject) {
    // do some asynchronous operation
    // database calls, api calls, file reading, etc

    setTimeout(function() { // asynchorous task.
        console.log("ahmad shafiq");
        resolve() // calling of resolve...phr yeh .then sy connect hoga.
        
    }, 2000)

})

// .then by default resolve sy connection hota hai.
promiseOne.then(function() {
    console.log("promise one resolved");
})

// agr me asynchrous task main reject likhdon and nechy .then likhdon two code run ni kry ga...q ke resolve ka .then sy connection hai.














// push on mind
const promiseone = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("promise one complete")
        resolve()
    }, 1000)

})

promiseone.then(function() {
    console.log("promiseone is run");
})














// before promise declare in variable...then function calling...then put asynchorousn task...then calling resolve()...and connect by .then with resolve method...and .then also calling function.

const promiseONE = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("complete asynchorouns task")
        resolve()
    }, 3000)
})

promiseONE.then(function(){
    console.log("resolve also run")
})












// push on mind

const promiseppp = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("asynchorous task promissepppp")
        resolve()
    }, 5000)


})

promiseppp.then(function() {
    for(let i = 0; i < 5; i++)
    {
        console.log(i)
    }

})

// resolve by default .then sy connect hota hai...connect hony ke bad .then wala code bi run hota hai...me ne .then waly code main for-loop lgadi....code run ho gya....i itself create.
















// you know that....me ne asynchorouns task me resolve method main user ka data likha....phr .then ki madad sy resolve sy connect houa and user ka data 6sec bad print houa.
const promiseResolve = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "ahmad shafiq", email: "example.com"})

    }, 6000)

})

promiseResolve.then(function(item) {
    console.log(item);
    
})














//------------->reject


// reject by default .catch sy connect hota hai.
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("something went wrong");
        reject()

    }, 7000)
})

promiseFour.catch(function() {
    console.log("yes reject was found");
    
})










