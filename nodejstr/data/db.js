const mysql = require('mysql2')
const config = require('../config')

let connection = mysql.createConnection(
    config.dbConnection
)

connection.connect((err)=>{
    if(err){
        return console.log(err)
    }

    console.log('mysql server baglantisi yapildi')
})

module.exports = connection.promise()
