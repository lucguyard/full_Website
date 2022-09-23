const express = require("express");
const router = express.Router();
const { response } = require("express");

require('dotenv').config();
const mainFunction = require("../function/mainPageFunction");
const registerFunction = require("../function/registerPageFunction");


router.route("/")
    .get(
       mainFunction.fetchRequest        
        )
    .post()                     


router.route("/main")
    .get((req,res) => {
        res.send("hello, welcome to main page");
    })
    .post()

router.route("/register")
    .get((req,res) => {res.render("../views/register.ejs")})
    .post(registerFunction.RegisterClient)

module.exports = router ; 




/*
path i have to take:
- "/" : Main page 
try to create a lot of trick to learn (apax to search some information, meteo , work on html/css with react, query)

-"/register"  : Create a account with password, name , email .
connect with a data base mongodb to stock information

- "/login" : Make login and password to connect
create cookie, authentification 


-"/account" : 



*/