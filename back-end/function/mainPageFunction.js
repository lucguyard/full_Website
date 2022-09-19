const fetch = require("node-fetch");
var queryString = require('query-string');
const url = require("url");



exports.fetchRequest = async (req,res) => {

   let url1 = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR";
    let fetchBitcoin =await fetch(url1).then(response =>         
    response.json()).then(data => 
        {
            bitcoin = data.EUR
            return bitcoin
        }
    ) 

    let url2 = "https://www.prevision-meteo.ch/services/json/"+req.query.ville
    let fetchMeteo =await fetch(url2).then(response =>          
            response.json()
            ).then((data) => 
            {
                let tab = []
                let ville = data.city_info.name
                let condition= data.current_condition.condition
                tab.push(ville)
                tab.push(condition)
                return a
            }).catch(() => {
                error = "cette ville n'exsiste pas"
                return error
            })
                
    res.render("../views/index.ejs" ,{fetchBitcoin , fetchMeteo});

}





