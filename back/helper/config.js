const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT

const mysql = require('mysql2')
const databaseCredentials = {
    host: process.env.HOST,
    user: process.env.ACCOUNT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
const connection = mysql.createPool(databaseCredentials)

connection.getConnection(err => {
    if(err){
        console.error('Error connection database', err)
    }
    else{
        console.log('Database is connected')
    }
})

module.exports = {
    port,
    connection
}