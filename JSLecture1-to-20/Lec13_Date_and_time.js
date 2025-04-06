       // Lecture 13 Dates & times.







let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);             // Date apny ap main aik object hai.
console.log(myDate.toString())
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.getFullYear());
console.log(myDate.toLocaleString());          // i think this is best.
console.log(myDate.toUTCString());            // this is also best.
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.getHours());










 
let myCreatDate = new Date(2024, 0, 11)        // javascript main month zero sy start hoty han.
console.log(myCreatDate.toDateString());







let dateAndtime = new Date()
console.log(dateAndtime.toLocaleString());      // best date and time.









let yourDate = new Date("02-11-2024")       // yeh me ne date ka formate dia hai...is hisab sy date dekhy gi.
console.log(yourDate.toLocaleString());

















let myTimeStam = Date.now()
console.log(myTimeStam);            // result 1732293806354 yeh mili second main hai...1970 sy le kr ab tk ka time mili second main print houa hai.











const date = new Date()
console.log(date); 
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getDay());         // result 5 because day monday sy start hota hai...
console.log(date.getMonth());       // result 10 because month zero sy start houa hai.


















let anydate = new Date()            // this method you use mostly.
console.log(anydate.toLocaleString('default', 
    {
        weekday: "long",
        timeZoneName: "short"

    }
));

