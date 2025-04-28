// class constructor in javascript 

console.log("classes in javascrpt");


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
