const express = require('express')
const router = express.Router()
const path = require('path')
const db = require('../data/db')


const data = {
    title : 'Populer Kurslar',
}  

router.use('/blog/:blogId',(req,res)=> {
    res.render('users/blog-details')
})


router.use('/blog',(req,res)=> {
        db.execute('Select * from blog')
        .then(result => {
            db.execute('Select * from category')
            .then(sonuc => {
                res.render('users/blog',{
                    title: data.title,
                    categories: sonuc[0],
                    blogList: result[0]
                })
            })
            .catch(error => {
                console.log(error)
            })
            
        })
        .catch(err => {
            console.log(err)
        })
})


router.use('/anasayfa',(req,res)=>{
    db.execute('Select * from blog')
    .then(result => {
        db.execute('Select * from category')
        .then(sonuc => {
            res.render('users/index', {
                title: data.title,
                categories: sonuc[0],
                blogList : result[0]
            }) 
        })
        .catch(error=> {
            console.log(error)
        })
        
    })
    .catch(err => {
        console.log(err)
    })
    
})


module.exports = router