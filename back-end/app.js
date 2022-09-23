/*
Objectif :
-créer une page web
-utiliser une mvc (route, fonction)
-initialiser une base de donnée 
-récuperer des informations sur un htpp 
-faire une authentification 
*/

//Etape 1 : create a localhost 
//Etape 2 : use a dotenv to create the site environnement by .env

//Constante 
const express = require("express");
const app = express();
const route = require("./Path/main.js");
require('dotenv').config();

const mongoDb = require ("mongoose");
const {serverDB , RegisterDb} = require("./model/mongodb")
mongoDb.connect(serverDB, {useNewUrlParser: true})






//EJS
app.set("views", "./views");
app.set('views engine',"ejs");
//permet d'aller chercher des fichiers statiques
app.use(express.static(__dirname + '/views'));


app.use("/", route);




let port = process.env.PORT || 4001 ;
app.listen(port, () => {
    console.log("You're connected to localHost " + port)
})