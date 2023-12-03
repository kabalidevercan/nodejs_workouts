const express = require('express')
const router = express.Router()
const path = require('path')


const data = {
    title : 'Populer Kurslar',
    categories : [
        'Web Gelistirme',
        'Programlama',
        'Mobil Uygulamalar',
        'Veri Analizi'
    ],
    blogList: [
        {
            blogId : 1,
            baslik : 'Komple Fizik muhendisi yetistirme 6 ayda',
            aciklama : 'Sifirdan ileri duzey fizik muhendisi yetistirmeyi sadece 6 ayda yapiyoruz inanman agri dagina baksin',
            resim : '1.jpg'
        },
        {
            blogId : 2,
            baslik : 'Komple Bilgisayar muhendisi yetistirme 6 ayda',
            aciklama : 'Sifirdan ileri duzey Bilgisayar muhendisi yetistirmeyi sadece 6 ayda yapiyoruz inanman agri dagina baksin',
            resim : '2.jpg'
        },
        {
            blogId : 3,
            baslik : 'Komple Elektrik muhendisi yetistirme 6 ayda',
            aciklama : 'Sifirdan ileri duzey Elektrik muhendisi yetistirmeyi sadece 6 ayda yapiyoruz inanman agri dagina baksin',
            resim : '3.jpg'
        },
    ],
}  

router.use('/blog/:blogId',(req,res)=> {
    res.render('users/blog-details')
})


router.use('/blog',(req,res)=> {
        res.render('users/blog',data)
})


router.use('/',(req,res)=>{
    res.render('users/index',data)
})


module.exports = router