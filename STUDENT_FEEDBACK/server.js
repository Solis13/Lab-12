const express = require('express')
const path = require ('path')//conennt location in the computer
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index.js')

const app = express() // create the web server

app.use(bodyParser.urlencoded({extended:false}))

const staticFileLocation=path.join(__dirname,'public')
app.use(express.static(staticFileLocation))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs') // use handlebars to show views


app.use('/',indexRouter)// figure out about the requeste mean and generate the response

// start server running here

const server = app.listen(process.env.PORT|| 3000,function(){
    console.log('Server running on port', server.address().port)
})