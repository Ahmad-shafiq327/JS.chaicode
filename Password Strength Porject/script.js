let inputs = document.getElementById('pasword')
let submitbtn = document.getElementById('submit')
let strength = document.getElementById('p')



inputs.addEventListener('input', () => {
    if(inputs.value.length < 4) {
        inputs.style.borderColor = 'red'
        strength.style.display = "block"
        strength.innerHTML = "Weak Password"
        strength.style.color = "red"
        strength.style.fontSize = "35px"
        strength.style.marginRight = '50px'

    }
    else if(inputs.value.length > 5 && inputs.value.length <= 6) {
        inputs.style.borderColor = "yellow"
        strength.innerHTML = "Medium Password"
        strength.style.color = "yellow"
    }

    else if(inputs.value.length >= 8 && inputs.value.length < 10) {
        inputs.style.borderColor = "green"
        strength.innerHTML = "Strong Password"
        strength.style.color = "green"
    }

    else if(inputs.value.length > 10) {
        inputs.style.borderColor = "blue"
        inputs.disabled = true
        strength.innerHTML = "Enough Password"

    }


})



submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("form submited without loaded");
    
})




