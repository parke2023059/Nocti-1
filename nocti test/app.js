const express = require("express")
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


app.get('/', function(req,res){
    res.render('index.ejs')
})


app.listen(6900, function(){
    console.log("Server running on 6900")
})