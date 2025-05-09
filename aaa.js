let intervalId = null



function displayTime() {
    let time = new Date()
    let timeNow = time.toLocaleTimeString()
    document.getElementById('time').textContent = timeNow
    document.getElementById('time').style.color = 'green'

}

// 
function startclock() {
    displayTime()
    // iska kam hur aik second bad function ko call krna hai.
    intervalId = setInterval(displayTime,1000)
    
}

function stopclock() {
    clearInterval(intervalId)
    intervalId = null
    document.getElementById('time').style.color = 'red'

}

function resetclock() {
    stopclock()
    document.getElementById('time').textContent = "00: 00: 00"
    document.getElementById('time').style.color = 'blue'
}




