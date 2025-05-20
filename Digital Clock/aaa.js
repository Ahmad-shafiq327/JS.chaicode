let intervalId = null



function displayTime() {
    let time = new Date()
    const update = time.toLocaleTimeString()
    document.getElementById('time').textContent = update
}



function startclock() {
    displayTime()
    intervalId = setInterval(displayTime, 1000)
    document.getElementById('time').style.color = 'green'
   
}


function stopclock() {
    clearInterval(intervalId)
    intervalId = null
    document.getElementById('time').style.color = 'red'
}



function resetclock() {
    stopclock()
    document.getElementById('time').textContent = "00: 00: 00"
    document.getElementById('time').style.color = 'aqua'

}


