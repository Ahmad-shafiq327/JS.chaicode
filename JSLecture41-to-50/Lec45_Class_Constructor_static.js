// class constructor in javascript 

// yeh class wala lecture mujhy achy sy prepare ni hai.





console.log("classes in javascrpt");







// phly aik class bnai class aik keyword hai...phr custructor method put kia...and data put kia...phr phr aik function call ki...lklll
class User {
    constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}
encryptpawword() {
    return `${this.password}`
}

}

const chai = new User("Ahmad", "ahmad@gmail.com", '23456')

console.log(chai.encryptpawword());











// this is easy example.
class StudenttHistory {
    constructor(name, subject, RollNumber) {
        this.name = name
        this.subject = subject
        this.RollNumber = RollNumber
    }

    getRollnumber() {
        return `${this.RollNumber}`
    }

}


const checkdata = new StudenttHistory("hafiz ahamd", "Computer", '8297')

console.log(checkdata.getRollnumber());









class myInformation {
    constructor(name, fatherName, motherName) {
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
    }

    tellFtherName() {
        return this.fatherName
    }

}

const aaa = new myInformation("Ahmad shafiq", "hafiz shafiq ahmad", "wakeela")

console.log(aaa.tellFtherName());



console.log("ahmad");









// behind the seen
// yeh code complete ni hai...
function USER(userName, Email, Password1) {
    this.userName = userName
    this.Email = Email
    this.Password1
}


USER.prototype.CheckPassword = function() {
    return `${this.Password1}`
}


const another = new USER("hafiz", "mahamdshafiq@gmail.com", '663185')

console.log(another.CheckPassword());















class aaaa {
    constructor(userName1) {
        this.userName1 = userName1
    }

    login() {
        console.log(`username is:- ${this.userName1}`);
        
    }

}

class teacher extends aaaa {
    constructor(userName1, Email1, course) {
        super(userName1) // super keyword hai.
        this.Email1 = Email1
        this.course = course
    }

    addcourse() {
        console.log(`A new course was added by ${this.course}`);
        
    }

}

const check = new teacher("Ali", "ahmad@gmail.com", 'javascript')

check.addcourse()