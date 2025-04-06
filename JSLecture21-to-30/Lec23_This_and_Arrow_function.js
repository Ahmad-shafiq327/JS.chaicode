//-------------> Lec23 this and Arrow Function

            // interview question------>browser ke ander jo global object hai...woh hai window object.


// This function current contex ko refer krta hia...



const my_object = {
    name: "Ahmad shafiq",
    email: "mahmadshafqi@gmail.com",
    password: 1313304,


    wellcome: function() {
        console.log(`${this.name} , wellcome to loggedIn`);
        console.log(this);        // print complete object...
        
        
    }

}

my_object.wellcome()       

                // this method ka mtlb hai...current contex....is main isny uper my_object sy le kr nechy function tk sara print kerwadia.










const information = {
    my_name: "Muhammad Ahmad",
    my_age: 22,
    my_location: "Multan",
    my_subject: ["physics", "math", "english", "computer"],
    my_riligion: "Muslim",
    my_Aim: "Rich Man",
    my_father: "Hafiz Shafiq Ahmad",
    my_email: "mahmadshafiq327@gmail.com",


    Thanks_info: function() {       // this method ki madad sy bari bari object ko print kerwaya.
        console.log(this.my_name);      // result Muhammad Ahmad.
        console.log(this.my_age);       // result 22.
        console.log(this.my_location)   // result Multan.
        console.log(this.my_subject)
        console.log(this.my_riligion);
        console.log(this.my_Aim);
        console.log(this.my_father);
        console.log(this.my_email);

        console.log(`${this.my_name}, and age is ${this.my_age}`);
        
    }


}

information.Thanks_info()
console.log(this);          // reuslt empty curly bracess { }.  and browser main iska result global object. 

















function chai() {
    console.log(this);
    
}

chai()          // result node terminal main jb hum this ko print krty han tw kafi sari values and global print hota hai.







const chaiorcode = function() {         // function ko variable main store kerwaya.
    let username = "ahmad ali"
    let myName = "ali"
    console.log(this.myName);     // this method sy username ko axces krny ki koshish ki. but resutl undefined.
    console.log(this.username);     // result undefined...this method aik jagah sy dosri jagah ko target ke liyeh kam ata hia.
    
}

chaiorcode()             // result undefined


                // i think jaisa ke me ne aik object bnaya usi object main aik function bnaya usi function main this method apply kr ke object ke ander ke data ko axces kia.



















                //----------> Arrow function -------------------->

    // () => {}            // this is arrow function









                    // this is arrow function....Arrow function main keyword function use ni krna ..arrow function ko variable main store kia...then parameter put kiyeh.

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 8))       // result 11 ...function ko print kerwaya and call ki and arguments put kiyeh.









                // this is also arrow function.

const Arr = () => {
    console.log("wecome arro sir");
    
}

Arr()













                    // Arrow function likhny ka 2nd tareeka....React.js main hum zayada ter arrow function ko is tarhan use krain gy....isy implicet return kahty ha. 

const Arow = (Num1, Num2) => (Num1 + Num2) 

console.log(Arow(10, 22));


                            // agr Num1 + Num2 ko curly bracess main wrap kia tw return keywrod likhna pry ga...ya console.log likhna pry ga.







                        // is arrow function ke ander return keyword ko explicet kahty han.

const Arrow_ftn = (number1, number2) => {  
    return number1 - number2          
}

console.log(Arrow_ftn(70, 40));


                // arrow function main agr curly braces use kronga tw return ya console.log likhna lazmi hoga.











                            // this is also arrow function.....yeh tareeka hum React.js main kafi bar use krain gy phr na kahna ke btaya ni tha.        

const multiply = (Number1, Number2) => (Number1 * Number2)

console.log(multiply(4, 8));














            // you know that this is arrow function and is main me ne paranthesis main object use kia hai...you know keys and values...agy ja kr is trhan bi likha nazar ay ga.

const Addtwo = (sum1, sum2) => ({"hafiz": "ahmad"})

console.log(Addtwo());













