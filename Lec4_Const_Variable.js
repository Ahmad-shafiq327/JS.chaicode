            // lecture 4 Const let & Var
            




console.log("Ahmad Shafiq");



                             // Before we declare cont & let & var.
const accountId = 123456       //you know const not changeable.
let accountEmail = "mahmadshafi1@gamil.com"
var accountPassword = "663185"         // aj kl var use ni hota javascript main...because issue in block scope and functional scope.
accountcity = "Multan"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);







                            // Now i change let and var.....not const
                            // changing krty waqt me assume ni kr skta...mtlb ke me let and var ni likh skta.
                        
accountEmail = "ahmadali327@gmail.com"
accountPassword = "425548"
accountcity = "Karachi"


console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);





                            // This is best way for code runner
console.table([accountEmail, accountId, accountPassword, accountcity]);

