const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/edit', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/admin','blog-edit.html'))
})

router.use('/list',(req,res)=> {
    res.sendFile(path.join(__dirname, '../views/admin','blog-list.html'))
})
router.use('',(req,res)=>{
    res.sendFile(path.join(__dirname, '../views/admin', 'blog-create.html'))
})


module.exports = router