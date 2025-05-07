let btn1 = document.getElementById('btnstop')
let btn2 = document.getElementById('btnstart')
let btn3 = document.getElementById('btnreset')

let tainer = document.getElementById('container')
let boddy = document.querySelector('body')




setInterval(() => {
    let date = new Date()

    btn2.addEventListener('click', function() {
        tainer.innerHTML = date.toLocaleTimeString()
    })
},1000)


