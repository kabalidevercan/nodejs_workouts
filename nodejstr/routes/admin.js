const express = require('express')
const router = express.Router()
const path = require('path')
const db = require('../data/db')

//blogs

router.get('/blog/create',async (req,res)=>{
    try {
        const [categories,] = await db.execute('Select * from category')
        res.render('admin/blog-create',{
            title:'Create a blog !',
            categories : categories
        })
    } catch (error) {
        console.log('/blog/create sayfasi')
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
        res.redirect('/admin/blogs?action=create')
    } catch (error) {
        console.log()
    }
})

router.get('/blogs/:blogId',async (req,res)=>{
    const blogId = req.params.blogId
    try {

        const [blogs,] = await db.execute('Select * from blog where blogId=?',[blogId])
        const [categories,] = await db.execute('Select * from category')
        const blog = blogs[0]
        if(blog){
            return res.render('admin/blog-edit',{
                title:blog.baslik,
                blog : blog,
                categories : categories
            })
        }

        res.redirect('admin/blogs')


    } catch (error) {
        console.log(error)
        console.log('/BLOG/BLOGID')
    }


    res.render('admin/blog-edit')
})

router.post('/blogs/:blogId',async (req,res)=> {
    const blogId = req.body.blogId
    const baslik = req.body.baslik
    const description = req.body.aciklama
    const resim = req.body.resim
    const anasayfa = req.body.anasayfa == 'on' ? 1 :0
    const onay = req.body.onay == 'on' ? 1 : 0
    const categoryId = req.body.kategori

    try {
    
        await db.execute('UPDATE blog SET baslik=?, description=?, resim=?, anasayfa=?, onay=?, categoryId=? WHERE blogId=?',[baslik,description,resim,anasayfa,onay,categoryId,blogId])
        res.redirect('/admin/blogs?action=edit&blogId=' + blogId)

    } catch (error) {
        console.log(error)
        console.log('/BLOG/BLOGID POST METHOD')
    }

})

router.get('/blog/delete/:blogId',async (req,res)=>{

    const blogId = req.params.blogId

    try {
        
        const [blogs,] = await db.execute('Select * from blog where blogId=?',[blogId])
        const blogElement = blogs[0]

        res.render('admin/blog-delete',{
            title: 'delete blog',
            blog : blogElement
        })

    } catch (error) {
        console.log(error)
        console.log('/BLOG/DELETE/BLOGID sayfasi')
    }



})

router.post('/blog/delete/:blogId', async (req,res)=>{
    const blogId = req.body.blogId


    try {
        await db.execute('Delete from blog where blogId=?',[blogId])
        res.redirect('/admin/blogs?action=delete')
        
    } catch (error) {
        console.log(error)
        console.log('/blog/delete/blogId sayfasi')
    }

})

//categories

router.get('/category/create',async (req,res)=>{
    try {
        res.render('admin/category-create',{
            title:'Create a category !',
        })
    } catch (error) {
        console.log('/category/create get sayfasi')
        console.log(error)
    }
})

router.post('/category/create',async (req,res)=>{
    const name = req.body.name

    try {
        await db.execute('INSERT INTO category(categoryName) VALUES (?)',[name])
        res.redirect('/admin/categories?action=create')
    } catch (error) {
        console.log(error)
    }
})


router.get('/categories/:categoryId',async (req,res)=>{
    const categoryId = req.params.categoryId
    try {
        const [categories,] = await db.execute('Select * from category where categoryId=?',[categoryId])
        const category = categories[0]
        if(category){
            return res.render('admin/category-edit',{
                title:'Category Baslik',
                category : category
            })
        }

        res.redirect('admin/categories')


    } catch (error) {
        console.log(error)
        console.log('/BLOG/BLOGID')
    }
})

router.post('/categories/:categoryId',async (req,res)=> {
    const categoryId = req.body.categoryId
    const categoryName = req.body.name
    

    try {
    
        await db.execute('UPDATE category SET categoryName=? where categoryId=?',[categoryName,categoryId])
        res.redirect('/admin/categories?action=edit&categoryId=' + categoryId)

    } catch (error) {
        console.log(error)
        console.log('BURADA BIR HATA VAR 181.SATIR/ADMINJS')
    }

})


router.get('/category/delete/:categoryId',async (req,res)=>{

    const categoryId = req.params.categoryId

    try {
        
        const [categories,] = await db.execute('Select * from category where categoryId=?',[categoryId])
        const categoryElement = categories[0]

        res.render('admin/category-delete',{
            title: 'delete category',
            category : categoryElement
        })

    } catch (error) {
        console.log(error)
        console.log('admin.js 203')
    }



})

router.post('/category/delete/:categoryId', async (req,res)=>{
    const categoryId = req.body.categoryId


    try {
        await db.execute('Delete from category where categoryId=?',[categoryId])
        res.redirect('/admin/categories?action=delete')
        
    } catch (error) {
        console.log(error)
        console.log('admin.js 220')
    }

})


//blogs and categories

router.get('/blogs',async (req,res)=>{
    try {
        const [blogs,]=  await db.execute('Select blogId, baslik, resim from blog')
        res.render('admin/blog-list', {
            title:'Blog List',
            blogList: blogs,
            action: req.query.action,
            blogId : req.query.blogId
        })

    } catch (error) {
        console.log('/blogs/blogId')
        console.log(error)
    }
    
})

router.get('/categories',async (req,res)=>{
    try {
        const [categories,]=  await db.execute('Select * from category')
        res.render('admin/category-list', {
            title:'Category List',
            categoryList: categories,
            action: req.query.action,
            categoryId : req.query.categoryId
        })

    } catch (error) {
        console.log('/categories sayfasi')
        console.log(error)
    }
    
})







module.exports = router