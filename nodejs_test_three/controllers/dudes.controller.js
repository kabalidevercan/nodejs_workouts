const model = require('../models/dudes.model')


function postDude(req,res) {

    if(!req.body.name){
        return res.status(400).json({
            error : 'missing dudes name'
        })
    }
     const newDude = {
        name : req.body.name,
        id : model.length
     };
     model.push(newDude)
     res.status(200).json(newDude)

}

function getDudes(req,res) {
    res.status(200).json(model)
}

function getDude(req,res){
    const dudeId = Number(req.params.dudeId);
    const dude = model[dudeId]
    if(dude) {
        res.status(200).json(dude)
    }else {
        res.status(404).json({
            error: 'Dude does not exist'
        })
    }}

    module.exports = {
        postDude,
        getDudes,
        getDude,
    }