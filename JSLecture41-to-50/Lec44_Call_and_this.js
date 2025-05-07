// jb apk pas window object ka axcess hota hai...vahan this refer krta hai window object ko........lakin jb apk pas node enviorment hai us jagah pr windwo ka tw axcess ni hai tw vahan pr empty object ata hai.


// window = {this = window}
// node = {} emply object



// .call method ka mtlb aik function apna data dosry function ko pass krta hai.


// aik function ko dosry function ke ander call krny ke liyeh .call ka use krty ha...mujhy uska variable hold kr ke bi tw rakhna hai...aisy thori na hai ke execution hut gaya tw khtm...mujy return main value bi tw chahiyeh.

function setusername(username) {
    this.username = username
}

function creatUser(username, email, password) {

    setusername(username)
    // yeh technically call ni houa....abi sirf iska reference aya hai.
    setusername.call(this, username)
    // yeh ab call houa hai.

    this.email = email
    this.password = password

}

const secUser = new creatUser("ahmad", "ahmad@gmail.com", "4255")
console.log(secUser);


