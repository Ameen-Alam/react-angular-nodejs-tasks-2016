const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient


var db
MongoClient.connect('mongodb://ameenalam:doblier8888@ds119355.mlab.com:19355/ameenalam', (err, database) => {
    if (err) return console.log(err)
    // db = MongoClient.db('star-wars-quotes')//what eve your database name is
    
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
    app.use(bodyparser.urlencoded({ extended: true }))

    //start the  server

    app.post('/quotes', (req, res) => {
        db.collectoin('quotes').save(req.body, (err, result) => {
            if (err) return console.log(err)

            console.log('saved to database')
            res.redirect('/')
        })
    })
    app.get('/', (req, res) => {
        var cursor = db.collectoin('quotes').find()
        res.sendFile(__dirname + '/index.html')
    })
})