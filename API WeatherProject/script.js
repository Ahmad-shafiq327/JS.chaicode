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






const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener("click", () => {
    if(cityInput.value === "") {
        alert('empty')
    }
    else {
        alert('yes..okay')
    }
})


function getWeather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiurl)
    .then((respose) => {
        if(!respose.ok) {
            throw new Error('city not fount')
        }
        return respose.json();
    })
    .then((data) => {
        displayWeather(data)
    })
    .catch((error) => {
        showError()
        console.error('error fatching data', error);
        
    })

}



function showError() {
    errormsg.classList.remove('hidden')
    weatherInfor.classList.add('hiden')
}


























// const searchBtn = document.getElementById('search-btn');
// const cityInput = document.getElementById('city-input');
// const weatherInfo = document.getElementById('weather-info');
// const errorMsg = document.getElementById('error-msg');

// const cityName = document.getElementById('city-name');
// const description = document.getElementById('description');
// const temperature = document.getElementById('temperature');
// const humidity = document.getElementById('humidity');

// const apiKey = 'YOUR_API_KEY_HERE';

// searchBtn.addEventListener('click', () => {
//     const city = cityInput.value.trim();

//     if (city === '') {
//         alert('Please enter a city name');
//         return;
//     }

//     getWeatherData(city);
// });

// function getWeatherData(city) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//     fetch(apiUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }

//             return response.json();
//         })
//         .then((data) => {
//             displayWeather(data);
//         })
//         .catch((error) => {
//             showError();
//             console.error('Error fetching data:', error);
//         });
// }

// function displayWeather(data) {
//     cityName.innerText = `${data.name}, ${data.sys.country}`;
//     description.innerText = data.weather[0].description;
//     temperature.innerText = Math.round(data.main.temp);
//     humidity.innerText = data.main.humidity;

//     weatherInfo.classList.remove('hidden');
//     errorMsg.classList.add('hidden');
// }

// function showError() {
//     errorMsg.classList.remove('hidden');
//     weatherInfo.classList.add('hidden');
// }

























// const btn = document.getElementById('search-btn');
// const popup = document.getElementById('popup')


// function clickedbtn() {




// btn.addEventListener('click', () => {

//     const city = document.getElementById('city-input').value
//     console.log(city);

//     fetch(`https://api.weatherapi.com/v1/current.json?key=f70a41a8d3da42368db152017261906&q=${city}&aqi=yes`)

//     .then((response) => {
//         return response.json();
//     })
    
//     .then((data) => {
//         document.getElementById('city-name').innerText = data.location.name;
//         document.getElementById('city-temp').innerText = data.current.temp_c;
//         document.getElementById('local-time').innerText = data.location.localtime;
//     })


    
// })

// }