// axcess of inputs name from display
let display = document.getElementById('display')

// button click krny pr inputs main numbers ko display kia.
function appendToDisplay(value) {
    display.value = display.value + value

}

// apply eval method & need last five digits after ishariya.
function CalculateResult() {
    try { // calculate DMAS and everything
        display.value = eval(display.value).toFixed(2)


    } // error catch from buttons & display in inputs.
    catch(error) {
        display.value = "Error"
    }
}

// Empty inputs...at click A/C
function cleardisplay() {
    display.value = ""
}


// remove last digit of inuputs
function DeleteDigit() {
    // remove last digits from inputs.
    display.value = display.value.slice(0, -1)
    }

    