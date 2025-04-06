// lec29 high order array loops






       // this is for-of loop....we mostly use this
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);   
}




       // this is for of loop hello word ke hur character ko print kerwaya and chech kia agr is main space ajay tw functin break ho jay.
const myname = "Ahmad shafiq"

for (const char of myname) {
    if (char === " ")
        break;
    
console.log(char);
    
}




            


        // using for-of loop and print everycharactor
const something = ["ahmad", 1, 2, 3, 'A', 'B', 'C']

for (const EveryWord of something) {
    console.log(EveryWord);

}








      //  push on mind......hello world ke beach main agr space ajay tw function continue chaly...mtlb space print ni kerwani.
const mychar = "hello world"

for (const ele of mychar) {
    if(ele == " ") {
        continue;
    }
    console.log(ele);
    
}







        // push on mind
const myarry = ['a', 'b', 'c', 'd', 'e', 'f']

for (const element of myarry) {
    
    if(element == 'd') {
        break;
    }
    console.log(element);
    
}











                // <--------Map------->
        // map unique value ko print krta hai...mtlb agr ap dublicate value likh bi dy mgr map usko print ni kry ga....and jis order main apny value likhi hogi usi order main print hogi....object pr for-of loop ni lagta.

const map1 = new Map()

map1.set('PK', "pakistan")
map1.set('USA', "United State of America")
map1.set('GR', "Germany")
map1.set('AFG', "Afghanistan")
map1.set('PK', "Pakistan")           // for testing i dublicate this map...but this not print...reading upward defi of map

console.log(map1);













         // Map ki keys and values ko print kerwany ka tareeka.....is main hum key ko alaida and value ko alaida bi print kerwa skty ha....map pr for-in loop ni lagta.

const map = new Map()

map.set('fsd', "fasilabad")
map.set('isb', "islamabad")
map.set('mlt', "multan")
map.set('lhr', "lahore")

for (const [key, value] of map) {    // this is for of loop
    console.log(key, ':-', value);   // i print key and value
    
}










                    // <------for-in loop------->
            
            // this is object and i apply for-in loop in this object...for-in loop object ke liyeh hota hai....or bi cheezon ke liyeh hota hai...but usy bad main dekhain gy.
const myObject = {   
    js: "javascript",
    py: "python",
    cpp: "for c++",
    rb: "ruby"
}

for (const key in myObject) {
    console.log(`${key} ---> ${myObject[key]}`);    // is object value of object ne as a key consider kia hai.

}









            // basically array index start from zero...therefor array of key 0,1,2,3 and value is print as it is array
const programming = ["javascript", "c language", "c-plus-plus", "python"]

for (const key in programming) {
    console.log(`${key} --> ${programming[key]}`);  // push on mind i use tehnique
    
    
}











           // <---------for-each loop---------->
    
    // sub sy zayada hum for-each loop use krain gy....is main function apny ap main aik keyword hai.
    
const coding = ["c language", "python", "javascript", "ruby", "swift", "cpp"]

coding.forEach( function (item) {
    console.log(item);
    
})







            // for-each loop....phy aik array declare kia...phr is array pr for-each loop lgaya...is loop main function apny ap main aik keyword hai...function main parameter (value) ka mtlb array ka data hai...and value ko print kerwadia.......hum is main arow function bi use kr skty han, 
const array = ["ahmad", "fahad", "haseeb", "ubaid", "naouman"]

array.forEach(function (value) {
    console.log(value);
    
})







const MyArry = ["pakistan", "india", "ameriaca", "germany"]

myarry.forEach( (Items) => {
    console.log(Items);
    

})






            // use for-each loop.....with the help of arow function...and checked array and index values....thats amazing.
const myArray = ['a', 'b', 'v', 'd', 'e', 1, 2, 4]

myArray.forEach( (myArray, index) => {
    console.log(index, myArray);
    
})






        // this is most important...database sy value array ki formate main ati hai and hur aik value aik object hi hota hai...me ne array ke ander 3 object declare kiyeh..yahan pr object ka name item hai...and for-each loop ki madad sy and arow function lga kr hur object ki language ko axcec kr lia...and Name ko bi...agr me chahon tw bari bari hur cheez ki axcess kr skta hao.

const myCoding = [
    {
        languageName: "Javascript",
        Name: "Ahmad",
        city: "Islamabad",
    },

    {
        languageName: "Python",
        Name: "Fahad",
        city: "Karachi",
    },

    {
        languageName: "Cpp Language",
        Name: "Haseeb",
        city: "Lahore",
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
    
})

// myCoding.forEach( (item)=> {
//     console.log(item.city);
    
// } )





// for-each loop kuch bi return ni krta.



