console.log("getter setter and stack in javascript");

// getter setter....mtlb me kuch logon ko password ka axcess dena hi ni chahta...tw me usko kaisy error dekhaon ga...isi kam ke liyeh getter setter ko use krty han....getter by default hur class main hi hoty han.

// function apny ap main function bi hai or object bi hai.


// actualy main ap jitny bi property bnaty ho unk name sy automaticaly getter and setter as a method bun jaty han.

// getter and setter donon likhny prty han...aisa ni hoga ke sirf getter likh lia or setter ni likha.


// constructor ka kam bi value ko set krna hota hai.
// setter bi value ko set krta hai.

// class ke bahir sy koi value get krna chahty ho usy getter kahty han.
// koi vlaue set krna chahty ho class ke ander isi liyeh setter hota hai.

// actually main value ko get and set krty waqt constroctor ki value ignore ho jati hai...isi liyeh getter and setter ki value ko high perority milti hai....isi liyeh hum getter and setter main jo kuch likhty han wohi print hota hai.


// getter mian return likhna hai....lakin setter ke ander return ni likhna.

// unserscore_ ka mtlb yeh data private hai isko axcess na di jay kisi ko.


// phly class ko declare kia....phr constroctor main email and password likh dia.....phr this.email variable bna kr us main email store krdi jo email ap mujy pass kr rhy ho...and isi trhan password ko bi......new kayword constructor vaghaira call kr rha hai and object bi bna rha hai.

class User {
    constructor(Email, Password) {
        this.Email = Email
        this.Password = Password

    }

    get Password() {
        return this._Password.toUpperCase()

    }

    set Password(value) {
        // setter main kabi bi return ni likhna
        this._Password = value

    }



}

const hetiash = new User("mahmad@gmai.com", 'abcd')

console.log(hetiash); // output email and password
console.log(hetiash.Password); // output abcd in capital main
console.log(hetiash.Email); // output only email












// getter setter use krty waqt constructor ki ka data ignore ho jata hai...getter and setter ka data run hota hia.
class username {
    constructor(name, location) {
        this.name = name
        this.location = location
    }

    get name() {
        return this._name.toUpperCase()
    }

    set name(ele) {
        // setter main return ni likhty
        this._name = ele
    }


}



const get = new username("ahmad", "pakistan")

console.log(get); // output name and location
console.log(get.name); // output AHMAD in capital
















// phly aik class bnai...phr constroctor ka data put kia...but constroctor ignore hoga q ke getter setter use krty waqt constroctor ignore ho jata hai....phr getter bnaya Name ahmad ko UpperCase() property lgai...ap lowerCase bi lga skty ho ya koi or bi...and get main teturn likhana chahiyeh...ab isi terhan setter likha setter main parameter dena lazmi hty han...isi lieyh me ne eee diyeh...and setter main return ni likhty...
// Next bilkul uper waly ki trhan fatherName ka bi getter and setter name bnaya.

class myData {
    constructor(Name, FatherName) {
        this.Name = Name
        this.FatherName = FatherName
    }

    // getter main return lazmi likhty han.
    get Name() {
        return this._Name.toUpperCase()
    }

    set Name(eee) {
        this._Name = eee

    }

    get FatherName() {
        return this._FatherName.toUpperCase()
    }

    // setter main parameter lazmi likhty han.
    set FatherName(aaa) {
        this._FatherName = aaa
    }

}

// targe ke name sy variable bna kr us main store kia.
const target = new myData("ahmad shafiq", "hafiz shafiq ahmad")
console.log(target.Name); // output AHMAD SHAFIQ in capital
console.log(target.FatherName); // output HFAIZ SHAFIQ AHMAD in capital















// push on mind i ieself creat....three things myname subject and course...and in which three getter and three setter used...
class myHistory {
    constructor(myName, subject, course) {
        this.myName = myName
        this.subject = subject
        this.course = course
    }

    // underscore_ ka mtlb data ko private rakhna.
    get myName() {
        return this._myName.toLowerCase()
    }

    // setter main parameter lazmi dety han.
    set myName(rrr) {
        this._myName = rrr

    }

    get subject() {
        return this._subject.toUpperCase()
    }

    // setter main parameter lazmi dety han.
    set subject(ele) {
        this._subject = ele
    }

    // getter main return lazmi likhna prta hai.
    get course() {
        return this._course.toUpperCase()
    }

    set course(www) {
        this._course = www
    } 


}


const information = new myHistory("AHMAD ALI", "cumputer", "web development")
console.log(information.myName); // ahmad ali small letter main.
console.log(information.subject); // COMPUTER capital letter main.
console.log(information.course); // WEB DEVELOPMENT capital letter main.




// get property ka mtlb hai memory sy le kr Ao.






class aaa {
    constructor(yourName, yourEmail) {
        this.yourName = yourName
        this.yourEmail = yourEmail
    }

    // jo get ka name dia. wohi this._ ke sath likhain gy.
    get yourName() {
        return this._yourName.toUpperCase()
    }

    // same as getter.
    set yourName(item) { 
        this._yourName = item

    }


}


const check = new aaa("yourName is ali ahmad", "youremail@gmail.com")
console.log(check); // output complete name and email.
console.log(check.yourName); // output capital letter of yourname













const USER = {
    _email: "ahmad@gmial.com",
    _Password: '663185',

    // get ka mtlab memory sy this._email ko le kr ao
    get email() {
        return this._email.toUpperCase()
    },
    
    set email(ele) {
        this._email = ele
    }


}

// Object.creat factory function hai.
const chai = Object.create(USER)
console.log(chai.email); // output email in capital latter.




// aj kl provate property ke liyeh # use ho rha hai...# use krny sy private property ka axcess ni dia jay ga.






















