const main = document.querySelectorAll('.maincontainer')

const body = document.querySelector("body")

main.forEach(function(item) {
    item.addEventListener('click', function(element) {
        if(element.target.id === "blue") {
            body.style.backgroundColor = element.target.id
        }

        if(element.target.id === "green") {
            body.style.backgroundColor = "green"
        }
        
        if(element.target.id === "red") {
            body.style.backgroundColor = element.target.id
        }

        if(element.target.id === "grey") {
            body.style.backgroundColor = "grey"
        }
    })
})


