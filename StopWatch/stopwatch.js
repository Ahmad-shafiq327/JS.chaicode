let displaytime = document.getElementById('timerDisplay')

let hourse = 0
let minutes = 0
let second = 0
let milisec = 0


let timer = null


function stopwatch() {
    milisec++
    if(milisec === 100) {
        second++
        milisec = 0
        if(second === 60) {
            minutes++
            second = 0
            if(minutes === 60) {
                hourse++
                minutes = 0
            }
        }
        
    }

    let h = hourse < 10 ? "0" + hourse : hourse
    let m = minutes < 10 ? "0" + minutes :  minutes
    let s = second < 10 ? "0" + second : second
    let mise = milisec < 10 ? "0" + milisec : milisec


    displaytime.innerText = `${h}: ${m}: ${s}: ${mise}`


}



function start() {
    stopwatch()
    timer = setInterval(stopwatch, 10)
}


function stop() {
    clearInterval(timer)
}


function reset() {
    stop()
    displaytime.innerText = "00: 00: 00: 00"
    timer = null
}