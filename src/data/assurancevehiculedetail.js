var donnee;
const ajax = function (url, method) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        donnee= (JSON.parse(this.responseText)).data;
        // console.log(donnee);
    }
    xhttp.open(method, url, false);
    xhttp.send();
}

export function getDetailAssurance(month){
     ajax("https://avion-production-ba83.up.railway.app/avions/expiration/"+month, "GET");
     return donnee;
}