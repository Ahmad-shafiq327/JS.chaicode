let display = document.getElementById('display')


function appendToDisplay(value) {
    display.value = display.value + value

}


function clearDisplay() {
    display.value = ""
}


function deledigit() {
    display.value = display.value.slice(0, -1)
}


function calculateResult() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "error"
    }
}