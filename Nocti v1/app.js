//modules
const express = require("express")
const app = express()

//set up modues
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


class Item {
    constructor(name, qty, unitprice){
       this.name = name
       this.qty = qty
       this.unitprice = unitprice
        this.profit = unitprice * 0.4
        this.retailprice = unitprice + this.profit
        this.subtotal = this.retailprice * qty
        this.salesTax = this.subtotal * 0.06
        

    }
}

//endpoints
app.get('/', function(req,res){
    res.render('index.ejs')
})

app.get('/viewall', function(req,res){
    res.render('viewall.ejs')
})

app.post('/viewall', function(req,res){
    res.render('viewall.ejs')

    var order = {
        orders: [],
        subtotal: 0,
        salesTax: 0,
        profit: 0,
        total: 0,
        customerName: req.body.name, 
        customerAddress: req.body.addressa

    }

    console.log(order)


})




//listen server
app.listen(6969, function(){
    console.log("Server running on port: 6969")
})