require('dotenv').config()
const mysql = require('mysql2')

//create connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_host,
//     port: process.env.DB_port,
//     user: process.env.DB_user,
//     password: process.env.DB_password,
//     database: process.env.DB_name
// })

const connection = mysql.createPool({
    host: process.env.DB_host,
    port: process.env.DB_port,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_name,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = connection