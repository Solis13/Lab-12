const express = require('express')
const router = express.Router()


//respond to get the request we use a function to give the information.
router.get('/', function(req,res,next){ // get the request to the home page
    // name of Handlebars file-name.
    res.render('index', {
        title:'Feedback Application',
        author:'Monica',
        timePageLoadedAt:new Date()
    })
})

router.get('/feedback-form', function(req,res,next){
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req,res,next){
    //need data 
    //const formData = req.query

    const formData =req.body//post is in the body
    console.log(formData)

    res.render('thank_you',{
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent:formData['current-student']
     })
})

module.exports= router // this is the return brower object 