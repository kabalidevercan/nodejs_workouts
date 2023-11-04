const path = require('path')

function getMessages(req,res) {
    
    res.sendFile(path.join(__dirname,'..','public','images','mini.png'))
    // res.send('<ul><li>Hello John,Again!</li></ul>')
}

function postMessages(req,res) {
    console.log('Updating Messages...!');
}


module.exports = {
    getMessages,
    postMessages,
}