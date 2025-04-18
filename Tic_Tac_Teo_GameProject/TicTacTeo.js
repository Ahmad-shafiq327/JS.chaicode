// const ki value change ni hoti....but let ki value change hoti hai.
const boxes = document.querySelectorAll(".box")
const boddy = document.querySelector("body")
const ResetBtn = document.querySelector("#reset-btn")


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
        if(turnO === true) {
            box.innerHTML = 'O'
            turnO = false
        }
        else {
            box.innerHTML = 'X'
            turnO = true
        }
        box.disabled = true
    })
})

