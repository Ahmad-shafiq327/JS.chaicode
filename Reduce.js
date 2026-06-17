// 17-06-26 Wednesday 9-30PM


// Reduce javascript ka importan and thora mushkil method hai.
// reduce() array ke tamam elements ko aik single value main convert kr deta hai.





const num = [1, 2, 3, 4, 5]
const result = num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 10)

console.log(result);




// phly 1 array declare kia...us pr reduce() method apply kia.....accumulator ka mtlb jo value hum dependency main put krain and currentVlaue ka mtlb array ka 1st digit....phly accu + curr 2 + 2 = 4...ab acc ki value 4 ho jay gi acc + curr 4 + 4 = 8 ab acc ki value 8 ho jay gi... acc + curr 8 + 6 = 14 ab acc ki value 14 ho jay gi....acc + curr 14 + 8 = 22.....yeh reduce mehtod isi trhan kam krta hai.
const nmber = [2, 4, 6, 8]
const acha = nmber.reduce((acc, curr) => {
    return acc + curr
}, 2)

console.log(acha);



