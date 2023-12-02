const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/edit', (req,res)=>{
    res.render('admin/blog-edit')
})

router.use('/list',(req,res)=> {
    res.render("admin/blog-list")
})
router.use('',(req,res)=>{
    res.render('admin/blog-create')
})


module.exports = router