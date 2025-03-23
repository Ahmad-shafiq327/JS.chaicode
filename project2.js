// queryslector ki madad sy form ko target kia.
const form = document.querySelector('form')

// submit btn pr eventsmethod apply kia...and function calling ki...and form ko google server pr jany rokny ke liyeh preventdefault mehtod apply kia. 
form.addEventListener('submit', function(item) {
    item.preventDefault()

    // height ko target kia and variable main store kia...and parseInt mehtod apply kr ke only value ko axcess kia.
    const height = parseInt(document.querySelector('#height').value)

    // Weight ko target kia and variable main store kia...and parseInt mehtod apply kr ke only value ko axcess kia.
    const weight = parseInt(document.querySelector('#weight').value)

    // results ko target kia and variable main store kai.
    const result = document.querySelector('#results')


    // conditions apply ki...emply lessthan and NaN...result.innerhtml pr result print kerwaya.
    if(height === " " || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid Height ${height}`
    } else if(weight === " " || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid Weight ${weight}`
    } else {
        const bmi = (weight / ((height* height) / 10000)).toFixed(2)
        // show the result 
        result.innerHTML = `<span>${bmi}</span>`
    }
    // formula apply kia and variable main store kia....tofixed method apply kia...and result.innerhtml pr print kerwaya.


})