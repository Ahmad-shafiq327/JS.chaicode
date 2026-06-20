// fetch ====> fetch() javascript ka built in function hai...internet pr request bejhta hai...server sy data mangwata hai...fetch(is address pr jao data le kr Aon).

// javascript normaly fast hoti hai...lakin internet sy data lana slow hota hai...isi liyeh hum function ko bolty han async function mtlb wait krna pry ga.


// async ====> async ka mtlb is function ke ander time lag skta hai....wait krna pry ga....async ke ander hamaisha await hota hai...

//  yahan pr hum response as a variable use krty han...server sy jo data ay ga woh is varialbe main store krdo.

// await =====> await ka mtlb ruko jb tk kam complete na ho jay...jb tk server sy data nahi ajata ruky raho.

// url =====> server ka adress jahan sy data ana hai.

// server data string ki formate main bejhta hai...jisa ke "{tem: 30}"

// .json() =====> .json() kam kam string ko obect main convert krna....jaisa ke {tem: 30}


//      ===> ye await method hai.






// is main .then() wala method bi hai....mosty log .then() wala method hi use krty han.








const btn = document.getElementById('search-btn');
const popup = document.getElementById('popup')


function clickedbtn() {




btn.addEventListener('click', () => {

    const city = document.getElementById('city-input').value
    console.log(city);

    fetch(`https://api.weatherapi.com/v1/current.json?key=f70a41a8d3da42368db152017261906&q=${city}&aqi=yes`)

    .then((response) => {
        return response.json();
    })
    
    .then((data) => {
        document.getElementById('city-name').innerText = data.location.name;
        document.getElementById('city-temp').innerText = data.current.temp_c;
        document.getElementById('local-time').innerText = data.location.localtime;
    })


   

 




    
})


}