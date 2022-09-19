 
 var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 let ajax = new XMLHttpRequest();
    console.log("readyState après new : " +ajax.readyState)
    ajax.onload = () => {
    console.log("Appel terminé")
    let json = JSON.parse(ajax.responseText); 
    console.log(ajax.responseText)
    let eur = json.EUR;
    console.log(eur)
    //console.log(t);
    }

let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR";
ajax.open("GET", url, true);
ajax.send();




