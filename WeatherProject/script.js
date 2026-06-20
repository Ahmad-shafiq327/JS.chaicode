const btn = document.getElementById('search-btn')
const input = document.getElementById("city-input")
const cityName = document.getElementById('city-name')
const citytime = document.getElementById('city-time')
const cityTem = document.getElementById('city-temerature')



async function getData(CityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=f70a41a8d3da42368db152017261906&q=${CityName}&aqi=yes`)

    return await promise.json()

}





btn.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country},`
    citytime.innerText = result.location.localtime;
    cityTem.innerText = result.current.temp_c
    
    
})

