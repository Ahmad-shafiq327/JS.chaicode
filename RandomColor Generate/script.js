let box = document.getElementById('box')


function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let colors = "#";
    for(let i = 0; i < 6; i++) {
        colors+=
    letters[Math.floor(Math.random() * 16)]
    }
    return colors
}

let IntervalId = true

box.addEventListener('click', () => {
    if(IntervalId === true) {
        const randomColor = generateRandomColor()
        box.style.backgroundColor = randomColor
    }

})


