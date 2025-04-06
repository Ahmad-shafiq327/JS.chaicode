            // Lec30 filter map and reduce






        // phy aik array declare kia...phr filter method main arow calling function pr reduce method apply kia and new variable main store kia....then print kewaya....yeh hur value ko check kry ga ke 5 sy bari value konsi han...result 5 sy bary number print ho gay...isy kahty han reduce mehtod.....isy hum bht bar use krain gy.
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = myNumber.filter( (num) => num > 5 )
console.log(newNumber);











        
        // uper waly ko is trhan bi likha ja skta hai...is waly main hamain return keyword use krna pry ga.
const Number = [10, 20, 30, 40, 50, 60, 70, 80]

const newNum = Number.filter( (item) => {
    return item > 30
})

console.log(newNum);










        // i itself create...push on mind.
const spaling = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const newspaling = spaling.filter( (item) => item > 'c')

console.log(newspaling);










        // this is amazing....array main object declare kia and person ki history put ki...then filter calling arow function apply kia then aik condition apply ki female data ki....agy hum yehi sekhain gy database sy call kia and kisi bi person ki history check ki. 

const person = [
    {
        Name: "ahmad shafiq", age: 22, gender: "male", location: "pakistan",
    },
    {
        Name: "fahad shafiq", age: 33, gender: "male", location: "india",
    },
    {
        Name: "iqra shafiq", age: 35, gender: "female", location: "united state of america",
    },
    {
        Name: "roqaia", age: 20, gender: "female", location: "germany",
    },
]

const historyperson = person.filter( (item) => item.gender === "female")
console.log(historyperson);










        // mtlb jo book 1950 ko publish hoi hai...mujhy uska data chahiyeh....yeh pury array ke object main check kry aga ke 1950 publish books ka data la kr do. 
const books = [
    {
        bookone: "misterchips", author: "hitman", publish: 1996, addition:  2020, 
    },
    {
        bookdtow: "mistergalaleo", author: "philips", publish: 1990, addition: 2012
    },
    {
        bookthree: "misterhooks", author: "williomson", publish: 1970, addition: 2022
    },
    {
        bookfour: "misterharray", author: "maxiwell", publish: 1950, addition: 2024
    }
]

        // you know this filter mehtod and calling arow function.
const newbooks = books.filter( (history) => history.publish == 1950)
console.log(newbooks);

        // return apply kia,
const userbooks = books.filter( (item) => {
    return item.addition >= 2015 
})

console.log(userbooks);


















            // <-----map----->
          
         // yeh for-each loop sy best hai...map hur value ke pas jay ga or us main 10 add krdy ga...
    const yourNum = [0, 2, 4, 3, 7, 5, 6, 8]

    const New = yourNum.map( (item) => item + 10)
    console.log(New);









    const aaa = [2, 4, 3, 6, 7, 8]

    const newaaa = aaa.map( (num) => num * 10 / 2 )
    console.log(newaaa);
    







        // i itself creat....hur num ka 2 sy % lia jo bacha us main 2 add kr dia.
    const eee = [0, 3, 2, 5, 7, 9]

    const ddd = eee.map( (num) => {
        return num % 2 + 2
    })

    console.log(ddd);
    







        // isy kahty han chaining....jitny merzi map lgao and filter bi lga skty ho...amazing...phly aik number declare kia...phr us number ko new variable main store kia...phr map lgaya or hur number ko 10 sy multiply kia...phr jo result aya usk hur number main 2 add kia...phr jo result aya filter lgaya or kaha mujhy 50 sy bari vlaue chahiye.
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNUMBERS = NUMBERS
                    .map( (item) => item * 10)   // phly hur number 10 sy multiply hoga.
                    .map( (item) => item + 2)   // phr jo result aya usk hur number main 2 add ho jay ga.
                    .filter( (item) => item >= 50) // phr filter lga kr kaha mujhy 50 sy bry number chahiyeh.

console.log(newNUMBERS);






const bbb = [10, 20, 30, 40, 50, 50, 60, 70]
const ccc = ddd
                .map( (char) => char * 2)
                .map( (char) => char * 10 / 2 )
                .filter( (char) => char > 20)

console.log(ccc);














    // <-------reduce------>

    // this is reduce method hum isy kafi bar use krain gy...is main accumilator and current_value hoti hai...accumilator ka mtlb hamari merzi hum accumilator ko jahan merzi sy start kerwayn...like 0 sy 10 sy 15 sy 100 sy jahan sy apka dil kry kerwayn...and current_value ka mtlb hamary array ka first digit...yeh kam is trhan kry ga ke phly accumilator plus array ka first digit...jo result aya woh accumilator bun jay ga...agian accumilator plur array ka second digit...yeh isi trhan chalta rahy ga...

const ttt  = [1, 2, 3]

const mytotal = ttt.reduce(function (accumilator, current_value) {
    console.log((`accumilator:- ${accumilator}, and current_value:- ${current_value}`));
    return accumilator + current_value
    
}, 0)

console.log(mytotal);



    




const uuu = [10, 20, 30, 40]

const iii = uuu.reduce(function(acc, curvalue) {
    console.log(acc, curvalue );
    
    return acc + curvalue
}, 0)

console.log(iii);








        // is pr reduce method apply kia simple calling functon ke saht...

const ooo = [5, 6, 7, 8]


const ppp = ooo.reduce( function(initial_value, current_value) {
    console.log(`initialvalue:- ${initial_value} and currentvalue:- ${current_value}`);
    
    return initial_value + current_value
}, 3)

console.log(ppp);





    //  phly aik array declare kia...phr is pr reduce method apply kia...accumilator ko kaha 5 sy start ho.... 5 plus 1 = 6 ab accumilator 6 bun jay ga....and 6 plus 3 = 9 ab accumilator 9 bun jay ga...and 9 plus 5 = 14 ab accumilator 14 bun jay ga...and soo on...yeh isi trhan kam krta hai. 

console.log("ahmad shafiq");


const MyArray  = [1, 3, 5, 7, 9]

const reduce_method = MyArray.reduce( (acc, curvalue) => {
    return acc + curvalue
}, 5)


console.log(reduce_method);














        // push on mind.
const shopingCart = [
    {
        courseName: "web decelopment course",
        price: 3000,
    },
    {
        couseName: "app develoment course",
        price: 5000,
    },
    {
        courseName: "data scientist course",
        price: 7000
    },
    {
        courseName: "artifical intelegence",
        price: 9000
    }
]


const priceToPay = shopingCart.reduce( (acc, value) => acc+ value.price, 0)

console.log(priceToPay);











const yyy = ["hafiz", "shafiz", "ahmad"]

const zzz = yyy.reduce( (acc, curr) => acc + curr)

console.log(zzz);






const nnn = [100, 200, 300, 400]


const vvv = nnn.reduce( (acc, curvlue) => {
    console.log(`accumilator:- ${acc} and current_value:- ${curvlue}`);
    return acc + curvlue
}, 100)

console.log(vvv);
