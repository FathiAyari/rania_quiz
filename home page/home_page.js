let monoprix=localStorage.getItem("monoprix")==null?0:localStorage.getItem("monoprix");
const monoprixHtml = document.getElementById("monoprixHtml");
monoprixHtml.innerText=monoprix;

let grait=localStorage.getItem("grait")==null?0:localStorage.getItem("grait");
const graitHtml = document.getElementById("graitHtml");
graitHtml.innerText=grait;



let zen=localStorage.getItem("zen")==null?0:localStorage.getItem("zen");
const zenHtml = document.getElementById("zenHtml");
zenHtml.innerText=zen;


let maxi=localStorage.getItem("maxi-mag")==null?0:localStorage.getItem("maxi-mag");
const maxiHtml = document.getElementById("maxiHtml");
maxiHtml.innerText=maxi;

let fatales=localStorage.getItem("fatales")==null?0:localStorage.getItem("fatales");
const fatalesHtml = document.getElementById("fatalesHtml");
fatalesHtml.innerText=fatales;


let exist=localStorage.getItem("exist")==null?0:localStorage.getItem("exist");
const existHtml = document.getElementById("existHtml");
existHtml.innerText=exist;

function logout() {
    // Show confirmation dialog
    var confirmLogout = confirm('Êtes-vous sûr de vouloir vous déconnecter?');

    // If user clicks OK, proceed with logout
    if (confirmLogout) {
        window.location.href = "../login/login.html";

    } else {

    }
}
// Define your variable

var myVariable = localStorage.getItem('user');
document.getElementById("welcome").innerHTML = "Bonjour "+myVariable;