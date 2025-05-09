let intervalId = null


function displayTime() {
    let time = new Date()
    let timeNow = time.toLocaleTimeString()
    document.getElementById('time').textContent = timeNow

}

function startclock() {
    displayTime()
    intervalId = setInterval(displayTime,1000)
}

function stopclock() {
    clearInterval(intervalId)
    intervalId = null

}

function resetclock() {
    stopclock()
    document.getElementById('time').textContent = "00: 00: 00"
}



