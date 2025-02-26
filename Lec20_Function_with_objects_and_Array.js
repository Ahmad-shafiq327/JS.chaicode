// // //                           Lec20_Function_with_objects_and_Array









                  // yeh tw achi trhan sy janta hai...phly aik function bnaya usko parameter main num1 dia...then return num1.....then function ko call ki arguments ko 10 value di...and print kerwa dia...result 10.

function calculate_cart_price(num1) {
    return num1

}

console.log(calculate_cart_price(10));      // result 10
























                    // yahan pr is three dot ka matlab rest hai....mtlb sari valu ko aik bundle main pack kro or mujhy dedo.
function total_price(...price) {
    return price 
    
}
console.log(total_price(200, 454, 780, 600, 999));        // result [200, 454, 780] yeh array ki sorat main aya hai......hum arguments main jitny merzi chahain arguments pass krain...agy ja kr loop lga kr iska total nikalain gy.


















                    // this is object.....hamain object main chezain dehan sy put krni hai....and typscript ka bi dehan krna hai...jaisa ke prices object ke backand main available ni hai.

const user = {
    usrname: "ahmad shafiq",
    price: 44,              // agr me prices likhta tw yeh kam ni krta....q ke typescript ka dehan rakhna parta hai.
}

                         // this is function

function handle_object(anyobject) {
        console.log(`username is ${anyobject.usrname} and price is ${anyobject.price}`);
        

}

handle_object(user)
handle_object({             // print woh hoga jo ap object main likhain gy....isi liyeh yeh wala object print houa...na ke uper wala jo object me ne declare kia tha.
   usrname: "hafiz Ahmad Shafiq",
   price: 1000,
})


       // this is option method....ap isko direct object bna kr bi pass kr skty thy....zarori ni ke phly apny uper object declare kia phr nechy fuctino ko call krty waqt object ko axcess kia.....but jo pako easy lgy ap woh krain.....mujhy yeh wala easy lga---------> handle_object(user)








                        // this is easy dimag pr zoor dy.

function my_name_age(my_Name, my_age) {
    console.log("my name is:", my_Name, "my age is: ", my_age);
    
    

}

my_name_age("ahmad", 44)








                      // this is easy dimag pr zoor de.

function twoNumber(plus, minus){
    return plus / minus 
}
    


console.log(twoNumber(10, 2));




















                        // isko achi trhan samajhly...phly me ne aik object declare kia and us main student ki information enter ki.........then nechy me ne aik function bnaya....function ko parameter dia------->student_data and console main backteck use kia and student_data ko axcess krny ke liyeh function ka parameter and dot likhny pr object target hoga....isi tarhan ap jo merzi axcess kr skty han object main sy....end main jb function ko call ki tw usk arguments main object ka declare likha.
                        
const info_student = {
    name: "Ahmad shafiq",
    rollNumber: 71,
    class: "Graduation",
    location: "pakistna"

}

function history_student(student_data) {
    console.log(`my name is ${student_data.name} and rull number is ${student_data.rollNumber} and clall ${student_data.class} and location ${student_data.location}`);
    
}

history_student(info_student)



























                        // this is easy dimag pr zoor dy.
const arr_object = {
    Name: "Hafiz Ahmad Shafiq",
    RollNumber: 425548,
    subject: ["math", "english", "computer", "chemistry"],
    userAvailable: true,
}


function Student(my_data){
    console.log(`my Name ${my_data.Name} Roll-Number ${my_data.RollNumber} subject ${my_data.subject} studne are available ${my_data.userAvailable}`);
    

}

Student(arr_object)



















                           // this is also easy i itselt creat
let pepsi_company = {
    name: "jahangeer khan tareen",
    age: 70,
    son: "Ali khan Tareen",
    location: "Lodhran",

}

function info_jksm(information_company){
    console.log(`now owner of pepsi company ${information_company.name} and age is ${information_company.age} only one son ${information_company.son} living in ${information_company.location}`);
    
}

info_jksm(pepsi_company)


























                        // this is easy is main humny array lia...zarori ni ke hum is main sirf object lain...hum is main kuch bi le skty han...jaisa ke ma ne idher array lia hai.
const newArray = [100, 200, 300, 400]

function targetArray(getAarray){
    return getAarray[2]             // result 300
}

console.log(targetArray(newArray))


                                // phly humny uper aik array declare kia...phr nechy aik function bnaya...function main array ke second index pr value ko target kia...end main function ko call ki or print kerwaya...agr hum function main return likhain gy tw....end main function ko call krty waqt sath main console bi likhana pry ga.



















                            // yeh bi aik tareeka hai.

function target_string(getString){
    return getString[0]
}

console.log(target_string(["Ahmad", "Fahad", "Mother", "Father"]));



























                       // dimag pr zoor dy yeh me ne khud creat kia hai.
const My_object = {
    UserName: "Ahmad shafiq",
    Email: "mahmadshafiq@gmail.com",
    password: 425568,
    location: "pakistan",

}

function checkUser(loggedIn){
    if(loggedIn == "Ahmad shafiq")
        console.log("welcome Ahmad shafiq");
    else{
        console.log("please loggedin");
        
    }
               
}
checkUser(My_objecty_object.location)








































const my_object = {
    name: "ahmad shafiq",
    roll: "232323",
    subject: ["englihs", "urdu", "islamiyat"]
}




