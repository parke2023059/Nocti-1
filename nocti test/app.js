const express = require("express")
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))



app.get('/', function(req,res){
    res.render('index.ejs')
})

app.post('/', function(req,res){
    res.render('index.ejs')

    var order = {
        items: [],
        subtotal: 0,
        salesTax: 0,
        profit: 0,
        total: 0,
        name: req.body.name,
        addr: req.body.address
    }
    console.log(order)
})



var BattlePass = {
    unitPrice: 7.13
}

var FortniteCard = {
    unitPrice: 14.28
}

var PreorderDLC = {
    unitPrice: 49.78
}


class Item{
    constructor(unitprice){
        this.unitPrice
    }
    unitPrice = 7.13
}


console.log(Item.unitPrice)


app.get('/all', function(req,res){
    res.render('allorders.ejs')
})


app.listen(6900, function(){
    console.log("Server running on 6900")
})