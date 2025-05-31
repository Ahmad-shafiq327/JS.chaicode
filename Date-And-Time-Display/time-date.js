let contner = document.getElementById('container')


// setiInterval yeh aik method hai...yeh hur aik second bad continuestly chalta rahy ga.
setInterval(() => {
    let date = new Date()

    contner.innerHTML = date.toLocaleString()

}, 1000)


