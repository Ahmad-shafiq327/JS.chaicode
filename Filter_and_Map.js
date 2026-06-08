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






// sirf us user ka data dega jo user active hoga.
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







// sirf mouse and keyboard ki detail retun kry ga Q ke 2000 ke equal and choti value in donon ki han.
const products = [
    {name: "mouse", price: 500},
    {name: "Keyboard", price: 2000},
    {name: "Headphone", price: 4000},
]

const CheapProducts = products.filter((products) => {
    return products.price <= 2000;
});

console.log(CheapProducts);








// result bnana mango and orange...Q ke in main an ata hai.
const fruites = ["Apple", "bnana", "mango", "orange"]

const resultFruites = fruites.filter((fruites) => {
    return fruites.includes('an')
})

console.log(resultFruites);
