const express = require('express')

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.static('node_modules'))

const dataOfProducts = [
    {id: 1, name:'iphone 14', price:30000,isActive: true,imageUrl : '1.jpeg'},
    {id: 2, name:'iphone 15', price:40000,isActive: false,imageUrl : '2.jpeg'},
    {id: 3, name:'iphone 16', price:50000,isActive: true,imageUrl : '3.jpeg'},
]



app.use('/products/:id', (req,res) => {
    const urun = dataOfProducts.find(u => u.id == req.params.id)
    res.render('productDetails', {
        product : urun
    })
    
})

app.use("/products" , (req,res)=> {
    res.render('products', {
        products: dataOfProducts
    })
    })
app.use("/", (req,res)=> {
    res.render('index')

})



app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})