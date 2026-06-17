// -------> practic filter and map....after long time....02-june-2026...11:50pm


// filter() array ke element ko check krta hai...or sirf un element ko new array main pas kr ke return krta hai...jo condition pr pura uterty han...that mean new array return krta hai...origional array safe rehta hai.

const number = [1, 2, 3, 4, 5]
const result = number.filter((num) => {
    return num > 2
});
console.log(result);







const age = [16, 18, 20, 22, 26, 30, 40]
const ans = age.filter((num) => {
    return num >= 22
})
console.log(ans);








const add = [1, 2, 3, 4, 5]
const check = add.filter((parameter) => {
     return parameter % 2 === 0;
})

console.log(check);


// phla element pakarta hai...callback function ko deta hai...condition apply hoti hai...phr bari bari every element new array main add hota jata hai...phr new array return krta hai...or origional array safe rehta hai.

const Filter = [10, 20, 30, 40, 50]
const filterOut = Filter.filter((num) => {
    return num * 0
})

console.log(filterOut);





// retun kry ga 7 and 11 Q ke jb hum 2 ka 2 sy modulus lain gy tw 2 2 sy cut jay ga 0 bachy ga...isi trhan 4 8 and 12 ke sath bi aisy hi hoga....but jb 7 and 11 ki bari ay gi tw remainder 1 bachy ga...isi liyeh result [7, 11] ay ga...filter sirf usi element ko retun krta hai jo condition pr pura uterta hai.
const ar = [2, 4, 7, 8, 11, 12]
const even = ar.filter((num) => {
    return num % 2 === 1
})

console.log(even);






// sirf us user ka data dega jo user active hoga....yad rahy ke callback function ke ander as a parameter kuch bi likh skty han....zarori nahi ke jo variable array sy declare kia ho wohi do.
const user = [
    {name: "ahmad", active: true},
    {name: "haseeb", active: true},
    {name: "ubaid", active: false},
]

const checkUser = user.filter((user) => {
    return user.active === true
})

console.log(checkUser);








// isy kahty han hardCode aik hi line main condition apply krdi...phly array declare kia...phr one line main condition apply ki mtlb 22 and 22 sy bari wali do.
const Age = [15, 18, 22, 24, 26, 28, 30]
const CheckAdult = Age.filter(a => a >= 22)
console.log(CheckAdult);





// sirf id number 4 ka data nahi dega....baki sari idees ka data retun kry ga.
const idees = [
    {id: 1, text: "lear js"},
    {id: 2, text: "react.js"},
    {id: 3, text: "python"},
    {id: 4, text: "C++"}
]

const CheckLanguage = idees.filter(b => b.id !== 4)
console.log(CheckLanguage);




// Ahmad Ali and Afraz retun kry ga q ke yeh A sy start hoty han.
const Names = ["Ahmad", "Ali", "Afraz", "haseeb", "fahad"]
const Result = Names.filter((Names) => {
    return Names.startsWith('A');
})

console.log(Result);







// sirf mouse and keyboard ki detail retun kry ga Q ke 2000 ke equal and choti value in donon ki han...yad rahy ke filter(products) callback function ke ander as a parameter kuch bi likh skty han......me ne products likha hai....iski jagah kuch bi likh skty han....a bi b bi c bi arr bi p bi kuch bi likh skty han.
const products = [
    {name: "mouse", price: 500},
    {name: "Keyboard", price: 2000},
    {name: "Headphone", price: 4000},
]

const CheapProducts = products.filter((products) => {
    return products.price <= 2000;
});

console.log(CheapProducts);








// result bnana mango and orange...Q ke in main an ata hai..
const fruites = ["Apple", "bnana", "mango", "orange"]

const resultFruites = fruites.filter((check) => {
    return check.includes('an')
})

console.log(resultFruites);










// ab hum map use krain gy....mostly map filter ke sath hi use hota hai...mostly map array amd array main object main use hota hai.

// phly 1 array declare kia...array pr filter lgaya ke mujhy woh number do jis ka hum 2 sy modolus lain or woh zero ke equal ay..jaisa ke 2 ka % zero hota hai...phr jo answer aya us pr map lga kr usy 2 sy multiply kr dia.
const Mapp = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mapping = Mapp.filter(num => num % 2 === 0).map(num => num * 2) // yeh line hardcode hai.
console.log(mapping); // [4,8,12,16]








// push on mind...before array declare...then apply filter method...after result apply map method.
const capital = [10, 20, 30, 40, 50]
const Rslt = capital
.filter(a => a > 30) // 
.map(a => a * 2)
console.log(Rslt) // [80, 100]











// push on mind...phlt 1 array mian object declare kia...us pr filter method ke madad sy 24 sy bari age walon ka data lia...phr map lga kr unka name axcess kia.
const User = [
    {name: 'Ahmad', age: '22'},
    {name: 'ali', age: '24'},
    {name: 'haseeb', age: '28'},
    {name: 'fahad', age: '32'},
    {name: 'Nouman', age: '35'},

]
// hardCode use
const CheckAge = User.filter(adult => adult.age > 24).map(adult => adult.name)
console.log(CheckAge);







// push on mind...phly 1 array mein object declare kia....phr fitler lga kr check kia kon kon false hai...phr jo jawab aya us pr map lga kr uski id ko axcess kia.
const objct = [
    {name: 'Ahmad', id: 1, isActie: true},
    {name: 'Haseeb', id: 2, isActie: true},
    {name: 'Ubaid', id: 3, isActie: false},
    {name: 'Nouman', id: 4, isActie: false},
    {name: 'fahad', id: 5, isActie: false},
]

const CheckTrue = objct.filter(arr => arr.isActie === false).map(arr => arr.id)
console.log(CheckTrue);
// ['haseeb', 'fahad', 'nouman']
// [3, 4, 5]



