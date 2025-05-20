let inputs = document.getElementById('inp')

let text = document.querySelector('.text')

function add() {
    if(inputs.value === "") {
        alert("please Enter task")
    }
    else{
        let ul = document.createElement('ul')
        ul.innerHTML = inputs.value
        text.appendChild(ul)
        inputs.value = ""

        let dltBtn = document.createElement('button')
        dltBtn.innerText = "delete"
        ul.appendChild(dltBtn)

        dltBtn.onclick() = function() {
            ul.remove()
           
        }


    }


}








// else {
//     let newEle = document.createElement('ul')
//     newEle.innerHTML = `${inputs.value} <button id"dltBtn"> Delete`
//     text.appendChild(newEle)
//     inputs.value = ""
// }







