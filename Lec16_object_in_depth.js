                        //   Lec 16 object in depth





const object = {}    // object ko is trhan declare krty han...is waqt yeh empty object hai.
Object.create            // is trhan bi object ko declear krty han....but isk bary main bad main study krain gy...and isi ke ander singelton bunta hai...isko bolajata hai constructor method ke throw...




                           // isk ander keys or value ka chakker hota hai.s
const myObject = {
    name: "Ahmad",              // by default hamara compiler....keys ko as a string consider krta hai...."name".
    age: 33,                    // values main jo apka dil kry di jiyeh.
    city: "Multan",
    country: "pakistan",
    location: "haram gate",
    Email: "mahmadshafiq327@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"]          // me ne value main array put kia hai....me ne phly hi btaya hai....value main jo apka dil kry di jiyeh....

}

console.log(myObject);              // result uper wala pura object as it is print ho jay ga...
console.log(myObject.city);        
                                // result Multan...object main value ko axcess krny ka tareeka kuch youn hai....phly variable ka name likhain phr dot. and phr jonsi value ko axcess krna hai uski key likhain....jaisa ke-----> console.log(myObject.location)
console.log(myObject.name);         // result Ahmad.








const mySomble = Symbol("value")

let yourObject = {
    name: "Ahmad shafiq",
    "full Name": "Muhmmad Ahmad Shafiw",            // jaisa ke me ne phly btaya tha...ke compiler object ki keys ko string consider krta hai.
    [mySomble]: "value",
}
console.log(yourObject["full Name"])
console.log(yourObject[mySomble])










                           // i declare some keys and values......then i change values.
const object2 = {
    yourname: "ahmad shafiq",
    youremail: "ahmadchatgpt@gmail.com",
    password: "ahmad1313304",
    yrlocation: "haram gate multan",
}
console.log(object2);           // result print as it is.
                            
                            // ab me bari bari is object ki value ko changed kron ga.

object2.yourname = "hafiz Ahmad shafiq"             // result hafiz Ahmad shafiq.....i changed values from object.
object2.youremail = "Ahmadgoogle.come"              // iski value bi changed krdi me ne.
object2.password = "663185"                         // passwrod bi changed kr dia me ne.
object2.yrlocation = "paksitan"                     // location bi changed krdi me ne.
console.log(object2);                         
                                // me ne bari bari pury object2 ki value changed krdi....yehi best tareeka value ko changed krny ka.....object2.












                                // i make a object....then i declare in which some keys and values.
let ourObject = {
    array: ['1', '2', '3', '4', '5'],
    array2: ["ahmad", "ali", "Allah"],
    first_Name: "Ahmad",
    second_Name: "Shafiq",
    your_age: 50,
    your_location: "inside haram gate",
}

console.log(ourObject);

ourObject.array = ['99', '22', '33', '44', '55']
ourObject.array2 ['OO', 'tt', 'ww', 'pp']
ourObject.first_Name = "shafiq"
ourObject.second_Name = "ahmad"
ourObject.your_age = 22
ourObject.your_location = "Multna"
console.log(ourObject)
                            
                        // me ne bari bari in sub ki value update krdi.























                          // is object main me freez function use kia...mtlb ke object.freez(firstObject) yeh likny ke bad me koi bi vlaue change ni kr skta.      
const firstObject = {
    cast: "punjabi",
    goverment: "chotia goverment",
    people: "awam bi chotia",
    final_result: "leave pakistan",
}

console.log(firstObject);                   // pura object as it is print ho jay ga.
Object.freeze(firstObject)                  // i apply freeze function.....mtlb ab me koi bi value change ni kr skta.
firstObject.goverment = "good goverment"    // me ne value change krny ki kokish ki...but value change ni hoi...q ke me ne upper freeze function apply kia houa hai.
console.log(firstObject);                   // pura object as it is print ho jay ga....kuch bi tabdeel ni houa.

















const jsUser = {
    userName: "javascript",
    password3: 1313304,
    country3: "japan",
    your_jobs: "web developer",
    your_sir: "yasir bodla sab",
    userLogedIn: "till not now",
    after_tomorrow: "Monday",
    day_after_tomorrow: "Wednesday",
    good_bye: "khuda hafiz",
}


jsUser.greeting = function(){                       // yeh chatgpt ne btaya hai...yeh function ko call krny ka method hai.
    // console.log("hello js user");
    return "hello js user"                      // yeh best tareeka hai...code ko run krny ka...this tell me chatgpt.
    
}

jsUser.greetingTwo = function(){
    // console.log(`hello js user, ${this.your_sir}`);    // jb me is line ko run kr rha tha tw compiler main undefined likha arha tha.
    return `hello js user, ${this.your_sir}`;           // this is also tell me chatgpt.
}

console.log(jsUser.greeting());             // is method ko console.log ke beghair call ki
console.log(jsUser.greetingTwo());          // as it is.























const objct = {
    username: "ahmadshafiq",
    passwrod: 2323232,
    email: "google.com",
    car: "range rover",
}


objct.greeting = function(){
    console.log(`hello car name, ${this.car}`);             // yeh line likhny pr function execute ni houa....sirf function ka refrence aya hai.
    
}

return console.log(objct.greeting())






















const javascript = {
    myname: "ibraheem",
    myclass: "computer",
    rollNumber: 3232,
    subject: ["math", "english", "chemistry"],
    marks: 800,
    gift: "marcadees",
}

javascript.greeting = function() {              // isk bary main research kr mujhy iski samajh ni ayi.
    console.log(`hello students. ${this.myclass}`);
    
    
}

console.log(javascript.greeting());



            // is greeting mujhy achi trhan samajh ni ayi.













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

