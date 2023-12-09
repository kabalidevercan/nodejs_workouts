const express = require('express')
const router = express.Router()
const path = require('path')
const db = require('../data/db')


router.get('/blog/create',async (req,res)=>{
    try {
        const [categories,] = await db.execute('Select * from category')
        res.render('admin/blog-create',{
            title:'Create a blog !',
            categories : categories
        })
    } catch (error) {
        console.log('/routes/admin.js')
        console.log(error)
    }
})

router.post('/blog/create',async (req,res)=>{
    const baslik = req.body.baslik
    const description = req.body.aciklama
    const resim = req.body.resim
    const kategori = req.body.kategori
    const anasayfa = req.body.anasayfa === 'on' ? 1 : 0
    const onay = req.body.onay === 'on' ? 1 : 0

    try {
        await db.execute('INSERT INTO blog(baslik,description,resim,anasayfa,onay,categoryId) VALUES (?,?,?,?,?,?)',[baslik,description,resim,anasayfa,onay,kategori])
        res.redirect('/admin/blogs')
    } catch (error) {
        console.log()
    }
})




router.get('/blogs/:blogId',(req,res)=>{
    res.render('admin/blog-edit')
})


////////
router.get('/blogs',async (req,res)=>{

    try {
        const [blogs,]=  await db.execute('Select blogId, baslik, resim from blog')
        res.render('admin/blog-list', {
            title:'Blog List',
            blogList: blogs
        })

    } catch (error) {
        console.log('/blogs/blogId')
        console.log(error)
    }
    
})


module.exports = router