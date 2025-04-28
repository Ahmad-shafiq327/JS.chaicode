let boxex = document.querySelectorAll('.box')
let body = document.querySelector('body')
let btn1 = document.querySelector('#New-game-btn')
let btn2 = document.querySelector('#reset-game-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')


let turn0 = true


const WinnPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],

]

boxex.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0 === true) {
            box.innerText = '0'
            turn0 = false
        }
        else {
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true
    })

})



const checkWinner = () => {
    for(let ele of WinnPatterns) {
        let Pos1Value = boxex[ele[0]].innerText;
        let Pos2Value = boxex[ele[1]].innerText;
        let Pos3Vlaue = boxex[ele[2]].innerText;


        if(Pos1Value !== "" && Pos2Value !== "" && Pos3Vlaue !== "") {
            if(Pos1Value === Pos2Value && Pos2Value === Pos3Vlaue) {
                ShowWinner(Pos1Value);

            }
        }






    }

}







const EnableBoxes = () => {
    for(let box of boxex) {
        box.disabled = false
        turn0 = true
        box.innerText = ""
    }
}


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true
    }
};


const GameDraw = () => {
    msg.innerText = 'game was a Draw'
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const ShowWinner = (Winner) => {
    msg.innerText = `congradulation, Winner is ${Winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}