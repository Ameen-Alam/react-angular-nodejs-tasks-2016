const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

const app = express();

app.set('views', __dirname + '/public/pages/')
app.set('view engine', 'twig');
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index', { title: "Create New User" });
})

app.post('/', [
    // .isEmail().withMessage('Not Valid')
    check('username', 'Error Occured in Username').trim().isEmail().normalizeEmail(),
    check('password', 'Error Occured in password').trim().isLength({ min: 5 }),
    check('rpassword')
        .custom((value, { req }) => {
            if (value !== req.body.password){
                 
                throw new Error("password Does not Match")
            }else{
                return true
            }
        })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.mapped())
        const user = matchedData(req);
        return res.render('index', { title: "Create New User", errors: errors.mapped(), user : user })
    } else {
        const user = matchedData(req)
        console.log(user)
        res.render('about', { user: user })
    }
})


// app.set('views', './public/pages')
// app.set('view engine', 'twig');

// app.get('/add/:num1-:num2', (req, res) => {
//     res.render('index',
//         {
//             title: 'My Calculator', add: parseInt(req.params.num1) + parseInt(req.params.num2),
//             sub: parseInt(req.params.num1) - parseInt(req.params.num2)
//         }
//     )
// })
// const mw = require('./my-Middelware')
// app.use(mw({ option1: '1', option2: '2' }))

// const myMiddleware = (req, res, next) => {
//     req.dt = new Date();
//     console.log("Moddilware Activated on " + req.params.name)
//     next()
// }

// app.use(myMiddleware);
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.get('/about/:name', myMiddleware, (req, res) => {
// res.sendFile(__dirname+'/public/pages/about.html' )
// res.send("About " + req.dt)
// })

// app.use(express.static(__dirname + '/public'))
// app.use('/static', express.static(__dirname + '/public'))
// app.use(express.static(__dirname + '/public/pages'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
// app.get('/users/:id?/:email?', (req, res) => {
//     if (req.params.id != undefined)
//         res.send('List of User : ' + req.params.id + " " + req.params.email)
//     else
//         res.send('List of all users')
//     console.log(req.params)
// })
// app.get('/users/:from.:to', (req, res) => {
//     res.send("You are flying to  : " + req.params.from + " to " + req.params.to)
//     console.log(req.params)
// })
// app.get('/user/:userid/profile', (req, res) => {
//     res.send(req.params.userid)
// })
// app.post()
// app.put()
// app.path()
// app.delete()



app.listen(3000, () => {
    console.log("Server running at http:localhost:3000")
})