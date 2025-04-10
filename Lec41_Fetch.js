// now you know fetch in javascript



// fetch ki diagram hai us diagram sy achi trhan samajh ay ga.

// fetch sy jo bi kam hota hai woh callback q ke ander ata hai...q ke yeh promise object hai.


// jaisy ap fetch keyword use krty han...2 part main apka kam hota hai.



// ----->data---->on-fulfilled[]------>on-Rejection------->1----->phly wala memory main space resorve krta hai..apk liyeh...usy onfulfilled[] bi kahty han...jo ke promise ki state hai that means promise ka resolve.......and isy on-Rejection bi kahty han...yeh donon array hoty han...in array main directly value push krna allow ni hai...yeh private hoty han...yeh apki range main hi ni hoty ap inko axcess hi ni kr skty....yahan tk ke data bi private field hota hai.

// ----->web browser/node----->network request------->2----------> yeh ya tw apki web browser api axcess kry ga ya tw node handel kry ga.......network request ap directly send fire kr ni kr skty....isk ke liyeh apko aik resourse chahiyeh ya tw browder apko woh resource de rha hai ya phr node.js enviorment apko woh resource de rha hai....network request ke through apko milti hai network request.......agr network request mil gyi tw oviously data network py jay ga ya tw ni jay ga.....agr ja kr kuch bi responce aya hai tw woh hamaisha jata hai on-fulfilled main mtlb resolve main........ya phr agr request ja hi ni payi mtlb kuch responce ni arha tw us cause main rejction hoti hai.

// yad rekhiyeh apk jitny bi error file not found mean 404.... network pr request gyi hai tw apko pta chala hai ke 404 error aya hai....us cause main yeh data on-fullfilled main hi count hota hai.




// phly wala 1......yeh data memory main resorve rehta hai...iski initaial value empty hoti hai.


// jb actually main apka kam ho jay ga network request sy......tb network request sy ya tw on-fullfilled wala kam hoga ya tw on-rejecton wala kam hoga...in donon ke ander function milty han...yeh function responce hoty han data ko full-filled krny ke liyeh.......aik bar data ne jaisy hi value fullfileld krdi tw humny kia variabale bnaya tha responce tw yeh data ko zemadari hai ja kr us responce ko fullfilled kry.   




async function api() { 
    let request = await fetch('https://randomuser.me/api/')
    
    let request = await request.json()
    
}