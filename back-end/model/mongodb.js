const mongoDb = require ("mongoose");
require('dotenv').config();


const serverDB = 'mongodb+srv://user_lg:' + process.env.MONGOPASSWORD + '@cluster0.wawol.mongodb.net/UserDbWebsite?retryWrites=true&w=majority';

const newSchema = new mongoDb.Schema({
    name:{
        type: String,
        require : true
    },
    mail: {
        type: String,
        require: true
    },
    motdepasse:{
        type: String,
        require : true
    }
});

const RegisterDb = mongoDb.model("registerDb" , newSchema);


mongoDb.connect(serverDB, {useNewUrlParser: true})

let c = new RegisterDb(
    {
        name : "lucaqs",
        mail : "lll",
        motdepasse : "eeee"
    }
)

c.save();


module.exports = {serverDB , RegisterDb} ; 
