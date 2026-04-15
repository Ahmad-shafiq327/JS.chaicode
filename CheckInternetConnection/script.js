// is waly internet checking project main internet connected ha ya ni yeh pta lgany ke liyeh phyl page ko refresh krna pry ga phr status show hoga itenet connect hai ya ni...yeh bed practic project hai....nechy wala best hai.

const h2 = document.querySelector('h2')

if(navigator.onLine) {
    console.log("internet connected ho gya hai");
    h2.style.color = 'green'
    h2.innerHTML = 'Internet Connected'
}

else{
    h2.style.color = 'red'
    h2.innerHTML = 'internet Not Connected'
    console.log("internet disconnected");
    

}




function checkStatus() {
    if (navigator.onLine) {

        
    }
}


























// this is best project...and realtime checking internet connection.

function UpdateStatus() {
    if(navigator.onLine) {
        document.getElementById('status').innerHTML = 'internet connected'
        document.getElementById('status').style.color = 'green'
    }
    else {
        document.getElementById("status").innerHTML = 'internet not connected'
        document.getElementById('status').style.color = 'red'
        
    }
}

window.addEventListener('online', UpdateStatus)
window.addEventListener('offline', UpdateStatus)

UpdateStatus()





