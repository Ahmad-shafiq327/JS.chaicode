// Lec18_object_de_structure_JSON_API


                    // de structure ka mtlb code ko short kr ke likhna......is de structure ko log zayadter React.js main use krty han...mtlb short tareeka bnana...aksar log short tareeka bnaty han.


                        // this is object.
const course = {
    courseName: "javascript",
    price: "1000",
    TeacherName: "hetaish choudhary",
}

const {TeacherName} = course            // isy de structure kahty han....mtlb short tareeka...aksar log yeh use krty han.
console.log(TeacherName);               // result hetaish choudhary.

                                        // isy de structure kahty han...mtlab short tareeka....wena me isko dot sy axcess krta.

















                            // i declare object.
const language = {
    name: "java",
    fullName: "javascript",
    other1: "flutter",
    other2: "python",
    other3: "c++",
    other4: "React.js",
}

const {fullName} = language             // this is de structure.
console.log(fullName);                  // target kia fullName ko.

                             // de structure easy hai....yeh aksar hum React main use krain gy.....verna me isy dot sy axcess krta.

















const username = {
    name: "ahmad shafiq",
    age: 33,
    rollNumber: 8297,
    subject: ["computer", "math", "urde", "english"],
    location: "pakistan",
}

console.log(username.rollNumber);               // ab me ne isy dot waly tareeky sy axcess kia hai.
const {subject} = username                      // ab me ne de structure wala tareeka use kia.
console.log(subject);                           // result.....print compelte array of subject....because me ne subject array main liyeh thy.
















// API.....apna kam dosry ke sir pay dal dena API kahlata hai...........jaisa ke ap kisi resturent main khana khany gay apny waiter sy kaha mujhu aik biryani lado.....waiter jaisy merzi le kr ay....yeh uska masla hai....woh jo manue card hai woh API ka documentaion hai...
// mtlb ap google pr login krty han....google usy kaisy verify krta hai woh regester hai ya ni uska email phly sy backend main hai ya ni....yeh apka thori na hadick hai...yeh sary kam API ke through hoty han.


// backend sy kuch value ati hai apk pas ap usy kaisy likhty han....kuch sal phly yeh value xml sturcture main ati thi tw woh bht hi complex hota tha.......aj kl yeh value JSON main ati hai...JSON actualy only curly brackest...without declare variable.


// --------------> { } this is JSON...only curly brackets....isy object bi kah skty han....but object ko hum variable sy declare krty han....JSON ko ni krna.








                // this is API.......but iska formate JSON main hai....object main bi keys and values hoti thi....and JSON main bi keys and value hoti han....but object main hum keys ko double qoots main ni likhty thy.....lakin JSON Main hum keys and values dono ko double qoot main likhain gy...bazahir tw apko error nazar ay ga...but backend main koi error ni hoga....ture and false double quoot main ni aty...q ke inka datatype different hai.....


                // this is API and yeh JSON formate main hai.....ab API JSON formate main hi aty han.
// {
    "name": "Ahmad shafiq",
    "courseName": "javascript",
    "price": "free",
    "age": 33,


//}

            
                // important accousment....kai bar apko API array ke formate main bi milti hai....mtlb array main object...






// isy google kr yeh famous API hai.------> randomuser me API....is API ka code kuch ajeeb trhan sy likha hoga...phr isko copy kr ke google krna JSON formate converter....convertor hony ke bad yeh readable hoga....






