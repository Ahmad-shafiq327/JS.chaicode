let display = document.getElementById('display')


function appendToDisplay(value) {
    display.value = display.value + value
}

function cleardisplay() {
    display.value = ""
}


function DeleteDigit() {
    display.value = display.value.slice(0, -1)
}


function CalculateResult() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}

