let DisplayInputs = document.getElementById('display')





function CalculateResult(value) {
    try {
        DisplayInputs.value = eval(DisplayInputs.value).toFixed(2)
    }
    catch(error) {
        DisplayInputs.value = "Error"
    }
}


function cleardisplay() {
    DisplayInputs.value = ""
}

// .toFixed(2) ka mtlb hai ishariya ke bad sirf 2 digit dekhay ga