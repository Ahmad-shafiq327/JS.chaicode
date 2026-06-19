// 17-06-26 Wednesday 9-30PM


// Reduce javascript ka importan and thora mushkil method hai.
// reduce() array ke tamam elements ko aik single value main convert kr deta hai.





const num = [1, 2, 3, 4, 5]
const result = num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 10)

console.log(result); [25]




// phly 1 array declare kia...us pr reduce() method apply kia.....accumulator ka mtlb jo value hum dependency main put krain and currentVlaue ka mtlb array ka 1st digit....phly accu + curr 2 + 2 = 4...ab acc ki value 4 ho jay gi acc + curr 4 + 4 = 8 ab acc ki value 8 ho jay gi... acc + curr 8 + 6 = 14 ab acc ki value 14 ho jay gi....acc + curr 14 + 8 = 22.....yeh reduce mehtod isi trhan kam krta hai.
const nmber = [2, 4, 6, 8]
const acha = nmber.reduce((acc, curr) => {
    return acc + curr
}, 2)

console.log(acha); [22]




// iska anwer zero ay ga q ke acc zero hai...0 ko curr sy multiply krny sy anser 0 ata jay ga.
const Num = [2, 4, 6, 8]
const check = Num.reduce((acc, curr) => {
    return acc * curr
}, 0) 
console.log(check); [0]






// phly acc 2 hai and curr 1 hai...... acc * curr...2 ko multiply kia curr sy mtlb 2 * 1 = 2    ab acc ki value 2 ho gyi and curr ki value 3...... acc * curr   2 * 3 = 6    ab acc ki value 6 ho gyi and curr ki vlaue 5    acc * curr 6 * 5 = 30..... yeh process isi trhan chalta rahy ga.
const aaa = [1, 3, 5, 7]
const bbb = aaa.reduce((acc, curr) => {
    return acc * curr
}, 2)

console.log(bbb);






// reduce method ne pury array ko aik single value main convert kr dia...hum call back function ke ander accumulator and currentValue ki jagah kuch bi likh skty han....accumulator woh value hoti hai jo hum dependency main put krty hain. 
const acc = [1, 2, 3, 4, 5]
const Check = acc.reduce((bb, cc) => {
    return bb + cc
}, )

console.log(Check); // [15]
