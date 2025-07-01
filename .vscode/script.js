console.log("javascript");


function generateOtp(num) {
    let otp = ""
    for(i = 0; i < num; i++) {
        otp = otp + Math.floor(Math.random() * 10)
    }
    return otp
}


let result = generateOtp(6)
console.log(result);



let isLoggedIn = true

let message = isLoggedIn ? "wellcome" : "try again"

console.log(message);







let score = 13;

let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"

console.log(grade);







console.log("javascript");












let tag = document.getElementById('anchertag')


console.log(tag.setAttribute('id', 'aaaaaaaa'))

console.log(tag.getAttribute('id'));

// borwser main run hota hai...

// jis id ko setattribute kro gy...phr usi id ko getattribute bi kro gy tb ja kr browser main value change nazar ayi gi...verna ni

