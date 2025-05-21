let inputs = document.getElementById('inp')
let orderList = document.getElementById('olist')


function add() {

    // check condition
    if(inputs.value === "") {
        alert("please Enter task")
    }

    else {

        let creatList = document.createElement('li')
        creatList.innerText = inputs.value
        orderList.appendChild(creatList)
        inputs.value = ""
        creatList.style.color = "white"
        creatList.style.fontSize = "22px"
        creatList.style.backgroundColor = "blue"
        creatList.style.padding = "3px"
        





        let creatBtn = document.createElement('button')
        creatBtn.innerText = "Delete"
        orderList.append(creatBtn)
        creatBtn.style.color = "white"
        creatBtn.style.backgroundColor = "blue"
        creatBtn.style.fontSize = "15px"



        creatBtn.addEventListener('click', () => {
            orderList.removeChild(creatList)
            orderList.removeChild(creatBtn)

        })

    
    }

   
}






// then creatlist...phr us list ke text ko wohi value di jo inputs main likhi jay gi...phr usi list ko order list ke ander dal kr display kerwaya...phr aik task likhny ke bad inputs khali ho jay....phr delete ke name sy aik button creat kia...phr us button ko orderlist ke ander display kerwaya....phr button click krny pr orderlist ko remove kia....and sath hi button ko bi remove kerwaya........and is main styling bi ki.