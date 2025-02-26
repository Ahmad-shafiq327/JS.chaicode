        // Lecture 12 Numbers and Maths.

const score = 400
console.log(score)



const balance = new Number(100)
console.log(balance)






const mySalary = new Number(37000)          
console.log(mySalary)                   // result [Number: 3700] iska result object main aya hai.

console.log(mySalary.toString().length)
console.log(mySalary.toFixed(2))          // result actual value ke bad 2 zero lag jayn gy....37000.00 yeh properties ap mostly E-comerce website main use kro gy.
console.log(mySalary.toFixed(1))          // apki merzi ap jitny merzi zero dekhana chahain.





const otherNumber = 123.9871
console.log(otherNumber.toPrecision(3));        // result 124 isny rount of kr dia...yeh property dehan sy use krni hai...







const hundreds = 1000000
console.log(hundreds.toLocaleString())          // result 1,000,000 yeh commas US standerd ke hisab sy hoty ha.
































                     //<------------->Maths------------>

console.log(Math)       // Math apny ap main aik object hai....nechy waly sub math ke function han....not a property.
console.log(Math.abs(-4));       // result 4.....mtlb sirf -ve value ko +ve kry ga.
console.log(Math.round(4.6))     // result 5.....mtlb value ko round of krdy ga....mostly hum yehi function use krain gy.
console.log(Math.ceil(7.5))     // result 8.....mtlb thori si bi value 7 sy zayada hogi...yeh value ko round of krdy ga. 
console.log(Math.floor(5.9))   // result 5....floor mtlb nechy wali value....yeh function value ko round of ni kry ga.
console.log(Math.min(5, 6, 3, 7));       // result 3....excess minimum value.
console.log(Math.max(3, 9, 1, 5, 6));    // result 9....axcess maximum value.
console.log(Math.random());     // iski value hamaisha zero sy one ke beach main hi ayi gi...but kabi zero bi ho skti hai.




console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);






const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // result between 10 to 20...hur bar run krny pr hur bar iska result change hoga.
console.log((max - min + 1) + min);
 








