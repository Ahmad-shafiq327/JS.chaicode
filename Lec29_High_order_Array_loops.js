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







