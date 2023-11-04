const express = require('express')
const dudesController = require('../controllers/dudes.controller')

const dudesRouter = express.Router()


dudesRouter.use((req,res,next) => {
    console.log('ip adresss:' ,req.ip)
    next()
})

dudesRouter.post('/',dudesController.postDude)

dudesRouter.get('/',dudesController.getDudes)

dudesRouter.get('/:dudeId',dudesController.getDude)


module.exports = dudesRouter