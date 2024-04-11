//main file for the web server
// web server create web page as a response from browser.

const path = require('path')
const express = require ('express')
const indexRouter = require ('./routes/index.js')
const bodyParser= require('body-parser')

const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// configure it to use the Handlebars template engine and 
// work with template files in the views directory 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/',indexRouter)

let server = app.listen(3000)