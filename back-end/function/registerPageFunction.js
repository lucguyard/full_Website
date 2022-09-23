
exports.RegisterClient = async (req,res) => {
    //let { name , mail , password , passwordC} = req.body
    console.log(req)
    res.render("../views/register.ejs")
}