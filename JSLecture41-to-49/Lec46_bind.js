// bind in javascript


// woh html file hai...us main button tag lgaya houa hai....button click hony pr kuch action hoga.

// yeh lecture DOM ke hisab sy important hai.




// button click krny pr browser ke console main pura node list print ho raha hai.

// 
class React {
    constructor() {
        this.library = "library"
        this.server = "htpps://localhost:200"

        document.querySelector('#btn1')
        .addEventListener('click', this.handleClick.bind(this))

    }

    handleClick() {
        console.log("button clicked");
        console.log(this);
        
    }


}

const app =  new React()










// i itself creat...phly aik class bnai phr cunsturctor method likha phr this mehtod main data put kia....phr queryslector sy button ko slect kia...and us pr click lgaya...phr us pr handleclick lgaya this ke sath...phr handleclik ka aik functin bnaya us main console lgaya...phr is class sy bahir aik new variable bna kr us main new keyword likha and class sy connet kai.
class aaa {
    constructor() {
        this.name = "ahmad"
        this.email = "ahmad@gmail.com"
        this.password = '4255'


        document.querySelector('#btn2').addEventListener('click', this.handleClick.bind(this))


    }

    handleClick() {
        console.log("btn2 was clcked");
        console.log(this.email);
        console.log(this);
        
    }

}

const app2 = new aaa()














// i itself creat push on mind
class bbb {
    constructor() {
        this.username = "ahmad shafiq"
        this.location = "pakistan"
        this.subject = "computer"


        document.querySelector('#btn3').addEventListener('click', this.btn3ftn.bind(this))

    }

    btn3ftn() {
        console.log("btn3 was clicked");
        console.log(this.subject);
        console.log(this.location);
        console.log(this);
        
    }

}

const app3 = new bbb()




// yeh lecture DOM ke lihaz sy important hai....jaisa ke class constructor and this vaghaira.

// i itselft creat....button click krny pr body ka background color change kr dia.
let bodyy = document.querySelector('body')
const color = document.querySelector('#btn4')

color.addEventListener("click", () =>{
    bodyy.style.backgroundColor = 'pink'
})




