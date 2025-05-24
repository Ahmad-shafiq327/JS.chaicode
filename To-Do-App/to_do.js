let inputs = document.getElementById('inp')
let orderlist = document.getElementById('olist')



function add() {
    if(inputs.value === "") {
        alert("please Enter task")
    }

    else{
        // i itself creat
        let list = document.createElement('li')
        list.innerText = inputs.value
        orderlist.appendChild(list)
        orderlist.style.fontSize = "25px"
        orderlist.style.backgroundColor = "green"
        inputs.value = ""
        creatbtn()
        
     
        // creat function name of creatbtn...function call upper
        function creatbtn() {
            let dltBtn = document.createElement('button')
            dltBtn.innerText = "Delete"
            orderlist.appendChild(dltBtn)
            dltBtn.style.backgroundColor = "red"
            dltBtn.style.fontSize = "15px"
            dltBtn.style.fontWeight = "bold"
            dltBtn.style.cursor = "pointer"

            dltBtn.addEventListener('click', () => {
                list.remove()
                dltBtn.remove()
            })



        }



        







      





    }




}






// then creatlist...phr us list ke text ko wohi value di jo inputs main likhi jay gi...phr usi list ko order list ke ander dal kr display kerwaya...phr aik task likhny ke bad inputs khali ho jay....phr delete ke name sy aik button creat kia...phr us button ko orderlist ke ander display kerwaya....phr button click krny pr orderlist ko remove kia....and sath hi button ko bi remove kerwaya........and is main styling bi ki.