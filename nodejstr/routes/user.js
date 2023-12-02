const express = require('express')
const router = express.Router()
const path = require('path')




router.use('/blog/:blogId',(req,res)=> {
    res.sendFile(path.join(__dirname,'../views/users','blog-details.html'))
})


router.use('/blog',(req,res)=> {
res.sendFile(path.join(__dirname,'../views/users','blog.html'))
})


router.use('/',(req,res)=>{
res.sendFile(path.join(__dirname,'../views/users','index.html'))
})


module.exports = router