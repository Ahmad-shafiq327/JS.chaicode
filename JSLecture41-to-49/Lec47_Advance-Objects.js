// objects detail in javascript

// console.log("objects in javascript and math");


// Object.getOwnPropertyDescriptor(Math)  
// ajsy kai sal phly object pr loop ni lag rhi thi...phr is pr research ki isko achy sy study kia...phr pta chala isk ander ki aik property disable ho gyi hai is wajasy object pr loop ni lag rhi.

// hetaish sir ne interviw lia or question pocah ke mujy pi ki value ko 4 bnana hai...us lerky ne mujy kr ke dekha dia...me ne kaha isy select krlo...is in depth bht knowledge hai.

// math actually mai woh ki ni jis ki value arhi hai....pi apki property ka name hai or uski value hai 3.1415

// object pr for-of loop lgani chahiyeh.

// getOwnPropertyDescriptor ka matlb hai...property ka descriptor.



const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);



// pi ki vlaue.
console.log(Math.PI);
Math.PI = 5

// output main value 3.1415 hi ayi hai...and writeable: flase, enumerable: false, configuralble: false, mtlb javascript ke core engine main isko bnaty waqt c++ language main bht sakht condition lgayi hoi hia...ke hum usk ander kuch bi change ni kr skty.





const chai = {
    name: "ginger chai",
    price: '250',
    isavailable: true,
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// iska mtlb hai property ka descriptor.
for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key}:- ${value}`);
        
    }
}

// Object.entries yeh aik method hai agr me yeh ni likhon ga tw object ki key and value axcess ni hongi.














// output yeh ayi hai.

// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }


// hetiash sir ne isko descriptor property ko change kia hai.




// hetaish sir ne yeh topic kafi indepth parhaya hai.










// yeh is topic ka hissa ni hai....yeh youtube sy dekh kr likha hai.
function getOTP() {
    let otp = '';

    for(let i = 0; i < 6; i++) {
        otp = otp + Math.floor(Math.random() * 10)
    }
    return otp 
}

const otp = getOTP()
console.log(`OTP is:- ${otp}`);
