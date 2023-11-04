const express = require('express');
const dudesRouter = require('./routes/dudes.router')
const messagesRouter = require('./routes/messages.router')
const path= require("path")

const app = express()

const PORT= 3000;

app.use(express.json());
// app.use('/site', express.static(path.join(__dirname,'public')))

app.use((req,res,next)=> {
    const start =  Date.now();
    next();
    const delta = Date.now() - start
    console.log(`${req.method}  and ${req.url} ${delta}`)
})

app.use('/dudes',dudesRouter)
app.use('/messages',messagesRouter)



app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})
