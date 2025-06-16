let paragraph = document.getElementById('para')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let reset = document.getElementById('reset')


let count = 0

plus.addEventListener('click', () => {
    if(count === 0) {
        paragraph.innerText++
        paragraph.style.color = 'green'
    }
    
})


minus.addEventListener('click', () => {
    if(count++) {
        paragraph.innerHTML--
        paragraph.style.color = 'red'
    }
})


reset.addEventListener('click', () => {
    paragraph.innerText = "0"
    paragraph.style.color = 'black'
})















let plus2 = document.getElementById('plus2')
let Stop = document.getElementById('stop')
let reset2 = document.getElementById('reset2')
let para2 = document.getElementById('para2')


let intrvl = null;

plus2.addEventListener('click', () => {
    intrvl = setInterval(() => {
        para2.innerText++
        para2.style.color = 'green'
        },1000)
    plus2.disabled = true
})

Stop.addEventListener('click', () => {
    clearInterval(intrvl);
    para2.style.color = 'red'
    plus2.disabled = false;
})


reset2.addEventListener('click', () => {
    para2.innerText = "0"
    plus2.disabled = false;
    para2.style.color = 'blue'
})