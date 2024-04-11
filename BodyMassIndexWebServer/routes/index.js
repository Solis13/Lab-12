//create a funtion to create web server and reponse a diferent URL 

const express= require('express')
const router = express.Router()



router.get('/', function(req,res){
    const height = req.query.height
    res.render('index.hbs')
})

router.get('/cat', function(req,res){
    res.send('Miaaow')
})

router.get('Tiger', function(req,res){
    res.send('Grrr')
})
module.exports = router 