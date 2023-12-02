const express = require('express')
const router = express.Router()
const path = require('path')




router.use('/blog/:blogId',(req,res)=> {
    res.render('users/blog-details')
})


router.use('/blog',(req,res)=> {
        res.render('users/blog')
})


router.use('/',(req,res)=>{
    res.render('users/index')
})


module.exports = router