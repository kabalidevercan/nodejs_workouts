const express = require('express');


const app = express()


const PORT= 3000;

const dudes = [
    {
        id:0 ,
        name: 'Ercan John CECECE'
    },
    {
        id:1 ,
        name: 'John Kabaliw'
    }
]

app.use((req,res,next)=> {
    const start =  Date.now();
    next();
    const delta = Date.now() - start
    console.log(`${req.method} and ${req.url} ${delta}`)
})





app.get('/dudes',(req,res) => {
    res.status(200).json(dudes)
})

app.get('/dudes/:dudeId',(req,res)=> {
    const dudeId = Number(req.params.dudeId);
    const dude = dudes[dudeId]
    if(dude) {
        res.status(200).json(dude)
    }else {
        res.status(404).json({
            error: 'Dude does not exist'
        })
    }}
     )




app.get('/messages', (req,res)=> {
    res.send('<ul><li>Hello John,Again!</li></ul>')
    
})

app.post('/messages',(req,res)=> {
    console.log('Updating Messages...!');
})

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})
