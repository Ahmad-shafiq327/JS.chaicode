//---------> DSA series

let num = 3

if(num > 0 && num <= 5) {
    console.log("possitive number");
    
}

else if(num === 0) {
    console.log("number are equal zero");
    
}

else {
    console.log("not find number");
    
}
















for(let i = 0; i<= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
        
    }
}




let friuts = ["apple", "bnana", "mango"]

console.log(friuts[2]);
console.log(friuts[0][4]);
console.log(friuts.push('ahmad'));
console.log(friuts.unshift());



console.log("break");




let arr = [1, 4, 2, 3, 5]

let sum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(sum);


console.log("break");







let array = ["cat", "dog", "elephant", "cow"]


let len = array[2].length
console.log(len, "lenght of index at 2");




let Array1 = ["ahmad", "haseeb", "ubaid", "fahad", "nouman"]

let check = Array1.includes('ahmad') // true
let check2 = Array1.includes("Pakistan") // false
let check3 = Array1.includes("fahad") // true
console.log(`${check}, ${check2}, ${check3}`);







console.log("break");












let str = "Ahmad"

let checklen = str.length

console.log(checklen); // 5










let Str = "hellow world"

let converttoUpercase = Str.toUpperCase()
console.log(converttoUpercase); // HELLO WORLD






let strrr = "OperAI ChatGpt"

let get = strrr.includes("Gpt") // true
console.log(get);






let str2 = "Ahmad"

let breaking = str2.split("")
console.log(breaking); // [ 'A', 'h', 'm', 'a', 'd' ]






function great(myname) {
    console.log("hello " + myname + "!");
    
}
great("Ahmad")








function addnumber(x, y) {
    return x + y

}

let result = addnumber(5, 8)
console.log(result); // 13






function minusTwoNumber(a, b) {
    return a - b

}

let Result = minusTwoNumber(10, 5)
console.log(Result); // 5








function divion(c, d) {

    return c / d
}

let anser = divion(9, 3)
console.log(anser); // 3






function CheckEvenOrOdd(n) {
    if(n % 2 === 0) {
        console.log("Even Nubmer");
        
    }
    else{
        console.log("odd Number");
        
    }
}

CheckEvenOrOdd(9) // odd number





















let numbers = [2, 4, 6, 8, 10, 12]

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}


console.log(linearSearch(numbers, 8));

// this is important.........loop ko me ne 0 sy isi liyeh start kia q ke array hamaisha zero sy start hoty han....agr me loop ko 1 sy start kron or target 2 rakhon tw phr mujhy return -1 hoga...q ke 2 number array ke first index pr hai... or loop me ne second index sy start ki hai isi liyeh mujhy mera target ni mily ga.




















let arr2 = [10, 20, 30, 40, 50]

function searchLinear(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
} 

console.log(searchLinear(arr2, 10)); // answer -1

// return -1.....because me ne lopp ko 1 sy start kr dia....or target 10 put kia....10 target array ke 0 index pr mojod hai.....but me ne loop ko 1 sy start kia hai...isi liyeh target find ni houa......agr me loop ko 1 sy start krta phr mujhy target 0 index pr mil jata.





console.log("javascript");









let ARR = [11, 22, 33, 44, 55]

function lenghthArr(arr, target) {
    for(let i = 2; i <arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(lenghthArr(ARR, 44));






function generateOtp(num) {
    let otp = ""
    for(let i = 0; i < num; i++) {
        otp = otp + Math.floor(Math.random() * 10 + 1) // plus 1 add krny sy start main zero kabi bi ni ay ga.
    }
    return otp
}

let getotp = generateOtp(6)
console.log(getotp);










let c;
let d;

for(c = 1; c < 6; c++) {
    let star = ""
    for(d = 6; d > c; d--) {
        star = star + "*"
    }
    console.log(star);   
}







let sortedArray = [2, 4, 6, 8, 10, 12, 14]

let start = 0
let end = arr.length - 1

let mid = Math.floor((start + end) / 2)
console.log(mid);



