// generate a random color 


const randomColor = function() {
    const hexValue = "0123456789ABCDEF"
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random() * 16)];

    }
    return color;
}


const startChangingColor = function() {
    intervalId = setInterval(changebgcolor, 1000)
}

function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
}

document.querySelector('#start').addEventListener('click', startChangingColor)





let intervalId;

const stopChangingColor =  function() {
    clearInterval(intervalId);

}


document.querySelector('#stop').addEventListener('click', stopChangingColor);