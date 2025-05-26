let boxes = document.querySelectorAll('.box')
let msgContianer = document.getElementById('msg-container')
let msgPara = document.getElementById('msg')
let NewGameBtn = document.getElementById('new_game')
let resetgamebtn = document.getElementById('reset_game')
let bodyy = document.querySelector('body')


let turnO = true
let count = 0


const WinnPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if(turnO === true) {
      box.innerHTML = "O"
      turnO = false
    }
    else {
      box.innerHTML = "X"
      turnO = true
    }
    box.disabled = true
    count++

    let isWinner = checkWinner()

    if(count === 9 && !isWinner) {
      gameDraw()
    }


  })
})




const gameDraw = () => {

  msgPara.innerText = "Game was  draw"
  msgContianer.classList.remove('hide')
  disableBoxes()

}


const disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = true
  }

}




const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false
    box.innerText = ""
  }
}




const showWinner = (Winner) => {
  msgPara.innerText = `congragulaton winner is ${Winner}`
  msgContianer.classList.remove('hide')
  disableBoxes()
}



const checkWinner = () => {
  for(let pattern of WinnPatterns) {
    let pos1Value = boxes[pattern[0]].innerText
    let pos2Value = boxes[pattern[1]].innerText
    let pos3Value = boxes[pattern[2]].innerText


    if(pos1Value != "" && pos2Value != "" && pos3Value != "")  {
      if(pos1Value === pos2Value && pos2Value === pos3Value) {
        showWinner(pos3Value)
        return true
      }
    }
  }
}



NewGameBtn.addEventListener('click', function() {
  enableBoxes()
})

resetgamebtn.addEventListener('click', function() {
  enableBoxes()
})

