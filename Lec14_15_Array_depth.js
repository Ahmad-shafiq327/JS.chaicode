//        // lecture 14 and 15 Arrays in depth.
       
       
       
//        // Array--------> Array is an object and javascript array are resizeable......array is a collection of items include different data type.
//         // array zero based index.



// let arr = [0, 1, 2, 3, 4, 5]     // print as it is.
// console.log(arr)
// console.log(typeof arr);      // result object.
// console.log(arr[3])          // index start from zero.








// const myArr = [0, 3, 9, 5, 7]
// console.log(myArr)
// console.log(myArr[1])








// const newArr = ["ahmad", "fahad", "ubaid", "haseeb"]        // this is also array.
// console.log(newArr);                        // result as it is.
// console.log(typeof newArr)                  // object.
// console.log(newArr[2])                      // result ubaid.











// const yourArray = [2, 5, 'a', "Ahmad", "fahad", 'p']                // This is also array.
// console.log(yourArray)                      // result as it is.
// console.log(typeof yourArray)               // object.
// console.log(yourArray[5])                   // result p.
// console.log(yourArray.length)               // result 6....array ki length find.









// const Arrays = [0, 1, 2, "ahmad", "Father"]         // declare array
// console.log(Arrays);                        // result as it is.
// console.log(typeof Arrays);                 // object.
// console.log(Arrays[3])                      // result ahmad.
// console.log(Arrays.length)                  // result 5.
// console.log(Arrays.push(10));               // result father ke bad 10 add ho jay ga....mtlb is function sy ap array main kuch bi add kr skty han.
// console.log(Arrays.push("brother"))         // is function ki madad sy me ne array ke last main string add kerwaya.
// console.log(Arrays.pop());                  // pop function.....array main jo bi last value hogi woh khtm ho jay gi.
// console.log(Arrays.unshift(7));             // unshift function......yeh function array ke start main value adda kr dega.
// console.log(Arrays.shift());                // shift function....yeh function array ke start wali value ko remove krdy ga.
// console.log(Arrays.includes("ahmad"))       // result true....includes function....yeh function check kry aga ke arrays main yeh value hai ya ni.
// console.log(Arrays.includes(8))             // result false....because number 8 not exsist in arrays.
// console.log(Arrays.indexOf("Father"))       // result 4.....because father availabe at 4 index.
// console.log(Arrays)







// const myArr = [10, 80, 90, 44, 50, 60]            // declare array.
// console.log("A", myArr)                     // print array.
// console.log(myArr.slice(1, 3));             // result [80, 90]......slice function index 1 and 3 ke dermiyan wali value dega...is main index 3 include ni hoga.



// const newArr = [55, 99, 66, 78, 30]         // as it is oper waly ki trhan.
// console.log("B", newArr);
// console.log(newArr.slice(2, 4));           // result [66, 78]......demag pr zoor dy....index 4 inlude ni hai.







// let myarry2 = ["pakistan", "india", "bangladesh", "china", "japan"]
// console.log("C", myarry2)
// console.log(myarry2.splice(1, 3))    // splice function index 1 sy 3 tk ki value ko new line main print kerwa dega.
// console.log(myarry2)                // result ['pakistan', 'japan'].......origional array sy pakistan and japan skip ho jay ga.





// let minArr = [2, 4, 5, 6]
// console.log(minArr.unshift(1))
// console.log(minArr.shift())

// console.log(minArr)



















//             // Array part 2






// const marval_heros = ["batman", "ironman", "spidarman"]
// const dc_heros = ["imrankhan", "salmankhan", "shahrukhan"]

// marval_heros.push(dc_heros)          // donon array ko ekhata kia hai....marvel_heros main dc_heros ko murge kia hai....pura dc_heros as a one value hai..
// console.log(marval_heros)
// console.log(marval_heros[3])         // result complete dc_heros.....because complete dc_heros one value hai. 
// console.log(marval_heros[2][5])      // result r thora dimag pr zoor dy.....its very easy.





//                         // other example below






// const oneArray = ['a', 'g', 'u', 'p', 't']
// const scndArray = ['10', '20', '35', '40', '50']

// scndArray.push(oneArray)        
// console.log(scndArray)                  
// console.log(scndArray[5])               // result scndArray as it is print ho jay ga....because complete scndArray available at index of 5. 
// console.log(scndArray[2][1]);        // result 5....because me ne scndArray ka 2 index pr scond digit malom kia hai....this thing you already read in c lenguage.



// // me ne scndarray main onearrya push kia hai....onearray pura ka pura as it is push ho jay ga.....push hony ke bad pura array as a one value consider hoga....

















//                         //this is besty way for murge two arrays.

// const my_heros = ['1', '2', '3']
// const your_heros = ['4', '5', '6']
// const all_new_heros = [...my_heros, ...your_heros]          // yeh best function hai...array ko mruge krny ka.
// console.log(all_new_heros)                      // result donon murge ekhaty ho gay han.

















//                         //is saprade function sy ap jitny merzi arrays ko ekhata kr skty han.
// let my_Arrays = ["ahmad", "ali", "father"]
// let yor_Arrays = ["allah", "help", "me"]
// let murge_Arrays = [...my_Arrays, ...yor_Arrays]         // is function ka name saprade hai...iska kam do arrays ko ekhata krna hai....or yeh best function hai.
// console.log(murge_Arrays)  

//                 //reulst ['ahmad', 'ali', 'father', 'allah', 'help, 'me']
                















// let Arrays = [1, 3, 4, [0, 9, 6], 7, [11, 22, 33], 9, 0, [20, 30]]      // declare array ke ander mazeed 3 array.
// let final_Array = Arrays.flat(Infinity)         // is flat function ne array ke ander tamam array ko aik array bna dia.
// console.log(final_Array)                        // result nested array ko aik array bna dia.
































//                         //yeh function ap mosty use krain gy.

// console.log(Array.isArray("Ahmad"));            // phly humny compiler sy pocha kia yeh array hai...result false.....because hum arrays ko square bracket main likhty han.
// console.log(Array.from("Ahmad"))             // from function......ab isny is pury ko array bna dia...['a', 'h', 'm', 'm', 'a', 'd,]
// console.log(Array.from({name: "Hitesh"}))    // result olny square bracket [] this is important....because humny isko btaya ni ke.....keys ko array bnaya hai...ya value ko....yeh function projects main kam ay ga.








//                 //yeh function bi best hai...kisi bi cheez ko array main convert krny ka.

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3))  // result [100, 200, 300]











const array = [0, 1, 2, 3, 4]
console.log(array);
console.log(typeof array);
console.log(array.length);
console.log(array[2]);
console.log(array.push(99))
console.log(array);
console.log(array.push("Ahmad"))
console.log(array)
console.log(array.pop())
console.log(array.push('A'));
console.log(array);
console.log(array.unshift(8));
console.log(array);
console.log(array.shift());
console.log(array);
console.log(array.includes(4));
console.log(array.includes("ahmad"));
console.log(array.slice(1, 3));





// const array = [2,4,5,6]
// console.log(array.shift());
// console.log(array);
// console.log(array.unshift());
// console.log(array);
// console.log(array.push("Hitesh"));
// console.log(array);





// const arr = ["ahmad", "fahad", "ali", "fahter"]
// console.log(arr[3][5]);
// console.log(arr.shift());
// console.log(arr);










// const arr1 = ['a', 'b', 'c', 'd']
// const arr2 = ['10', '20', '30', '40']
// arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[4]);





// const arr1 = ["ahmad", "ali", "ubaid"]
// const arr2 = [0, 1, 2, 3, 4]
// const final_Array = [...arr1, ...arr2]
// console.log(final_Array);





// let arr = [1, 2, 3, [11, 22, 33,[99, 88, 77]]]
// let final_Array = arr.flat(Infinity)
// console.log(final_Array);



// console.log(Array.isArray("ahmad"));            // phly compiler ne check kia ke yeh array hai ya ni.
// console.log(Array.from("paksitans"));           // yeh array ni tha....lakin from function ne isko array bna dia.
// console.log(Array.isArray('bs'));               // compiler ne check kia...yeh array ni hai.
// console.log(Array.isArray(['a', 'b', 'c', 'd']))  // compiler ne check kia.... yeh array hai.





// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));





























