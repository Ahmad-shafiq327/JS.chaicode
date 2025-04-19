// const ki value change ni hoti....but let ki value change hoti hai.
let boxes = document.querySelectorAll(".box")
let boddy = document.querySelector("body")
let ResetBtn = document.querySelector("#reset-game")
let newgame = document.querySelector('New-game')
let winner = document.querySelector('msg-container')
let msg = document.querySelector('#msg')

// is game main by-default pattern ko pta hia ke phly X palayer ki bari hai and phr O player ki.

let turnO = true; // playerX , playerO 

const winPatterns = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 6],

];



boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        
        if(turnO === true) {
            box.innerHTML = 'O'
            turnO = false
        }
        else {
            box.innerHTML = 'X'
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
})


    const disableboxes = () => {

        for(let item of boxes) {
            item.disabled = true

        }
    }


    const showWinner = (winner) => {
        msg.innerHTML = `congradulation, Winner is ${winner}`;
        msg-container.classList.remove("hide")
        disableboxes();
    }





 // this is arrow function jiska name checkwinner hai.
const checkWinner = () => {
    for(let ele of winPatterns) {
        
        let pos1Val = boxes[ele[0]].innerHTML
        let pos2Val = boxes[ele[1]].innerHTML
        let pos3Val = boxes[ele[2]].innerHTML

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val)

                
            }
        }
}
}
// checkWinner()---->	// Ek function hai jo check karega kisi player ne jeeta ya nahi.
// for(let ele of winPatterns)---->	// Har winning pattern ko ek ek karke check karta hai.
// console.log(ele[0], ele[1], ele[2])----->	// Woh teen positions print karta hai jo current pattern mein hain.
// console.log(boxes[ele[0]].innerText, boxes[ele[1]].innerText, boxes[ele[2]].innerText);---->	Un boxes ke andar kya likha hai (X, O, ya blank), woh print karta hai.



