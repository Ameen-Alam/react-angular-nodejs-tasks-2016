// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
var conn = mongoose.connection;

var OrdersSchema = mongoose.Schema({
    item: String,
    qty: Number,
    price: Number,
    total: Number
});
// OrdersSchema.methods.total = function () {
//     console.log("%s Total: %d", this.item, this.qty * this.price);
// }
OrdersSchema.methods.calc = function () {
    return this.qty * this.price;
}

var Order = mongoose.model('orders', OrdersSchema)
var firstOrder = new Order({ item: "Keyboard", qty: 1, price: 150 })
firstOrder.total = firstOrder.calc();
conn.on('connected', function () {
    console.log("Connected Successfully!!!")
})
conn.on('disconnected', function () {
    console.log("Disconnected Successfully!!!")
})
conn.on('error', console.error.bind(console, "Error Detected!!!"));
conn.once('open', function () {
    firstOrder.save(function (err, res) {
        if (err) throw err;
        console.log(res);
        conn.close()
    })
})


// var firstOrder = new Order({ item: "Keyboard", qty: 1, price: 150 })
// firstOrder.qty = 3;
// firstOrder.total();
// console.log(firstOrder.item);
