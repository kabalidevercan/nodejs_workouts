const express = require('express')
const router = express.Router()
const path = require('path')
const db = require('../data/db')


const data = {
    title : 'Populer Kurslar',
}  



router.use('/blog/category/:categoryId',async (req,res)=>{
    const id = req.params.categoryId

    try {
        const [blogs,]= await db.execute('Select * from blog where categoryId=?',[id])
        const [sonuc,] = await db.execute('Select * from category')
        res.render('users/blog',{
            title: data.title,
            blogList: blogs,
            categories: sonuc,
            selectedCategory:id
        })
        
    } catch (error) {
        console.log(error)
    }

})


router.use('/blog/:blogId',async (req,res)=> {
    const id = req.params.blogId

    try {
        const [blogs,] = await db.execute('Select * from blog where blogId=?', [id])
        
        if(blogs[0]){
                return res.render('users/blog-details',{
                title : data.title,
                blog : blogs[0]
            }) 
        }
            res.redirect('/mainpage')
        


        
    } catch (err) {
        console.log(err)
    }



    
})


// router.use('/blog',(req,res)=> {
//         db.execute('Select * from blog')
//         .then(result => {
//             db.execute('Select * from category')
//             .then(sonuc => {
//                 res.render('users/blog',{
//                     title: data.title,
//                     categories: sonuc[0],
//                     blogList: result[0]
//                 })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
            
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })

router.use('/blog',async (req,res)=> {
    try{
        const [result,] = await db.execute('Select * from blog')
    const [sonuc,] = await db.execute('Select * from category')
    res.render('users/blog',{
        title : data.title,
        categories : sonuc,
        blogList : result,
        selectedCategory: null,
    })

    }catch(err){
        console.log(err)
    }
})

// router.use('/anasayfa',(req,res)=>{
//     db.execute('Select * from blog')
//     .then(result => {
//         db.execute('Select * from category')
//         .then(sonuc => {
//             res.render('users/index', {
//                 title: data.title,
//                 categories: sonuc[0],
//                 blogList : result[0]
//             }) 
//         })
//         .catch(error=> {
//             console.log(error)
//         })
        
//     })
//     .catch(err => {
//         console.log(err)
//     })
    
// })

router.use('/mainpage', async (req,res)=> {
    try {
        const [result,] = await db.execute('Select * from blog')
        const [sonuc,] = await db.execute('Select * from category')
        res.render('users/index',{
            title: data.title,
            categories : sonuc,
            blogList :result,
            selectedCategory: null

        })}catch (err) {
        console.log(err)
    }
   
   
})




module.exports = router